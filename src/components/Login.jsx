import { useState } from "react"
import { login, register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const name= "";
const password = "";
const Login = () => {
    const navigate = useNavigate() // 페이지 이동을 위한 react-router-dom hook
    const [state, setState] = useState({name, password})
    const [err, setErr] = useState("");
    const onChange  = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]:value})
    }
    const onSubmit = async() => {
        setErr("")
        try {
            const data = await login(state) 
            localStorage.setItem("uid", data.id)
            navigate("/") // 여기에 path 입력 
        } catch (error) {
            const data =error.response.data;
            setErr(data)
        }
    }
    return <div>
        <h1 style={{color:"red"}}>{err}</h1>
        <input type="text" name="name" onChange={onChange} />
        <input type="password" name="password" onChange={onChange} />
        <button onClick={onSubmit}>로그인</button>
    </div>
}
export default Login