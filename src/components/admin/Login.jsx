import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../utils/api";
import { SET_TOKEN } from "../../utils/actionTypes";
import { AuthContext } from "../../contexts/AuthContext";
import "./login.css";

const Login = () => {
    const [username, setUsername] = useState("mor_2314");
    const [password, setPassword] = useState("83r5^_");

    const [error, setError] = useState(false);

    const { authDispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        instance
            .post("/auth/login", {
                username,
                password,
            })
            .then((res) => {
                localStorage.setItem("token", JSON.stringify(res.data.token));
                authDispatch({ type: SET_TOKEN });
                setError(false);
                navigate("/admin");
            })
            .catch(() => {
                setError(true);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="login-form container">
                {error && <p>Wrong username or password</p>}
                {!error && (
                    <p style={{ visibility: "hidden" }}>Error placeholder</p>
                )}
                <div className="login-input">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="login-input">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    value="Login"
                    className="input-submit"
                    style={{ width: "70%" }}
                />
            </form>
        </div>
    );
};

export default Login;
