import { get, patch, post } from "../utils/request";

export const getExams = async (page) => {
    const result = await get(`exams?page=${page}`);
    return result;
}