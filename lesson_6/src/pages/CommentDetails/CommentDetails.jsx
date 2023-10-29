import { Form, Link, useLoaderData } from 'react-router-dom'

import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'

const FIELDS = [
    { name: 'Name', key: 'name' },
    { name: 'Email', key: 'email' },
    { name: 'Body', key: 'body' },
]

const CommentDetails = () => {
    const comment = useLoaderData()
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Comment Details
            </Typography>
            {comment && (
                <Card>
                    <CardContent>
                        <List>
                            {FIELDS.map((field) => (
                                <ListItem key={field.key}>
                                    <ListItemText primary={field.name} secondary={comment[field.key]} />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            )}
            <Box mt={2} display="flex" flexDirection="row">
                <Box mr={2}>
                    <Button component={Link} variant="contained" color="primary" to="edit">
                        Edit Comment
                    </Button>
                </Box>
                <Form
                    method="delete"
                    action="destroy"
                    onSubmit={(event) => {
                        if (!confirm('Please confirm that you want to delete this comment.')) {
                            event.preventDefault()
                        }
                    }}>
                    <Button variant="contained" color="error" type="submit">
                        Delete Comment
                    </Button>
                </Form>
            </Box>
        </>
    )
}

export { CommentDetails }
