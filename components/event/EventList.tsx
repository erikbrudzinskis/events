import EventItem from "@/components/event/EventItem";
import MyEvent from "@/models/MyEvent";

export default function EventList(props) {

    if (!props.customEvents) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div className='blog-posts-wrap'>
                {JSON.parse(props.customEvents).map((customEvent: MyEvent) => {
                    return <EventItem
                        key={customEvent.id}
                        id={customEvent.id}
                        title={customEvent.title}
                        date={customEvent.date}
                        address={customEvent.address}
                        description={customEvent.description}
                        imagePath={customEvent.imagePath}
                        isFeatured={customEvent.isFeatured}
                    />
                })}
            </div>
        </>
    )
}
