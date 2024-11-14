import { get, patch, post, del } from "../utils/request";

export const getCategorys = async (page) => {
    const result = await get(`category?page=${page}`);
    return result;
}

export const getDetailCategory = async (id) => {
    const result = await get(`category/detail/${id}`);
    return result;
}

export const createCategory = async (option) => {
    const result = await post("createCategory",option);
    return result;
}

export const deleteCategory = async (id) => {
    const result = await del(`deleteCategory/${id}`);
    return result;
}