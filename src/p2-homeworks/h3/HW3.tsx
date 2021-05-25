import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        if (name === '') {
            return
        }
        let user = {
            _id: v1(),
            name: name
        }

        let newUser = [user, ...users]
        setUsers(newUser)
    }

    return (
        <div>
            <hr/>
            <h3>homeworks 3</h3>

                <GreetingContainer users={users} addUserCallback={addUserCallback}/>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
