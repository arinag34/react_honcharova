import { redirect } from 'react-router-dom'

import JsonPlaceholderAPI from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI.js'

export const destroyPostAction = async ({ params: { PostId }, request: { signal } }) => {
    await JsonPlaceholderAPI.deleteComment({ signal, PostId })

    return redirect('/posts')
}
