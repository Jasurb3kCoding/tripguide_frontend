// @flow 
import * as React from 'react';
import {useEffect, useState} from "react";
import Calendar, {OnChangeDateRangeCallback} from 'react-calendar';
import './style.css'

type RangeType = [Date | null, Date | null]

type Props = {};
export const HeroDateInput = (props: Props) => {
    const [selectedDate, setSelectedDate] = useState<RangeType>();
    const [isCalendarVisible, setIsCalendarVisible] = useState(false)
    const [showDoubleCalendar, setShowDoubleCalendar] = useState(window.innerWidth > 1024)

    const [fromDate, setFromDate] = useState<Date>()
    const [fromDateReadable, setFromDateReadable] = useState<String>()

    const [toDate, setToDate] = useState<Date>()
    const [toDateReadable, setToDateReadable] = useState<String>()

    const toggleCalendar = () => {
        setIsCalendarVisible(prevState => !prevState)
    }
    const onChange = (new_range: any) => {
        setSelectedDate(new_range)
        setIsCalendarVisible(false)
    }
    useEffect(() => {
        if (!selectedDate || !selectedDate[0] || !selectedDate[1]) return
        const fromDate = selectedDate[0]
        const toDate = selectedDate[1]
        setFromDate(fromDate)
        setFromDateReadable(fromDate.toLocaleDateString("en-US", {day: 'numeric', month: 'short', year: 'numeric'}))
        setToDate(toDate)
        setToDateReadable(toDate.toLocaleDateString("en-US", {day: 'numeric', month: 'short', year: 'numeric'}))
    }, [selectedDate])

    const handleResizeWindow = () =>{
        setShowDoubleCalendar(window.innerWidth > 1024)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow, false)
    }, [])
    return (
        <div className='relative w-full cursor-pointer flex justify-between col-span-1 gap-4'>
            <div onClick={toggleCalendar} className="flex-1 relative hero-date-input">
                <h2 className='inner-text'>Check In</h2>
                <h6 className='col-span-1'>{fromDateReadable || 'Add Date'}</h6>
            </div>
            <div onClick={toggleCalendar} className="flex-1 relative hero-date-input">
                <h2 className='inner-text'>Check Out</h2>
                <h6 className='col-span-1'>{toDateReadable || 'Add Date'}</h6>
            </div>
            <Calendar className={`${isCalendarVisible || 'hidden'}`} onChange={onChange} value={selectedDate}
                      showDoubleView={showDoubleCalendar} selectRange={true}/>
        </div>
    );
};