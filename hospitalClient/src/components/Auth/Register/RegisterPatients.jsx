import React from "react";
import RegisterBase from "./RegisterBase";
function RegisterPatients() {
  return (
    <RegisterBase
      title="Registo Paciente"
      route="patients"
      loginRoute="patient-login"
    />
  );
}
export default RegisterPatients;
