import JsonPlaceholderAPI from "~/api/JsonPlaceholderAPI/JsonPlaceholderAPI";
import {useLoaderData, Link} from "@remix-run/react";
import { List, ListItem, ListItemText, Typography } from '@mui/material'

export const loader = async ({ request: { signal } }) => {
    return await JsonPlaceholderAPI.getPosts({ signal })
}

export default function Posts() {
    const posts = useLoaderData<typeof loader>();

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