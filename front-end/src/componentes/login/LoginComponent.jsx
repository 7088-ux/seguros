import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginComponent() {
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/usuarios/login", {
                gmail,
                password,
            });
            console.log("Login exitoso:", response.data);
            navigate("/home");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            alert("Credenciales incorrectas, por favor intenta nuevamente.");
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>

                <div className="input-box">
                    <input 
                        type="text"
                        placeholder="Email"
                        required
                        value={gmail}
                        onChange={(e) => setGmail(e.target.value)}
                    />
                    <FaUser className="icon" /> 
                </div>

                <div className="input-box">
                    <input 
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>No tienes una cuenta? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    );
}

export default LoginComponent;