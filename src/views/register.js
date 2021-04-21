import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Register = () => {

    const[phone,setPhone] = useState("");
    const[password,setPassword] = useState("");
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[address1,setAddress1] = useState("");
    const[address2,setAddress2] = useState("");
    const[age,setAge] = useState(0);
    const[gender,setGender] = useState("Male");

    const history = useHistory();

    const handleSubmit =(e) =>{
        e.preventDefault();
        const userRegister = {name,phone,email,password,address1,address2,age,gender};

        fetch('http://localhost:3000/user',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userRegister)
          })
        .then(res => {
            history.replace('/');
        })
        
    }
    

    return ( 
        <div>
            <div className="log-form">
            <h2>Create a new account</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" title="name" placeholder="Your Name"
                value={name}
                onChange={(e)=>setName(e.target.value)} required />
                <input type="text" title="phone" placeholder="Phone no" 
                value={phone}
                onChange={(e)=>setPhone(e.target.value)} required />
                <input type="email" title="email" placeholder="E-mail" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)} required />
                <input type="password" title="password" placeholder="password"
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} required />

                <input type="text" title="address1" placeholder="Address1" 
                value={address1}
                onChange={(e)=>setAddress1(e.target.value)} required />
                <input type="text" title="address2" placeholder="Address2" 
                value={address2}
                onChange={(e)=>setAddress2(e.target.value)} />
                <input type="number" title="age" placeholder="Age" 
                value={age}
                onChange={(e)=>setAge(e.target.value)} required />
                
                <button type="submit" className="btn">Register</button>
                {/* <Link className="forgot" to="/register">New User? Register</Link> */}
            </form>
        </div>
        </div>
     );
}
 
export default Register;