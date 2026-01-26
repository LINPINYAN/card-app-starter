import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setBusy(true);
        setError("");

        try {
            const res = await login({ username, password });

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }

            const data = await res.json();
            localStorage.setItem("token", data.token);

            navigate("/cards/new");
        } catch (err) {
            console.error(err);
            setError("Login failed");
        } finally {
            setBusy(false);
        }
    }

    return (
        <main className="form-container">
            <h1 className="form-title">Login</h1>

            <form onSubmit={handleSubmit}>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="error-text">{error}</p>}

                <button
                    type="submit"
                    disabled={busy}
                    className="form-submit-btn"
                >
                    {busy ? "Logging in..." : "Login"}
                </button>
            </form>
        </main>
    );
}
