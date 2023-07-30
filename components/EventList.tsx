import EventItem from "@/components/EventItem";
import MyEvent from "@/models/MyEvent";

export default function EventList(props) {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {props.customEvents.map((customEvent: MyEvent) => {
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
