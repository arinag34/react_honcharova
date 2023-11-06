import { Link } from 'react-router-dom'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getComments} from "../../store/slices/commentSlice.js";

const Comments = () => {
    const {comments, loading} = useSelector((state) => state.comment);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getComments());
    }, [])

    if(loading){
        return <h2>Loading...</h2>;
    }
  return (
      <>
        <Typography variant="h4" gutterBottom>
          Comments
        </Typography>
        <List>
          {comments.map((comment) => (
              <ListItem key={comment.id} component={Link} to={`/comments/${comment.id}`}>
                <ListItemText primary={comment.name} secondary={comment.body} />
              </ListItem>
          ))}
        </List>
      </>
  )
}

export { Comments }
