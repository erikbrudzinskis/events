import Link from "next/link";
import {useRef, useState} from "react";
import {useRouter} from "next/router";
import DatePicker from "@/components/utils/DatePicker";

export default function Header() {
    const [showCalendar, setShowCalendar] = useState(false);

    return (
        <div className="container-fluid px-0">
            <header>
                <nav className="navbar navbar-expand-lg navbar-transparent">
                    <Link className="navbar-brand navbar-brand-events" href="/">EVENTS</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" href="/">FEATURED EVENTS
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/events">ALL EVENTS</Link>
                            </li>
                            <li className="nav-item flex-row-reverse">
                                <button className="nav-link" onClick={() => setShowCalendar(!showCalendar)}>BROWSE BY DATE</button>
                                {showCalendar && <DatePicker/>}
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
