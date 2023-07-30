import EventList from "@/components/EventList";
import {useContext} from "react";
import {SearchContext} from "@/store/search-context";
import MyEvent from "@/models/MyEvent";

export default function EventsPage() {

    const searchContext = useContext(SearchContext);
    const customEvents: MyEvent[] = searchContext.getAllEvents();

    return (
        <div className="container">
            <h1 className="display-6">All Events</h1>
            <EventList customEvents={customEvents}></EventList>
        </div>
    )
}
