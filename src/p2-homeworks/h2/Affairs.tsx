import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    } // need to fix

    const setHigh = () => {
        props.setFilter("high")
    }

    const setMiddle = () => {
        props.setFilter("middle")
    }

    const setLow = () => {
        props.setFilter("low")
    }

    const All = s.button + " " + (props.filter === "all" ? s.active : "")
    const High = s.button + " " + (props.filter === "high" ? s.active : "")
    const Middle = s.button + " " + (props.filter === "middle" ? s.active : "")
    const Low = s.button + " " + (props.filter === "low" ? s.active : "")

    return (
        <div>
            {mappedAffairs}
            <button onClick={setAll} className={All}>All</button>
            <button onClick={setHigh} className={High}>High</button>
            <button onClick={setMiddle} className={Middle}>Middle</button>
            <button onClick={setLow} className={Low}>Low</button>
        </div>
    )
}

export default Affairs;
