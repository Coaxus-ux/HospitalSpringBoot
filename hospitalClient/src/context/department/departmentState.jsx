import React from "react";
import departmentReducer from "./departmentReducer";
import departmentContext from "./departmentContext";
import { GET_DEPARTMENTS } from "../../types/index";
import axios from "axios";
const DepartmentState = (props) => {
  const initialState = {
    departments: [],
  };
  const [state, dispatch] = React.useReducer(departmentReducer, initialState);
  const getDepartments = async () => {
    const api_url = import.meta.env.VITE_API_KEY;
    const res = await axios.get(`${api_url}departments`);
    dispatch({
      type: GET_DEPARTMENTS,
      payload: res.data
    });
  };
  return (
    <departmentContext.Provider
      value={{
        departments: state.departments,
        getDepartments
      }}
    >
      {props.children}
    </departmentContext.Provider>
  );
};
export default DepartmentState;