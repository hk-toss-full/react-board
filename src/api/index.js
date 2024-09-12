import axios from "axios"

const BASE_URL = "http://ec2-18-118-207-46.us-east-2.compute.amazonaws.com"

export const api = async (path, method, data) => {
    const uid = localStorage.getItem("uid")
    const res = await axios({
        url: BASE_URL + path, 
        method, 
        data, 
        headers: {
        "Authorization": uid
    }})
    console.log(res)
    return res;
}
