import {
    GET_MUNICIPALITIES
} from '../../types/index';
export default (state, action) => {
    switch (action.type) {
        case GET_MUNICIPALITIES:
            return {
                ...state,
                municipalities: action.payload
            };
    }
}