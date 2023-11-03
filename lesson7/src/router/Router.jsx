import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { RootLayout } from '../layouts/RootLayout/RootLayout.jsx'
import { EditUser } from '../pages/EditUser/EditUser.jsx'
import { editUserAction } from '../pages/EditUser/editUserAction.js'
import { PageNotFound } from '../pages/PageNotFound/PageNotFound.jsx'
import { Photos } from '../pages/Photos/Photos.jsx'
import { photosLoader } from '../pages/Photos/photosLoader.js'
import { UserDetails } from '../pages/UserDetails/UserDetails.jsx'
import { destroyUserAction } from '../pages/UserDetails/destroyUserAction.js'
import { userDetailsLoader } from '../pages/UserDetails/userDetailsLoader.js'
import { Users } from '../pages/Users/Users.jsx'
import { usersLoader } from '../pages/Users/usersLoader.js'

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
        lazy: () => import('../pages/Posts/Posts.jsx'),
      },
      {
        path: 'comments',
        lazy: () => import('../pages/Comments/Comments.jsx'),
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
        path: 'users/:userId/edit',
        element: <EditUser />,
        loader: userDetailsLoader,
        action: editUserAction,
      },
    ],
  },
])

const Router = () => <RouterProvider router={router} />

export { Router }
