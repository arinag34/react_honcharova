import JsonPlaceholderAPI from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI.js'

export const postsLoader = async ({ request: { signal } }) => {
    return await JsonPlaceholderAPI.getPosts({ signal })
}
