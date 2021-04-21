
import { useState } from "react";
import {Link,useHistory} from 'react-router-dom';

const Login = () => {

    const[phone,setPhone] = useState("");
    const[password,setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userLogin = {phone,password};

        fetch('http://localhost:3000/user/login',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userLogin)
          })
        .then(res => {
            console.log(res.status);
            if(res.status===401){
                alert('Invalid Password');
            }
            else if(res.status===400){
                alert('User doesnt exist');
            }
            return res.json();
        })
        .then(data => {
            console.log(data.token);
            localStorage.setItem('token',data.token);
            localStorage.setItem('phone',phone);
            history.replace('/home');
        })
    }



    return ( 
        <div className="log-form">
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" title="phone" placeholder="Phone no" 
                value={phone}
                onChange={(e)=>setPhone(e.target.value)} />
                <input type="password" title="password" placeholder="password"
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit" className="btn">Login</button>
                <Link className="forgot" to="/register">New User? Register</Link>
            </form>
        </div>
     );
}
 
export default Login;