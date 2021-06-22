const initState = {
    isLoading: false
}

export type initStateType = typeof initState

type isLoadingAT = {
    type: 'IS-LOADING'
    isLoading: boolean
}

export const loadingReducer = (state: initStateType = initState, action: isLoadingAT): initStateType => {
    switch (action.type) {
        case 'IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): isLoadingAT => ({type: "IS-LOADING", isLoading}) // fix any