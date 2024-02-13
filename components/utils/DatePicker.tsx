import styles from './DatePicker.module.css'
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";

export default function DatePicker() {
    enum months {
        JANUARY,
        FEBRUARY,
        MARCH,
        APRIL,
        MAY,
        JUNE,
        JULY,
        AUGUST,
        SEPTEMBER,
        OCTOBER,
        NOVEMBER,
        DECEMBER
    }

    const router = useRouter();

    const today = new Date();
    const [selectedYear, setSelectedYear] = useState(today.getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());

    function searchHandler(event) {
        event.preventDefault();
        router.push("/events/" + selectedYear + "/" + selectedMonth)
    }


    function nextMonth(event) {
        event.preventDefault();
        if (!months[selectedMonth + 1]) {
            setSelectedMonth(0);
            setSelectedYear(selectedYear + 1);
        } else {
            setSelectedMonth(selectedMonth + 1);
        }
    }

    function previousMonth(event) {
        event.preventDefault();
        if (!months[selectedMonth - 1]) {
            setSelectedMonth(11);
            setSelectedYear(selectedYear - 1);
        } else {
            setSelectedMonth(selectedMonth - 1);
        }
    }

    function nextYear(event) {
        event.preventDefault();
        setSelectedYear(selectedYear + 1);
    }

    function previousYear(event) {
        event.preventDefault();
        setSelectedYear(selectedYear - 1);
    }

    return (
        <>
            <form onSubmit={searchHandler}>
                <div className={styles['date-wrapper']}>
                    <div className={styles.date}>
                        <div className={styles.selector}>
                            <button className={styles.left} onClick={previousYear}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className={styles.selection}>
                                {selectedYear}
                            </div>
                            <button className={styles.right} onClick={nextYear}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className={styles.selector}>
                            <button className={styles.left} onClick={previousMonth}>
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className={styles.selection}>
                                {months[selectedMonth]}
                            </div>
                            <button className={styles.right} onClick={nextMonth}>
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className={styles['button-wrapper']}>
                            <button className='btn btn-success' type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
