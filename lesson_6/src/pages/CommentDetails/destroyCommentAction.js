import { redirect } from 'react-router-dom'

import JsonPlaceholderAPI from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI.js'

export const destroyCommentAction = async ({ params: { commentId }, request: { signal } }) => {
    await JsonPlaceholderAPI.deleteComment({ signal, commentId })

    return redirect('/comments')
}
