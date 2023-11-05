import { FetchArgs } from '@/api/API/types';
import { JSON_PLACEHOLDER_BASE_URL } from '@/constants'
import { API } from '../API/API'

export interface FetchArg<Updates = Record<string, unknown>> extends FetchArgs {
  signal?: AbortSignal
  userId?: number
  updates?: Updates
}

export interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

class JsonPlaceholderAPI extends API {
  async getPhotos({ signal, ...rest }: FetchArg) {
    const response = await this.fetch<Photo[]>({ path: 'photos', signal })

    return response.slice(0, 20)
  }

  async getUsers({ signal, ...rest }: FetchArg) {
    return await this.fetch<User[]>({ path: 'users', signal, ...rest })
  }

  async getUser({ signal, userId, ...rest }: FetchArg) {
    return await this.fetch<User>({ path: `users/${userId}`, signal, ...rest })
  }

  async deleteUser({ signal, userId, ...rest }: FetchArg) {
    return await this.fetch({ path: `users/${userId}`, signal, method: 'DELETE', ...rest })
  }

  async updateUser({ signal, userId, updates, ...rest }: FetchArg) {
    return await this.fetch({ path: `users/${userId}`, signal, method: 'PATCH', body: updates, ...rest })
  }

  async getPosts({ signal }: FetchArg) {
    return await this.fetch<Post[]>({ path: 'posts', signal })
  }

  async getPost({ signal, postId }: FetchArg) {
    return await this.fetch<Post>({ path: `posts/${postId}`, signal })
  }

  async deletePost({ signal, postId }: FetchArg) {
    return await this.fetch({ path: `posts/${postId}`, signal, method: 'DELETE' })
  }

  async getComments({ signal }: FetchArg) {
    return await this.fetch<Comment[]>({ path: 'comments', signal })
  }

  async getComment({ signal, commentId }: FetchArg) {
    return await this.fetch<Comment>({ path: `comments/${commentId}`, signal })
  }

  async deleteComment({ signal, commentId }: FetchArg) {
    return await this.fetch({ path: `comments/${commentId}`, signal, method: 'DELETE' })
  }
}

export default new JsonPlaceholderAPI(JSON_PLACEHOLDER_BASE_URL)
