import JsonPlaceholderAPI from "~/api/JsonPlaceholderAPI/JsonPlaceholderAPI";
import {useLoaderData, Link} from "@remix-run/react";
import { List, ListItem, ListItemText, Typography } from '@mui/material'

export const loader = async ({ request: { signal } }) => {
    return await JsonPlaceholderAPI.getComments({ signal })
}

export default function Comments() {
    const comments = useLoaderData<typeof loader>();

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