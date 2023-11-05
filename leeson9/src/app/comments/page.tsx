import Link from 'next/link';
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import JsonPlaceholderAPI from '@/api/JsonPlaceholderAPI/JsonPlaceholderAPI';

const Comments = async () => {
    const comments = await JsonPlaceholderAPI.getComments({
        signal: new AbortController().signal,
        cache: 'no-cache'
    });

    console.log({ comments })

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Comments
            </Typography>
            <List>
                {comments.map((comment) => (
                    <ListItem key={comment.id} component={Link} href={`/comments/${comment.id}`}>
                        <ListItemText primary={comment.name} secondary={comment.body} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default Comments;
