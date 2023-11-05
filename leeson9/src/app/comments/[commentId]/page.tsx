import DeleteCommentForm from "@/app/comments/[commentId]/DeleteCommentForm";
import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'
import JsonPlaceholderAPI, {Comment} from '@/api/JsonPlaceholderAPI/JsonPlaceholderAPI';
import Link from 'next/link';

const FIELDS = [
    { name: 'Name', key: 'name' },
    { name: 'Email', key: 'email' },
    { name: 'Body', key: 'body' },
] satisfies { name: string; key: keyof Pick<Comment, 'Name' | 'Email' | 'Body'> }[]

interface CommentDetailsProps {
    params: {
        commentId: string;
    }
}

const CommentDetails = async({ params: { commentId } }: CommentDetailsProps) => {
    const comment = await JsonPlaceholderAPI.getComment({
        commentId: Number(commentId),
    })
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
                    <Button component={Link} variant="contained" color="primary" href={`${comment.id}/edit`}>
                        Edit Comment
                    </Button>
                </Box>
                <DeleteCommentForm postId={commentId} />
            </Box>
        </>
    )
}

export default CommentDetails;