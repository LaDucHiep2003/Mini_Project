import {del, get, patch, post} from "../utils/request";

export const getQuestions = async (page) => {
    const result = await get(`questions?page=${page}`);
    return result;
}

export const createQuestion = async (option) => {
    const result = await post(`createQuestion`, option);
    return result;
}
