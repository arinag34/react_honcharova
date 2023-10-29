import JsonPlaceholderAPI from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI.js'

export const commentsLoader = async ({ request: { signal } }) => {
    return await JsonPlaceholderAPI.getComments({ signal })
}
