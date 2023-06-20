import mongoose from "mongoose";
const userSchema = mongoose.Schema(
    {
        uname: {type: String, require: true},
        phone: {type: String, require: true},
        age: {type: Number, require: true},
        password: {type: String, require: true},
    }
);

const user = mongoose.model('user', userSchema);


export default user;