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

export {
    index
};

