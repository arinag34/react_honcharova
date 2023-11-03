import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { RootLayout } from '../layouts/RootLayout/RootLayout'
import { EditUser } from '../pages/EditUser/EditUser'
import { editUserAction } from '../pages/EditUser/editUserAction'
import { PageNotFound } from '../pages/PageNotFound/PageNotFound'
import { Photos } from '../pages/Photos/Photos'
import { photosLoader } from '../pages/Photos/photosLoader'
import { UserDetails } from '../pages/UserDetails/UserDetails'
import { destroyUserAction } from '../pages/UserDetails/destroyUserAction'
import { userDetailsLoader } from '../pages/UserDetails/userDetailsLoader'
import { Users } from '../pages/Users/Users'
import { usersLoader } from '../pages/Users/usersLoader'

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
        lazy: () => import('../pages/Posts/Posts'),
      },
      {
        path: 'comments',
        lazy: () => import('../pages/Comments/Comments'),
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
