import { Link, useLoaderData } from 'react-router-dom'

import { List, ListItem, ListItemText, Typography } from '@mui/material'

const Comments = () => {
  const comments = useLoaderData()

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
