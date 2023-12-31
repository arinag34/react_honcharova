import { JSON_PLACEHOLDER_BASE_URL } from '../../constants/index.js'
import { API } from '../API/API'

class JsonPlaceholderAPI extends API {
  constructor(url) {
    super(url)
  }

  async getPhotos({ signal }) {
    const response = await this.fetch({ path: 'photos', signal })

    return response.slice(0, 20)
  }

  async getUsers({ signal }) {
    return await this.fetch({ path: 'users', signal })
  }

  async getUser({ signal, userId }) {
    return await this.fetch({ path: `users/${userId}`, signal })
  }

  async deleteUser({ signal, userId }) {
    return await this.fetch({ path: `users/${userId}`, signal, method: 'DELETE' })
  }

  async getPosts({ signal }) {
    return await this.fetch({ path: 'posts', signal })
  }

  async getComments({ signal}) {
    return await this.fetch({ path: `comments`, signal })
  }

  async getComment({ signal, commentId }) {
    return await this.fetch({ path: `comments/${commentId}`, signal })
  }

  async deleteComment({ signal, commentId }) {
    return await this.fetch({ path: `comments/${commentId}`, signal, method: 'DELETE' })
  }

  async getPost({ signal, postId }) {
    return await this.fetch({ path: `posts/${postId}`, signal })
  }

  async deletePost({ signal, commentId }) {
    return await this.fetch({ path: `posts/${postId}`, signal, method: 'DELETE' })
  }
}

export default new JsonPlaceholderAPI(JSON_PLACEHOLDER_BASE_URL)
