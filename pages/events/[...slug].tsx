import EventList from "@/components/event/EventList";
import MyEvent from "@/models/MyEvent";
import Head from "next/head";

export default function EventSearchPage(props) {
    const events: MyEvent[] = props.data;

    const pageHeadData = (
        <Head>
            <title>Filtered events</title>
            <meta name="Description" content="Filtered events"/>
        </Head>
    )

    if (props.hasError) {
        return (
            <>
                {pageHeadData}
                <p>Please fix the dates</p>
            </>
        )
    }

    if (!events) {
        return (
            <>
                {pageHeadData}
                <p>Loading...</p>
            </>
        )
    }

    if (events.length === 0) {
        return (
            <>
                {pageHeadData}
                <p>No events found!</p>
            </>
        )
    }

    return (
        <>
            {pageHeadData}
            <div className="container">
                <h1 className="display-6 text-center pt-3">All Events</h1>
                <EventList customEvents={events}></EventList>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {

    const slug = context.params.slug;
    const year = slug[0];
    const month = slug[1];
    if (isNaN(year) || isNaN(month)) {
        console.log('returning')
        return {
            props: {
                hasError: true
            }
        };
    }
    const date = new Date(year, month - 1);

    const URL = 'https://nextjs-events-project-82f10-default-rtdb.firebaseio.com/';
    const transformedData: MyEvent[] = [];
    const response = await fetch(URL + 'events.json');
    const json = await response.json();

    for (const key in json) {
        const eventDate: Date = new Date(json[key].date);
        if (eventDate.getMonth() === date.getMonth() && eventDate.getFullYear() === date.getFullYear()) {
            transformedData.push(new MyEvent(
                key,
                json[key].title,
                json[key].date,
                json[key].address,
                json[key].description,
                json[key].imagePath,
                json[key].isFeatured
            ))
        }
    }

    return {
        props: {
            data: JSON.stringify(transformedData)
        }
    }
}
