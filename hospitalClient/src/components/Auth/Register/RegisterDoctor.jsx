import React from "react";
import RegisterBase from "./RegisterBase";
function RegisterDoctor() {
  return (
    <RegisterBase
      title="Registo Doctor"
      route="doctors"
      loginRoute="doctor-login"
    />
  );
}
export default RegisterDoctor;
