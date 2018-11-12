import {DISABLE_BALANCE_ON_ADD,DISABLE_BALANCE_ON_EDIT,ALLOW_REGISTERATION} from "../action/type";

export const settingReducer = (state={},action)=>{

    switch (action.type)
    {
        case DISABLE_BALANCE_ON_ADD:{
            return {
                ...state,
                disableBalanceOnAdd:action.payload

            }
        }
        case DISABLE_BALANCE_ON_EDIT:{
            return {
                ...state,
                disableBalanceOnEdit:action.payload

            }
        }
        case ALLOW_REGISTERATION:{
            return {
                ...state,
                allowRegisteration:action.payload
            }
        }
        default:
            return state
    }
}