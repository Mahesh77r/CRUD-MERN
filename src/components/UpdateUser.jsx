import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { getUser, updateUser } from "../api/CrudApi";
import { useNavigate, useParams } from "react-router-dom";

const userData = {
  uname: "",
  phone: "",
  age: "",
  password: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const UpdateUser = () => {
  const [data, setData] = useState(userData);
  const { uname, phone, age, password } = data;

  // using params for receiving the id value
  const { id } = useParams();

  let navigate = useNavigate();

  
  const loadUserDetails = async () => {
      const response = await getUser(id);
      setData(response.data);
    };
    
    useEffect(() => {
      loadUserDetails();
    },[]);
  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const updateUserDetail = async () => {
    await updateUser(data, id);
    navigate("/alluser");
  };

  return (
    <Container>
      <Typography variant="h4">Update User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="uname"
          value={uname}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Age</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="age"
          value={age}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="password"
          value={password}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateUserDetail()}
        >
          Update User
        </Button>
      </FormControl>
    </Container>
  );
};

export default UpdateUser;
