import JsonPlaceholderAPI from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI.js'

export const postDetailsLoader = async ({ params: { postId }, request: { signal } }) => {
    return await JsonPlaceholderAPI.getPost({ signal, postId })
}
