import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import LoginAdmin from "./components/Auth/Login/LoginAdmin";
import LoginDoctor from "./components/Auth/Login/LoginDoctor";
import LoginPatients from "./components/Auth/Login/LoginPatients";

import RegisterAdmin from "./components/Auth/Register/RegisterAdmin";
import RegisterDoctor from "./components/Auth/Register/RegisterDoctor";
import RegisterPatients from "./components/Auth/Register/RegisterPatients";
import DepartmentState from "./context/department/departmentState";

import MunicipalityState from "./context/municipality/municipalityState";
ReactDOM.render(
  <React.StrictMode>
    <DepartmentState>
      <MunicipalityState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/admin-login" element={<LoginAdmin />} />
            <Route path="/doctor-login" element={<LoginDoctor />} />
            <Route path="/patient-login" element={<LoginPatients />} />

            <Route path="/admin-register" element={<RegisterAdmin />} />
            <Route path="/doctors-register" element={<RegisterDoctor />} />
            <Route path="/patients-register" element={<RegisterPatients />} />
          </Routes>
        </BrowserRouter>
      </MunicipalityState>
    </DepartmentState>
  </React.StrictMode>,
  document.getElementById("root")
);
