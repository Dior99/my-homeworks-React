import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import loader from "../../Assets/Images/Iphone-spinner.gif"

function HW10() {
    const dispatch = useDispatch()
    let loading = useSelector<AppStoreType>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1000)
    };

    return (
        <div style={{textAlign: 'center'}}>
            <hr/>
            <h3>homeworks 10</h3>

            {/*should work (должно работать)*/}
            <div style={{height: '70px'}}>
                {loading
                    ? (
                        <div>
                            <img src={loader}/>
                        </div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
