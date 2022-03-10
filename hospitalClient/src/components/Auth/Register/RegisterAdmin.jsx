import React from "react";
import RegisterBase from "./RegisterBase";

function RegisterAdmin() {
  return (
    <RegisterBase
      title="Registo Administrador"
      route="admin-login"
      loginRoute="admin-login"
    />

  );
}
export default RegisterAdmin;