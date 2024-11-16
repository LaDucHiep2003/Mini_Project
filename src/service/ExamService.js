import {del, get, patch, post} from "../utils/request";

export const getExams = async (page) => {
    const result = await get(`exams?page=${page}`);
    return result;
}

export const getDetailExam = async (id) => {
    const result = await get(`exams/detail/${id}`);
    return result;
}

export const createExam = async (option) => {
    const result = await post("createExam",option);
    return result;
}

export const editExam = async (id, option) => {
    const result = await patch(`editExam/${id}`, option);
    return result;
}

export const deleteExam = async (id) => {
    const result = await del(`deleteExam/${id}`);
    return result;
}