import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    /*const inputClass = error ? s.error : ''*/

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }

    const styleInput = {
        boxShadow: error ? "inset 0 0 20px red" : ''
    }

    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <input value={name}
                       className={s.input}
                       placeholder="Name"
                       style={styleInput}
                       onChange={setNameCallback}
                       onKeyPress={onKeyPress}/>
                <div className={s.errorText}>{error}</div>
            </div>
                <div className={s.totalUsers}>{totalUsers}</div>
                <button className={s.button} onClick={addUser}>add</button>
        </div>
    )
}

export default Greeting
