import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getUser, deleteUser } from "../api/CrudApi";

function AllUser() {
  const StyleTable = styled(Table)`
    width: 90%;
    margin: 50px auto;
  `;

  const [users, setUsers] = useState([]);
  let i = 1;
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await getUser();
    setUsers(res.data);
  };

  const deleteUserDetails = async (id)=>
  {
    await deleteUser(id);
    getData();
  }
  return (
    <StyleTable>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Password</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {users.map((e) => (
          <TableRow key={e._id}>
            <TableCell>{i++}</TableCell>
            <TableCell>{e.uname}</TableCell>
            <TableCell>{e.phone}</TableCell>
            <TableCell>{e.age}</TableCell>
            <TableCell>{e.password}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: 20 }}
                component={Link}
                to={`/updateuser/${e._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserDetails(e._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyleTable>
  );
}

export default AllUser;
