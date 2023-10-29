import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { RootLayout } from '../layouts/RootLayout/RootLayout.jsx'
import { Comments } from '../pages/Comments/Comments.jsx'
import { PageNotFound } from '../pages/PageNotFound/PageNotFound.jsx'
import { Photos } from '../pages/Photos/Photos.jsx'
import { photosLoader } from '../pages/Photos/photosLoader.js'
import { Posts } from '../pages/Posts/Posts.jsx'
import { UserDetails } from '../pages/UserDetails/UserDetails.jsx'
import { destroyUserAction } from '../pages/UserDetails/destroyUserAction.js'
import { userDetailsLoader } from '../pages/UserDetails/userDetailsLoader.js'
import { Users } from '../pages/Users/Users.jsx'
import { usersLoader } from '../pages/Users/usersLoader.js'
import {postsLoader} from "../pages/Posts/postsLoader.js";
import {commentsLoader} from "../pages/Comments/commentsLoader.js";
import {commentDetailsLoader} from "../pages/CommentDetails/commentDetailsLoader";
import {CommentDetails} from "../pages/CommentDetails/CommentDetails.jsx";
import {destroyCommentAction} from "../pages/CommentDetails/destroyCommentAction.js";
import {PostDetails} from "../pages/PostDetails/PostDetails.jsx";
import {postDetailsLoader} from "../pages/PostDetails/postDetailsLoader.js";
import {destroyPostAction} from "../pages/PostDetails/destroyPostAction.js";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Photos />,
        loader: photosLoader,
      },
      {
        path: 'posts',
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: 'comments',
        element: <Comments />,
        loader: commentsLoader,
      },
      {
        path: 'users',
        element: <Users />,
        loader: usersLoader,
      },
      {
        path: 'users/:userId',
        element: <UserDetails />,
        loader: userDetailsLoader,
      },
      {
        path: 'users/:userId/destroy',
        action: destroyUserAction,
      },
      {
        path: 'comments/:commentId',
        element: <CommentDetails />,
        loader: commentDetailsLoader,
      },
      {
        path: 'comments/:commentId/destroy',
        action: destroyCommentAction,
      },
      {
        path: 'posts/:postId',
        element: <PostDetails />,
        loader: postDetailsLoader,
      },
      {
        path: 'posts/:postId/destroy',
        action: destroyPostAction,
      },
    ],
  },
])

const Router = () => <RouterProvider router={router} />

export { Router }
