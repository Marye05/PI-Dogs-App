import axios from "axios"
export const GET_DOGS = "GET_DOGS";
export const GET_BY_ID = "GET_BY_ID";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_BY_NAME = "GET_BY_NAME";
export const POST_DOGS = "POST_DOGS";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const DELETE_DOG = "DELETE_DOG";
export const DELETE_DOG_ID = "DELETE_DOG_ID";

export const getDogs = () => {
    return async function(dispatch){
        const response = await axios.get("http://localhost:3001/dogs")
        dispatch({ type: GET_DOGS, payload: response.data })
    }
}

export const getTemperaments = () => {
    return async function(dispatch){
        const response = await axios.get("http://localhost:3001/temps")
        dispatch({ type: GET_TEMPERAMENTS, payload: [...response.data?.map(temperament => temperament.name)]})
    }
}

export const getByName = (name) => {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        if (!response.data.length) { throw new Error("Perro no encontrado");
    }
        dispatch({ type: GET_BY_NAME, payload: response.data });
    };
};

export const getById = (id) => {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/dogs/${id}`)
        dispatch({ type: GET_BY_ID, payload: response.data })
    }
}

export const postDogs = (dog) => {
    return async function(dispatch){
        try {
            const response = await axios.post('http://localhost:3001/dogs', dog);
            dispatch({ type: POST_DOGS, payload: response.data });
            alert("Perro creado correctamente")
            return response;
        } catch (error) {
            alert("Sucedió un error al crear el perro")
        }
        
    };
};

export const filterByTemperament = (payload) => {
    return { type: FILTER_BY_TEMPERAMENT, payload }
}

export const orderByWeight = (payload) => {
    return { type: ORDER_BY_WEIGHT, payload }
}


export const filterByOrigin = (payload) => {
    return { type: FILTER_BY_ORIGIN, payload }
}
export const orderByName = (payload) => {
    return { type: ORDER_BY_NAME, payload }
}

export const deleteDog = (id) => async (dispatch) => {
    try {
        if (!id) {
            throw new Error("ID invalido");
        }
        const response = await axios.delete(`http://localhost:3001/dogs/delete/${id}`);
        dispatch({
            type: DELETE_DOG,
            payload: response.data
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deleteDogId = () => { // Actualización de estado para el detalle
    return {
        type: DELETE_DOG_ID,
    }
}

