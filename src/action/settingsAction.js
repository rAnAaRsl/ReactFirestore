import {DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_REGISTERATION} from "./type";

export const setDisableBalanceOnAdd = () => {
    const settings = JSON.parse(localStorage.getItem("settings"));

    settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

    localStorage.setItem("settings",JSON.stringify(settings));

    return {
        type: DISABLE_BALANCE_ON_ADD,
        payload:settings.disableBalanceOnAdd
    }
}

export const setDisableBalanceOnEdit = () => {
    const settings = JSON.parse(localStorage.getItem("settings"));

    settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;

    localStorage.setItem("settings",JSON.stringify(settings));
    return {
        type: DISABLE_BALANCE_ON_EDIT,
        payload:settings.disableBalanceOnEdit
    }
}

export const setAllowRegisteration = () => {
    const settings = JSON.parse(localStorage.getItem("settings"));

    settings.allowRegisteration = !settings.allowRegisteration;

    localStorage.setItem("settings",JSON.stringify(settings));
    return {
        type: ALLOW_REGISTERATION,
        payload:settings.allowRegisteration
    }
}