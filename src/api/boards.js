export const getBoards = async() =>{
    const {data} = await api("/api/boards", "get")
    return data;
}

export const getBoardById = async (id)=>{
    const {data} = await api(`/api/boards/${id}`, "get")
    return data
}

export const deleteBoard = async (id)=>{
    const {data} = await api(`/api/boards/${id}`, "delete")
    return data
}

export const updateBoard = async (id)=>{
    const {data} = await api(`/api/boards/${id}`, "put")
    return data
}