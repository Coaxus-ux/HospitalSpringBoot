import { useState, useContext, useEffect } from "react";
import { FcKey } from "react-icons/fc";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import departmentsContext from "../../../context/department/departmentContext";
import municipalityContext from "../../../context/municipality/municipalityContext";
function RegisterBase({ title, route, loginRoute }) {
  const { departments, getDepartments } = useContext(departmentsContext);
  const { municipalities, getMunicipalities } = useContext(municipalityContext);
  useEffect(() => {
    getDepartments();
    getMunicipalities(91);
  },[]);


  let navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    municipaly: "",
    department: "",
    address: "",
    phone: "",
    password: "",
    passwordConfirm: "",
  });
  const {
    name,
    lastName,
    email,
    municipaly,
    department,
    address,
    phone,
    password,
    passwordConfirm,
  } = input;
  
  const onHandleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if(e.target.name === "department"){
      if(e.target.value !== department){
        getMunicipalities(e.target.value);
      }
      
    }
    
  };
 
  const onHandleLogin = (e) => {
    e.preventDefault();
    navigate("/" + loginRoute);
  };
  

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="m-auto">
        <div>
          <div className="mt-5 bg-white rounded-lg shadow">
            <div className="flex">
              <div className="flex-1 py-5 pl-5 overflow-hidden">
                <FcKey className="inline align-text-top mx-2" />
                <h1 className="inline text-2xl font-semibold leading-none">
                  {title}
                </h1>
              </div>
            </div>
            <div className="px-5">
              <div className="flex">
                <input
                  placeholder="Nombre"
                  name="name"
                  value={name}
                  onChange={onHandleChange}
                  className=" text-black mr-2 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  placeholder="Apellido"
                  name="lastName"
                  type="text"
                  onChange={onHandleChange}
                  value={lastName}
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>
              <input
                placeholder="Email"
                name="email"
                type="email"
                onChange={onHandleChange}
                value={email}
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <div className="flex pt-2">
                <div className="flex-grow flex flex-col">
                  <label
                    htmlFor="department"
                    className="duration-300  text-gray-500"
                  >
                    Selecciones un departamento
                  </label>
                  <select
                    name="department"
                    className=" placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200   focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    value={department}
                    onChange={onHandleChange}
                  >
                    <option value="">Seleccione un departamento</option>
                  {
                    departments.map(department => (
                      <option key={department.id} value={department.id}>{department.departmentName}</option>
                    ))
                  }
                    
                    
                  </select>
                </div>
                <div className="flex-grow pl-2 flex flex-col">
                  <label
                    htmlFor="municipaly"
                    className="duration-300  text-gray-500"
                  >
                    Selecciones un municipio
                  </label>
                  <select
                    name="municipaly"
                    className=" placeholder-gray-600 px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200   focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    value={municipaly}
                    onChange={onHandleChange}
                  >
                    <option value="">Seleccione un municipio</option>
                    {
                      municipalities.map(municipality => (
                        <option key={municipality.id} value={municipality.id}>{municipality.municipalityName}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="px-5 pb-5">
              <input
                placeholder="Contraseña"
                type="password"
                name="password"
                onChange={onHandleChange}
                value={password}
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <input
                placeholder="Repetir contraseña"
                type="password"
                name="passwordConfirm"
                onChange={onHandleChange}
                value={passwordConfirm}
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <div className="flex">
                <div className="flex-grow w-1/4 pr-2">
                  <input
                    placeholder="Telefono"
                    type="tel"
                    name="phone"
                    onChange={onHandleChange}
                    value={phone}
                    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
                <div className="flex-grow">
                  <input
                    placeholder="Dirección"
                    type="text"
                    name="address"
                    onChange={onHandleChange}
                    value={address}
                    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                </div>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="flex flex-row-reverse p-3">
              <div className="flex-initial pl-3">
                <button
                  type="button"
                  className=" hover:uppercase  flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-green-400 rounded-md hover:bg-green-600  transition duration-300 transform active:scale-95 ease-in-out"
                >
                  <AiOutlineCheck />
                  <span className="pl-2 mx-1">Iniciar</span>
                  
                </button>
              </div>
              <div className="flex-initial">
              
                <Link
                  to="/"
                  className="hover:uppercase  duration-300 flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition transform active:scale-95 ease-in-out"
                >
                  <AiOutlineClose className="inline" />
                  <span className="pl-2 mx-1">Cancelar</span>
                </Link>
              </div>
              <button onClick={onHandleLogin} className="text-center text-xs pr-2 text-gray-500 cursor-pointer hover:text-black">¿Ya tienes cuenta? ¡Incia Session!</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterBase;
