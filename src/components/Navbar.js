import React from 'react';
import { AppBar , styled , Toolbar} from '@mui/material';
import { Link } from 'react-router-dom';
function Navbar() {
    const Header = styled(AppBar)`
    background: #111111;
    `
    const Tabs = styled(Link)`
    text-decoration:none;
    margin-right:20px;
    font-size:20px;
    color: #ffffff;
    `
  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to={'/'} style={{fontSize :30 ,marginRight:40}}>Crud - Operation</Tabs>
            <Tabs to={'/alluser'}>All User</Tabs>
            <Tabs to={'/adduser'}>Add User</Tabs>
        </Toolbar>
    </Header>
  )
}

export default Navbar