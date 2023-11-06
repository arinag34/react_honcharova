import { Link, useLoaderData } from 'react-router-dom'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../store/slices/userSlice.js";

const Users = () => {
    const {users, loading} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [])

    if(loading){
        return <h2>Loading...</h2>;
    }

    return (
    <>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id} component={Link} to={`/users/${user.id}`}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </>
    )
}

export { Users }
