import axios, {AxiosResponse} from "axios"

export const getAllUsers = async (): Promise<AxiosResponse> => {
    try {
        return await axios.get("http://localhost:5034/api/User");
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (user): Promise<AxiosResponse> => {
    try {
        return await axios.post("http://localhost:5034/api/User", user);

    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (user) => {
    try {
        console.log(user)
        return await axios.patch(`http://localhost:5034/api/User`, user);
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`http://localhost:5034/api/User/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const getUserById = async (id) => {
    try {
        return await axios.get(`http://localhost:5034/api/user/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const getCabinetForUser = async (id) => {
    try {
        return await axios.get(`http://localhost:5034/api/Cabinet/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const createLandmarksForUser = async (id) => {
    const response = await axios.patch('http://localhost:5034/api/user-landmarks', {id: id})
}

export const getAllCabinets = async () => {
    try {
        return await axios.get("http://localhost:5034/api/Cabinet");
    } catch (error) {
        console.log(error);
    }
}

export const createCabinet = async (cabinet) => {
    try {
        return await axios.post("http://localhost:5034/api/Cabinet",  cabinet);

    } catch (error) {
        console.log(error);
    }
}

export const updateCabinetsForUser = async (user_id, cabinets_id) => {
    try {
        return await axios.post("http://localhost:5034/api/Cabinet/assign-cabinets", {
            data: {
                userId: user_id,
                number: cabinets_id
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const getLogs = () => {

}
