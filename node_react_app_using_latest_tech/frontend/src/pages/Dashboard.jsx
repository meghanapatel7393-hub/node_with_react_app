import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/auth/dashboard").catch(() => {
      localStorage.removeItem("token");
      navigate("/login");
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <p className="mt-6 text-gray-700">
          🎉 Welcome! You are successfully logged in.
        </p>
      </div>
    </div>
  );
}

// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import API from "../services/api";

// export default function Dashboard() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     API.get("/auth/dashboard").catch(() => {
//       localStorage.removeItem("token");
//       navigate("/login");
//     });
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <>
//       <h1>Dashboard</h1>
//       <button onClick={logout}>Logout</button>
//     </>
//   );
// }
