import JsonPlaceholderAPI from "~/api/JsonPlaceholderAPI/JsonPlaceholderAPI";
import {Form, Link, useLoaderData} from "@remix-run/react";
import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'
import {LoaderFunction} from "@remix-run/node";

export const loader = async ({
                                 params: { commentId },
                                 request: { signal },
                             }: Parameters<LoaderFunction>[number]) => {
    if (!commentId) throw new Error('No comment ID provided')

    return await JsonPlaceholderAPI.getComment({ signal, commentId: Number(commentId) })
}

const FIELDS = [
    { name: 'Name', key: 'name' },
    { name: 'Email', key: 'email' },
    { name: 'Body', key: 'body' },
] satisfies { name: string; key: keyof Pick<Comment, 'Name' | 'Email' | 'Body'> }[]

export default function CommentDetails() {
    const comment = useLoaderData<typeof loader>()
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