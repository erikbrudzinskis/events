import EventDetails from "@/components/EventDetails";
import {useRouter} from "next/router";

export default function EventPage() {
    const router = useRouter();
    const eventId = +router.query.id;

    return (
        <>
            <h1>Event Details</h1>
            <EventDetails eventId={eventId}></EventDetails>
        </>
    )
}
