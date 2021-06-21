import {initialPeople, UserType} from "../HW8";

export enum ACTION_TYPE {
    SORT_UP = "HW8/SORT_UP",
    SORT_DOWN = "HW8/SORT_DOWN",
    CHECK_AGE_18 = "HW8/CHECK_AGE_18",
}

type SortUp = {
    type: ACTION_TYPE.SORT_UP,
}

export const sortUpAC = (): SortUp => ({type: ACTION_TYPE.SORT_UP})


type SortDown = {
    type: ACTION_TYPE.SORT_DOWN
}

export const sortDownAC = (): SortDown => ({type: ACTION_TYPE.SORT_DOWN})

type CheckAge18 = {
    type: ACTION_TYPE.CHECK_AGE_18
}

export const checkAge18AC = (): CheckAge18 => ({type: ACTION_TYPE.CHECK_AGE_18})

type ActionType = SortUp | SortDown | CheckAge18

export const homeWorkReducer = (state: Array<UserType> = initialPeople, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case ACTION_TYPE.SORT_UP: {
            let stateCopy = state.map(el => ({...el}))
            return stateCopy.sort((a,b) => a.name > b.name ? 1 : -1)
        }
        case ACTION_TYPE.SORT_DOWN: {
            let stateCopy = state.map(el => ({...el}))
            return stateCopy.sort((a,b) => a.name > b.name ? -1 : 1)
        }
        case ACTION_TYPE.CHECK_AGE_18: {
            let stateCopy = state.map(el => ({...el}))
            return stateCopy.filter(el => el.age > 18 ? el : null)
        }
        default:
            return state
    }
}