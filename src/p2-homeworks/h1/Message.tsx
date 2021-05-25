import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.wrapperMessage}>
            <div className={s.blockImg}>
                <img className={s.messageImg} src={props.avatar}/>
            </div>
            <div className={s.triangle}/>
            <div className={s.message}>
                <h4>{props.name}</h4>
                <span className={s.text}>{props.message}</span>
                <span className={s.time}>
                    {props.time}
                </span>
            </div>
        </div>
    )
}

export default Message
