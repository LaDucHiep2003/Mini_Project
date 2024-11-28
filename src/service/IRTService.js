import {del, get, patch, post} from "../utils/request";

export const getDifficulty = async (option) => {
    const result = await post(`difficulty`, option);
    return result;
}

export const getTheta = async (option) => {
    const result = await post(`theta`, option);
    return result;
}

export const getOutfit = async (option) => {
    const result = await post(`outfit`, option);
    return result;
}