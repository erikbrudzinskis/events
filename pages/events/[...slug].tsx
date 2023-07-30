import {useRouter} from "next/router";
import {useContext} from "react";
import {SearchContext} from "@/store/search-context";
import EventList from "@/components/EventList";

export default function EventSearchPage() {
    const router = useRouter();
    const searchContext = useContext(SearchContext);

    if (!router.query.slug) {
        return <p>Loading...</p>;
    }

    const year = +router.query.slug[0];
    const month = +router.query.slug[1];
    if (isNaN(year) || isNaN(month)) {
        return <p>Set a correct date!</p>;
    }
    const date = new Date(year, month - 1);

    const foundEvents = searchContext.searchByYearAndMonth(date);
    if (foundEvents.length === 0) {
        return <p>No events found!</p>
    }

    return (
        <>
            <div className="container">
                <h1 className="display-6">All Events</h1>
                <EventList customEvents={foundEvents}></EventList>
            </div>
        </>
    )
}
