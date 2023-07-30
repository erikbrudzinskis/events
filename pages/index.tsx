import {useContext} from "react";
import {FeaturedContext} from "@/store/featured-context";
import MyEvent from "@/models/MyEvent";
import EventList from "@/components/EventList";

export default function HomePage() {

    const featuredContext = useContext(FeaturedContext);
    const featuredEvents: MyEvent[] = featuredContext.featured;

    return (
        <>
            <div className="container">
                <h1 className="display-6">Featured Events</h1>
                <EventList customEvents={featuredEvents}></EventList>
            </div>
        </>
    )
}
