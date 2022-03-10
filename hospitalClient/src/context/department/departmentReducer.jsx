import {
    GET_DEPARTMENTS
} from '../../types/index';
export default (state, action) => {
    switch (action.type) {
        case GET_DEPARTMENTS:
            return {
                ...state,
                departments: action.payload
            };
    }
}