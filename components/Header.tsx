import Link from "next/link";
import {useRef} from "react";
import {useRouter} from "next/router";

export default function Header() {

    const yearInputRef = useRef();
    const monthInputRef = useRef();
    const router = useRouter();

    function searchHandler(event) {
        event.preventDefault();

        const year = yearInputRef.current.value;
        const month = monthInputRef.current.value;


        router.push("/events/" + year + "/" + month)
    }

    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand mb-0 h1">Events</Link>
                    <ul className="navbar-nav  mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/events">Browse all events</Link>
                        </li>
                    </ul>
                    <form onSubmit={searchHandler}>
                        <label htmlFor="year">Year</label>
                        <select ref={yearInputRef} name="year" id="year">
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                        <label htmlFor="month">Month</label>
                        <select ref={monthInputRef} name="month" id="month">
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}
