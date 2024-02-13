import EventDetails from "@/components/event/EventDetails";
import MyEvent from "@/models/MyEvent";
import Head from "next/head";

export default function EventPage(props) {

    if (!props.event) {
        return <p>Loading...</p>
    }

    return (
        <>
            <Head>
                <title>{props.event.title}</title>
                <meta name="Description" content={props.event.description}/>
            </Head>
            <h1 className="display-6 text-center pt-3">Event Details</h1>
            <EventDetails event={props.event}></EventDetails>
        </>
    )
}

export async function getStaticProps(context) {
    const URL = 'https://nextjs-events-project-82f10-default-rtdb.firebaseio.com/';

    const eventId = context.params.id;
    let transformedData: MyEvent;
    const response = await fetch(URL + 'events/' + eventId + '.json');
    const json = await response.json();

    if (!json) {
        return {notFound : true}
    }
    transformedData = new MyEvent(
        eventId,
        json.title,
        json.date,
        json.address,
        json.description,
        json.imagePath,
        json.isFeatured
    )
    return {
        props: {
            // Do we really need stringify?
            event: JSON.stringify(transformedData)
        },
        revalidate: 60
    }
}

export async function getStaticPaths() {
    const URL = 'https://nextjs-events-project-82f10-default-rtdb.firebaseio.com/';

    const IDs: string[] = [];
    const response = await fetch(URL + 'events.json');
    const json = await response.json();
    for (const key in json) {
        // Only pre-generate featured events to avoid performance issues
        if (json[key].isFeatured) {
            IDs.push(key)
        }
    }
    const params = IDs.map(e => ({params: {id: e}}))

    return {
        paths: params,
        fallback: true
    }
}

