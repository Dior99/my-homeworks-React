import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
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
    }
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    const styleButton = `${s.filter} ${s.active}`

    return (
        <div>

            {mappedAffairs}
            <div className={s.button}>
                <button className={props.filter === "all" ? styleButton : s.filter} onClick={setAll}>All</button>
                <button className={props.filter === "high" ? styleButton : s.filter} onClick={setHigh}>High</button>
                <button className={props.filter === "middle" ? styleButton : s.filter} onClick={setMiddle}>Middle
                </button>
                <button className={props.filter === "low" ? styleButton : s.filter} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
