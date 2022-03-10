import React from "react";
import municipalityReducer from "./municipalityReducer";
import municipalityContext from "./municipalityContext";
import { GET_MUNICIPALITIES } from "../../types/index";
import axios from "axios";
const MunicipalityState = (props) => {
    const initialState = {
        municipalities: [],
    }
    const [state, dispatch] = React.useReducer(municipalityReducer, initialState);
    const getMunicipalities = async (id) => {
        const api_url = import.meta.env.VITE_API_KEY;
        const res = await axios.get(`${api_url}municipalities/${id}`);
        dispatch({
            type: GET_MUNICIPALITIES,
            payload: res.data
        });
    }
    return (
        <municipalityContext.Provider
            value={{
                municipalities: state.municipalities,
                getMunicipalities
            }}
        >
            {props.children}
        </municipalityContext.Provider>
    );
}
export default MunicipalityState;