import {LoaderFunction, redirect} from "@remix-run/node";
import JsonPlaceholderAPI from "~/api/JsonPlaceholderAPI/JsonPlaceholderAPI";

export const action = async ({
                                 params: { postId },
                                 request: { signal },
                             }: Parameters<LoaderFunction>[number]) => {
    if (!postId) throw new Error('No post ID provided')

    await JsonPlaceholderAPI.deletePost({ signal, postId: Number(postId) })

    return redirect('/posts')}