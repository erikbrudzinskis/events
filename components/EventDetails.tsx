import {useContext} from "react";
import {SearchContext} from "@/store/search-context";

export default function EventDetails(props) {
    const searchContext = useContext(SearchContext);

    console.log(searchContext.getAllEvents())
    const event = searchContext.getAllEvents().find(e => {
            return e.id === props.eventId
        });

    if (!event) {
        return <p>Event not found!</p>;
    }

    const date = new Date(event.date).toLocaleDateString();

    return (
        <>
            <div className="container">
                <h2>{event.title}</h2>
                <img src={event.imagePath} alt="{event.title}"/>
                <p>{event.description}</p>
                <p>{date}</p>
                <p>{event.address}</p>
            </div>
        </>
    )
}
