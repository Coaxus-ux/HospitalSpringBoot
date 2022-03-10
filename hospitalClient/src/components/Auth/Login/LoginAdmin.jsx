import React from 'react'
import LoginBase from './LoginBase'
function LoginAdmin() {
    return (
        <LoginBase title="Inicio administración" route="admin-login"
        registerRoute="admin-register" />
    )
}
export default LoginAdmin;