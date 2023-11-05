'use client'
import React, { FormEventHandler, useCallback } from 'react';
import JsonPlaceholderAPI from '@/api/JsonPlaceholderAPI/JsonPlaceholderAPI';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

interface DeleteCommentFormProps {
    postId: string;
}

const DeleteCommentForm = ({ commentId }: DeleteCommentFormProps) => {
    const router = useRouter();

    const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
        async (event) => {
            event.preventDefault();
            if (!confirm('Please confirm that you want to delete this comment.')) {
                return;
            }
            await JsonPlaceholderAPI.deleteComment({ commentId: Number(commentId) });

            router.replace('/comments', { scroll: true })
        },
        [router, commentId],
    );

    return (
        <form
            onSubmit={handleSubmit}
        >
            <Button variant="contained" color="error" type="submit">
                Delete Comment
            </Button>
        </form>
    );
};

export default DeleteCommentForm;
