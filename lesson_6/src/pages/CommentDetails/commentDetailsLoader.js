import JsonPlaceholderAPI from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI.js'

export const commentDetailsLoader = async ({ params: { commentId }, request: { signal } }) => {
    return await JsonPlaceholderAPI.getComment({ signal, commentId })
}
