import {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { GrUserAdmin } from "react-icons/gr";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
function LoginBase({ title, route, registerRoute }) {
    let navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(false);
    const { email, password } = input;
    const onHandleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if(email === "" || password === "") {
            setError(true);
            return;
        }
        navigate("/" + route);
    };
    const onHandleRegister = (e) => {
        e.preventDefault();
        navigate("/" + registerRoute);
    }
  return (
    <div className="flex h-screen bg-gray-900">
      <div className="m-auto">
        <div>
          <div className="mt-5 bg-white rounded-lg shadow">
            <div className="flex">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                <GrUserAdmin className="inline align-text-top mx-2" />
                <h1 className="inline text-2xl font-semibold leading-none">
                  {title}
                </h1>
              </div>
              
            </div>
            {error ? (
                <div className="bg-red-500  mx-6 rounded-lg flex justify-center items-center text-white uppercase">
                <p className="text-xl p-2 font-bold">Usuario o contraseña incorrectos</p>
            </div>
            ): null}
            
            <div className="px-5 pb-5">
              <input
                type="email"
                name="email"
                value={email}
                onChange={onHandleChange}
                placeholder="Correo"
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 
                                                        text-base   transition duration-500 ease-in-out transform 
                                                        border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 
                                                        focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline 
                                                        focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={onHandleChange}
                placeholder="Contraseña"
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2  
                                                            text-base   transition duration-500 ease-in-out transform 
                                                            border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 
                                                            focus:bg-white dark:focus:bg-gray-800 focus:outline-none 
                                                            focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
            <hr className="mt-4" />
            <div className="flex flex-row-reverse p-3">
              <div className="flex-initial pl-3">
                <button to="/admin-panel"
                  type="button"
                  className=" hover:uppercase  flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-green-400 rounded-md hover:bg-green-600  transition duration-300 transform active:scale-95 ease-in-out"
                onClick={onHandleSubmit}
                >
                  <AiOutlineCheck />
                  <span className="pl-2 mx-1">Iniciar</span>
                </button>
              </div>
              <div className="flex-initial">
                <Link to="/"
                  className="hover:uppercase  duration-300 flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition transform active:scale-95 ease-in-out"
                >
                  <AiOutlineClose className="inline" />
                  <span className="pl-2 mx-1">Cancelar</span>
                </Link>
                
              </div>
              <button onClick={onHandleRegister} className="text-center text-xs pr-2 text-gray-500 cursor-pointer hover:text-black">¿No tienes cuenta? ¡Registrate!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginBase;
