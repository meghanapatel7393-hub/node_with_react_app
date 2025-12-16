import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import AuthCard from "../components/AuthCard";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    if (!email || !password) return alert("All fields required");

    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <AuthCard title="Login">
      <input
        className="w-full p-2 border rounded mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="w-full p-2 border rounded mb-4"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={submit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>

      <p className="text-center mt-4 text-sm">
        Don’t have an account?{" "}
        <Link className="text-blue-600 font-semibold" to="/register">
          Register
        </Link>
      </p>
    </AuthCard>
  );
}

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import API from "../services/api";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const submit = async () => {
//     if (!email || !password) {
//       alert("All fields required");
//       return;
//     }

//     try {
//       const res = await API.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       navigate("/dashboard"); // ✅ redirect
//     } catch {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <>
//       <h2>Login</h2>

//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={submit}>Login</button>

//       <p>
//         New user? <Link to="/register">Register</Link>
//       </p>
//     </>
//   );
// }
