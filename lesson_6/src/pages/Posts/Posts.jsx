import { Link, useLoaderData } from 'react-router-dom'

import { List, ListItem, ListItemText, Typography } from '@mui/material'

const Posts = () => {
  const posts = useLoaderData()

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
