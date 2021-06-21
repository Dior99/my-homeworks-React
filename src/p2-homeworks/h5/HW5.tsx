import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";
import s from './Header.module.css'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <div>
                    <Header/>
                </div>


            <Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5
