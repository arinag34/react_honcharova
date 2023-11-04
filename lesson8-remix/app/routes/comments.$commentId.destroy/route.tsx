import {LoaderFunction, redirect} from "@remix-run/node";
import JsonPlaceholderAPI from "~/api/JsonPlaceholderAPI/JsonPlaceholderAPI";

export const action = async ({
                                 params: { commentId },
                                 request: { signal },
                             }: Parameters<LoaderFunction>[number]) => {
    if (!commentId) throw new Error('No comment ID provided')

    await JsonPlaceholderAPI.deleteComment({ signal, commentId: Number(commentId) })

    return redirect('/comments')}