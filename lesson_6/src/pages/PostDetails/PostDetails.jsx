import { useEffect, useState } from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom'
import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'

const FIELDS = [
    { name: 'User Name', key: 'userName' },
    { name: 'Title', key: 'title' },
    { name: 'Body', key: 'body' },
]

const PostDetails = () => {
    const post = useLoaderData()
    const [userName, setUserName] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (post) {
            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then((response) => response.json())
                .then((userData) => setUserName(userData.name))
                .catch((error) => console.error('Error with username', error));

            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then((response) => response.json())
                .then((commentsData) => setComments(commentsData))
                .catch((error) => console.error('Error with comments', error));
        }
    }, [post]);

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Post Details
            </Typography>
            {post && (
                <Card>
                    <CardContent>
                        <List>
                            {FIELDS.map((field) => (
                                <ListItem key={field.key}>
                                    <ListItemText
                                        primary={field.name}
                                        secondary={field.key === 'userName' ? userName : post[field.key]}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            )}

            {comments.length > 0 && (
                <Typography variant="h5" gutterBottom>
                    Comments
                </Typography>
            )}

            <List>
                {comments.map((comment) => (
                    <ListItem key={comment.id}>
                        <ListItemText primary={comment.name} secondary={comment.body} />
                    </ListItem>
                ))}
            </List>

            <Box mt={2} display="flex" flexDirection="row">
                <Box mr={2}>
                    <Button component={Link} variant="contained" color="primary" to="edit">
                        Edit Post
                    </Button>
                </Box>
                <Form
                    method="delete"
                    action="destroy"
                    onSubmit={(event) => {
                        if (!confirm('Please confirm that you want to delete this post.')) {
                            event.preventDefault()
                        }
                    }}>
                    <Button variant="contained" color="error" type="submit">
                        Delete Post
                    </Button>
                </Form>
            </Box>
        </>
    )
}

export { PostDetails }
