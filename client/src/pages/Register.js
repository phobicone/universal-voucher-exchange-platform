import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

const navigate = useNavigate();

const [formData, setFormData] = useState({
name: "",
email: "",
password: ""
});

const handleChange = (e) => {

setFormData({
...formData,
[e.target.name]: e.target.value
});

};

const handleSubmit = async (e) => {

e.preventDefault();

try {

const response = await axios.post(
"http://localhost:5000/api/auth/register",
formData
);

console.log("Server response:", response.data);

alert("Registration successful ✅");

navigate("/");

} catch (error) {

console.log(error.response);

alert(
error.response?.data?.message ||
"Registration failed"
);

}

};

return (

<div style={{ padding: "40px" }}>

<h2>Register</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Enter your name"
value={formData.name}
onChange={handleChange}
required
/>

<br /><br />

<input
type="email"
name="email"
placeholder="Enter your email"
value={formData.email}
onChange={handleChange}
required
/>

<br /><br />

<input
type="password"
name="password"
placeholder="Enter password"
value={formData.password}
onChange={handleChange}
required
/>

<br /><br />

<button type="submit">
Register
</button>

</form>

<br />

<button onClick={() => navigate("/")}>
Already have an account? Login
</button>

</div>

);

}

export default Register;