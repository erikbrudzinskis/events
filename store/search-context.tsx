import MyEvent from "@/models/MyEvent";
import {createContext, useState} from "react";

export type SearchContextType = {
    allEvents: MyEvent[];
    searchByYearAndMonth: (date: Date) => MyEvent[];
    setAllEvents: (events: MyEvent[]) => void;
    getAllEvents: () => MyEvent[];
}

export const SearchContext = createContext<SearchContextType | null>(null);

export function SearchContextProvider(props) {

    const customEvents: MyEvent[] = [
        new MyEvent('1', "Title 1", "2022-08-04", "Address 1", "Desc 1", "https://www.liveriga.com/userfiles/images/apmekle/pasakumi/koncerti-sovi/2022/08/viktors-cojs-2-46339137%20%281%29.jpeg?w=300&mode=3:2|crop", true),
        new MyEvent('2', "Title 2", "2024-12-05", "Address 2", "Desc 2", "https://www.liveriga.com/userfiles/images/apmekle/pasakumi/koncerti-sovi/2022/08/luk_ta_photo_by_inese_kalnina_img_4825.jpg?w=300&mode=3:2|crop", true),
        new MyEvent('3', "Title 3", "2023-02-21", "Address 3", "Desc 3", "https://www.liveriga.com/userfiles/images/apmekle/pasakumi/kino-1/2023/07/kinozu17-1.jpg?w=300&mode=3:2|crop", true),
        new MyEvent('4', "Title 4", "2023-02-21", "Address 3", "Desc 3", "https://www.liveriga.com/userfiles/images/apmekle/pasakumi/kino-1/2023/07/kinozu17-1.jpg?w=300&mode=3:2|crop", false),
        new MyEvent('5', "Title 5", "2023-02-21", "Address 3", "Desc 3", "https://www.liveriga.com/userfiles/images/apmekle/pasakumi/kino-1/2023/07/kinozu17-1.jpg?w=300&mode=3:2|crop", false),
        new MyEvent('6', "Title 6", "2022-01-21", "Address 3", "Desc 3", "https://www.liveriga.com/userfiles/images/apmekle/pasakumi/kino-1/2023/07/kinozu17-1.jpg?w=300&mode=3:2|crop", false),
        new MyEvent('7', "Title 7", "2023-02-21", "Address 3", "Desc 3", "https://www.liveriga.com/bad-image", false),
    ]

    const [allEventsHandler, setAllEventsHandler] = useState(customEvents);

    function searchByYearAndMonthHandler(date: Date) {
        return allEventsHandler.filter(e => {
            const eventDate: Date = new Date(e.date);
            console.log(date)
            console.log(eventDate)
            if (eventDate.getMonth() === date.getMonth() && eventDate.getFullYear() === date.getFullYear()) {
                return true;
            }
        });
    }

    function setAllEvents(events: MyEvent[]) {
        setAllEventsHandler(events);
    }

    function getAllEvents() {
        return allEventsHandler;
    }

    const context: SearchContextType = {
        allEvents: allEventsHandler,
        searchByYearAndMonth: searchByYearAndMonthHandler,
        setAllEvents: setAllEvents,
        getAllEvents: getAllEvents
    }

    return <SearchContext.Provider value={context}>
        {props.children}
    </SearchContext.Provider>
}
