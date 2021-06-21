import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes'
import s from './Header.module.css'

function Header() {
    const menuItems = [
        {id: 2, title: "PreJunior", path: PATH.PRE_JUNIOR},
        {id: 3, title: "Junior", path: PATH.JUNIOR},
        {id: 4, title: "Junior+", path: PATH.JUNIOR_PLUS},
    ]

    const menu = menuItems.map(el => {
        return (
            <li key={el.id}>
                <NavLink activeClassName={s.active} to={el.path}>{el.title}</NavLink>
            </li>
        )
    })

    return (
        <div className={s.header}>
            <ul className={s.menu}>
                {menu}
            </ul>
            <div className={s.block}/>
        </div>
    )
}

export default Header
