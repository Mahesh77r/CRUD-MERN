import { FormGroup , FormControl , Input , InputLabel, Typography, Button , styled } from '@mui/material';
import { useState } from 'react';
import { addUser } from '../api/CrudApi';
import { useNavigate } from 'react-router-dom';


const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div {
    margin-top:20px;
}
`

const AddUser = () => {

// initialize useNavigate hook
const Navigate = useNavigate();

// All input field object
const userData = {
    uname:"",
    phone:"",
    age:"",
    password:""
}
const [data , setData] = useState(userData);

// change handler function
function onChangeHandler (e){
    setData({ ...data, [e.target.name]: e.target.value });
};

// adding user function
const onSubmit  = async (e) =>{
    // e.preventDefault();
    await addUser(data);
    Navigate("/alluser")
}
  return (
      <Container>
        <Typography variant='h4'>Add User</Typography>

        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={onChangeHandler} type='text' name='uname' value={data.uname}/>
        </FormControl>

        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={onChangeHandler} type='text' name='phone' value={data.phone}/>
        </FormControl>

        <FormControl>
            <InputLabel>Age</InputLabel>
            <Input onChange={onChangeHandler} type='number' name='age' value={data.age}/>
        </FormControl>

        <FormControl>
            <InputLabel>Password</InputLabel>
            <Input onChange={onChangeHandler} type='text' name='password' value={data.password}/>
        </FormControl>

        <Button style={{marginTop:20,height:45}} variant='contained' onClick={() => onSubmit()}>Add User</Button>

    </Container>
  )
}

export default AddUser