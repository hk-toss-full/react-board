import { api } from ".";

export const getBoards = async() =>{
    const {data} = await api("/api/boards", "get")
    return data;
}

export const getBoardById = async (id)=>{
    const {data} = await api(`/api/boards/${id}`, "get")
    return data
}
export const addBoard = async({title, content})=>{
    const {data} = await api("/api/boards", "post", {title, content});
    return data
    
}
export const deleteBoard = async (id)=>{
    const {data} = await api(`/api/boards/${id}`, "delete")
    return data
}

export const updateBoard = async (id, {title, content})=>{
    const {data} = await api(`/api/boards/${id}`, "put", {title, content})
    return data
}