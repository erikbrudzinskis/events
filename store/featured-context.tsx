import {createContext, useState} from "react";
import MyEvent from "@/models/MyEvent";

export type FeaturedContextType = {
    featured: MyEvent[];
    addFeaturedEvent: (event: MyEvent) => void;
    removeFeaturedEvent: (id: number) => void;
    isEventFeatured: (id: number) => boolean;
}

export const FeaturedContext = createContext<FeaturedContextType | null>(null);

export function FeaturedContextProvider(props) {
    const [featuredEvents, setFeaturedEvents] = useState([]);

    function addFeaturedEventHandler(event: MyEvent): void {
        setFeaturedEvents((previousFeaturedEvents) => {
            return previousFeaturedEvents.concat(event);
        });
    }

    function removeFeaturedEventHandler(eventId: number): void {
        setFeaturedEvents((previousFeaturedEvents) => {
            return previousFeaturedEvents.filter(e => {
                return e.id !== eventId;
            })
        });
    }

    function isEventFeaturedHandler(eventId: number): boolean {
        return featuredEvents.some(e => e.id === eventId);
    }

    const context: FeaturedContextType = {
        featured: featuredEvents,
        addFeaturedEvent: addFeaturedEventHandler,
        removeFeaturedEvent: removeFeaturedEventHandler,
        isEventFeatured: isEventFeaturedHandler
    }

    return <FeaturedContext.Provider value={context}>
        {props.children}
    </FeaturedContext.Provider>
}
