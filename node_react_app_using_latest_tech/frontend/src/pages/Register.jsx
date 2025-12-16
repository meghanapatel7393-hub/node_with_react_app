import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import AuthCard from "../components/AuthCard";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    if (!email || !password) return alert("All fields required");

    try {
      await API.post("/auth/register", { email, password });
      navigate("/login");
    } catch {
      alert("User already exists");
    }
  };

  return (
    <AuthCard title="Register">
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
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Register
      </button>

      <p className="text-center mt-4 text-sm">
        Already have an account?{" "}
        <Link className="text-blue-600 font-semibold" to="/login">
          Login
        </Link>
      </p>
    </AuthCard>
  );
}

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import API from "../services/api";

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const submit = async () => {
//     if (!email || !password) {
//       alert("All fields required");
//       return;
//     }

//     try {
//       await API.post("/auth/register", { email, password });
//       alert("Registered successfully");
//       navigate("/login"); // ✅ go to login
//     } catch {
//       alert("User already exists");
//     }
//   };

//   return (
//     <>
//       <h2>Register</h2>

//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={submit}>Register</button>

//       <p>
//         Already have account? <Link to="/login">Login</Link>
//       </p>
//     </>
//   );
// }
