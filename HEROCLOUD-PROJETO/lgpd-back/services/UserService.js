import UserRepository from "./repositories/UserRepository.js"

const saveUser = (userModel) => {
    return UserRepository.saveUser(userModel);
}

const getUserById = (id) => {
    return UserRepository.getUserById(id);
}

const getAllUsers = () => {
    return UserRepository.getAllUsers();
}

const deleteUserById = (id) => {
    return UserRepository.deleteUserById();
}

const updateUserById = (id, userModel) => {
    return UserRepository.updateUserById(id, userModel);
}


const service = {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById
}

export default service;