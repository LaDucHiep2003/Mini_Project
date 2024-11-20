import {del, get, patch, post} from "../utils/request";

export const getQuestions = async (page) => {
    const result = await get(`questions?page=${page}`);
    return result;
}
export const getDetailQuestion = async (id) => {
    const result = await get(`question/detail/${id}`);
    return result;
}

export const createQuestion = async (option) => {
    const result = await post(`createQuestion`, option);
    return result;
}

export const deleteQuestion = async (id) => {
    const result = await del(`deleteQuestion/${id}`);
    return result;
}

export const editQuestion = async (id,option) => {
    const result = await patch(`editQuestion/${id}`, option);
    return result;
}


