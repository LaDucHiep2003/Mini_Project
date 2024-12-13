import {del, get, patch, post} from "../utils/request";

export const getResult = async () => {
    const result = await get(`results`);
    return result;
}

export const getResultDetail = async (id) => {
    const result = await get(`result/detail/${id}`);
    return result;
}

export const createResult = async (option) => {
    const result = await post("createResult",option);
    return result;
}