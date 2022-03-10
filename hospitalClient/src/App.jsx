import React from "react";
import { Link } from "react-router-dom";
function App() {
  return (
    <div
      className="flex h-screen justify-center 
                items-center bg-gray-900"
    >
      <div
        className="bg-white flex flex-col h-56 w-96 justify-center 
                items-center rounded-tl-lg rounded-br-lg shadow-lg"
        style={{ backdropFilter: "blur(20px)" }}
      >
        <Link
          to="/admin-login"
          className="my-2 p-2 bg-blue-300 hover:uppercase hover:bg-blue-500 duration-300 text-center w-56 text-lg hover:text-xl hover:font-bold rounded-full"
        >
          Administrador
        </Link>
        <Link
          to="/doctor-login"
          className="my-2 p-2 bg-blue-300 hover:uppercase hover:bg-blue-500 duration-300 text-center w-56 text-lg hover:text-xl hover:font-bold rounded-full"
        >
          Medico
        </Link>
        <Link
          to="/patient-login"
          className="my-2 p-2 bg-blue-300 hover:uppercase hover:bg-blue-500 duration-300 text-center w-56 text-lg hover:text-xl hover:font-bold rounded-full"
        >
          Usuario
        </Link>
      </div>
    </div>
  );
}
export default App;
