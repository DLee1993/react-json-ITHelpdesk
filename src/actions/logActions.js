import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
} from "./types";

//info - get logs from server
export const getLogs = () => {
    //info - redux-thunk allows you to return a function that allows us to dispatch to the reducer at any time
    return async (dispatch) => {
        try {
            //info - sets loading to true in the state
            setLoading();

            //info - make a fetch request to logs to retrieve our data
            const res = await fetch("/logs");
            const data = await res.json();

            //info - dispatch the type which is to get the logs and the payload is the data from the fetch request
            dispatch({
                type: GET_LOGS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data,
            });
        }
    };
};

//info - add log to server
export const addLog = (log) => {
    //info - redux-thunk allows you to return a function that allows us to dispatch to the reducer at any time
    return async (dispatch) => {
        try {
            //info - sets loading to true in the state
            setLoading();

            //info - make a fetch request to logs to retrieve our data
            const res = await fetch("/logs", {
                method: "POST",
                body: JSON.stringify(log),
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();

            //info - dispatch the type which is to get the logs and the payload is the data from the fetch request
            dispatch({
                type: ADD_LOG,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data,
            });
        }
    };
};

//info - delete log from server
export const deleteLog = (id) => {
    //info - redux-thunk allows you to return a function that allows us to dispatch to the reducer at any time
    return async (dispatch) => {
        try {
            //info - sets loading to true in the state
            setLoading();

            //info - make a fetch request to logs to retrieve our data
            await fetch(`/logs/${id}`, {
                method: "DELETE",
            });

            //info - dispatch the type which is to get the logs and the payload is the data from the fetch request
            dispatch({
                type: DELETE_LOG,
                payload: id,
            });
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data,
            });
        }
    };
};

//info - update log on server
export const updateLog = (log) => {
    //info - redux-thunk allows you to return a function that allows us to dispatch to the reducer at any time
    return async (dispatch) => {
        try {
            //info - sets loading to true in the state
            setLoading();

            //info - make a fetch request to logs to retrieve our data
            const res = await fetch(`/logs/${log.id}`, {
                method: "PUT",
                body: JSON.stringify(log),
                headers: {
                    "Content-type": "application/json",
                },
            });

            const data = await res.json();

            //info - dispatch the type which is to get the logs and the payload is the data from the fetch request
            dispatch({
                type: UPDATE_LOG,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: LOGS_ERROR,
                payload: error.response.data,
            });
        }
    };
};

//info - Set the current log
export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log,
    };
};

//info - Clear the current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    };
};

//info - Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};
