import {del, get, patch, post} from "../utils/request";

export const register = async (option) => {
    const result = await post(`register`, option);
    return result;
}

export const login = async (option) => {
    const result = await post(`login`, option);
    return result;
}

export const getUserToken = async (option) => {
    const result = await post(`user/token`, option);
    return result;
}