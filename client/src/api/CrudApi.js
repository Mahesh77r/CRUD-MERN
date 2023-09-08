import axios from 'axios';

const URL = 'https://crud-mern-qms1-mahesh77r.vercel.app';

// adduser api
export const addUser = async(data) => {
    try{
        console.log(data);
       return await axios.post(`${URL}/adduser`,data);
    }
    catch(err){
        console.log("Error occurs while running adduser function",err);
    }
};

// view  user api
export const getUser = async(id) => {
    // id can be null if we need to view all user
    id = id || '';
    try{
       return await axios.get(`${URL}/alluser/${id}`);
    }
    catch(err){
        console.log("Error occurs while running getUser function",err);
    }
};

// update user api
export const updateUser = async(data,id) => {
    try{
       return await axios.put(`${URL}/updateuser/${id}`,data);
    }
    catch(err){
        console.log("Error occurs while running updateUser function");
    }
};

// delete user api
export const deleteUser = async(id) => {
    try{
       return await axios.delete(`${URL}/${id}`);
    }
    catch(err){
        console.log("Error occurs while running deleteUser function");
    }
};
