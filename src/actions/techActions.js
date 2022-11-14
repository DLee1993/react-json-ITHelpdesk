import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR, SET_LOADING } from "./types";

//info - Get techs from server
export const getTechs = () => {
    //info - redux-thunk allows you to return a function that allows us to dispatch to the reducer at any time
    return async (dispatch) => {
        try {
            //info - sets loading to true in the state
            setLoading();

            //info - make a fetch request to logs to retrieve our data
            const res = await fetch("/techs");
            const data = await res.json();

            //info - dispatch the type which is to get the logs and the payload is the data from the fetch request
            dispatch({
                type: GET_TECHS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: TECHS_ERROR,
                payload: error.response.data,
            });
        }
    };
};

//info - Add a new tech to server
export const addTech = (tech) => {
    //info - redux-thunk allows you to return a function that allows us to dispatch to the reducer at any time
    return async (dispatch) => {
        try {
            //info - sets loading to true in the state
            setLoading();

            //info - make a fetch request to logs to retrieve our data
            const res = await fetch("/techs", {
                method: "POST",
                body: JSON.stringify(tech),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();

            //info - dispatch the type which is to get the logs and the payload is the data from the fetch request
            dispatch({
                type: ADD_TECH,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: TECHS_ERROR,
                payload: error.response.data,
            });
        }
    };
};

//info - Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
