const BASE_URL = `${import.meta.env.VITE_API_URL}/pets`;
import axios from "axios";

const index = async () => {
    try {
        const response = await axios.get(BASE_URL)
        return response.data.pet    
    } catch (error) {
        console.log(error);  
    }
}

const show = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`)
        return response.data.pet
    } catch (error) {
        console.log(error);   
    }
}

const create = async (pet) => {
    try {
        const response = await axios.post(BASE_URL, pet)
        return response.data.pet
    } catch (error) {
        console.log(error);
    }
}

const edit = async (petId, pet) => {
    try {
        const response = await axios.put(`${BASE_URL}/${petId}`, pet)
        return response.data.pet
    } catch (error) {
        console.log(error);
    }
}

const remove = async (petId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${petId}`)
        return response.data.pet
    } catch (error) {
        console.log(error)
    }
}

export {
    create, edit, index, remove, show
};

