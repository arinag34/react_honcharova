import { Link } from 'react-router-dom'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../../store/slices/postSlice.js";

const Posts = () => {
    const {posts, loading} = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [])

    if(loading){
        return <h2>Loading...</h2>;
    }

    return (
      <>
        <Typography variant="h4" gutterBottom>
          Posts
        </Typography>
        <List>
          {posts.map((post) => (
              <ListItem key={post.id} component={Link} to={`/posts/${post.id}`}>
                <ListItemText primary={post.title} secondary={post.body} />
              </ListItem>
          ))}
        </List>
      </>
    )
}

export { Posts }
