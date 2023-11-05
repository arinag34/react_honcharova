'use client'

import DeletePostForm from "@/app/posts/[postId]/DeletePostForm";
import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'
import JsonPlaceholderAPI, {Post} from '@/api/JsonPlaceholderAPI/JsonPlaceholderAPI';
import Link from 'next/link';
import {useEffect, useState} from "react";

const FIELDS = [
    { name: 'User Name', key: 'userName' },
    { name: 'Title', key: 'title' },
    { name: 'Body', key: 'body' },
] satisfies { name: string; key: keyof Pick<Post, 'User Name' | 'Title' | 'Body'> }[]

interface PostDetailsProps {
    params: {
        postId: string;
    }
}

const PostDetails = ({ params: { postId } }: PostDetailsProps) => {
    const [post, setPost] = useState('');
    const [userName, setUserName] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await JsonPlaceholderAPI.getPost({
                    postId: Number(postId),
                });
                setPost(response);

                if (response) {
                    const userDataResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${response.userId}`);
                    const userData = await userDataResponse.json();
                    setUserName(userData.name);

                    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${response.id}/comments`);
                    const commentsData = await commentsResponse.json();
                    setComments(commentsData);
                }
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, [postId]);

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
                    <Button component={Link} variant="contained" color="primary" href={`${post.id}/edit`}>
                        Edit Post
                    </Button>
                </Box>
                <DeletePostForm postId={postId} />
            </Box>
        </>
    )
}

export default PostDetails;