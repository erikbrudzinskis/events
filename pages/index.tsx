import Head from 'next/head';

import MyEvent from "@/models/MyEvent";
import EventList from "@/components/event/EventList";

export default function HomePage(props) {
    return (
        <>
            <Head>
                <title>NextJS Events</title>
                <meta name="Description" content="Find a lot of great events here..."/>
            </Head>
            <div className="container">
                <h1 className="display-6 text-center pt-3">Featured Events</h1>
                <EventList customEvents={props.data}></EventList>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const URL = 'https://nextjs-events-project-82f10-default-rtdb.firebaseio.com/';
    const transformedData: MyEvent[] = [];
    const response = await fetch(URL + 'events.json');
    const json = await response.json();
    for (const key in json) {
        if (json[key].isFeatured) {
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
        },
        revalidate: 1800
    }
}
