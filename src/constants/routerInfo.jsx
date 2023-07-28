import { Bulletin } from 'pages/Bulletin';
import { Landing } from 'pages/Landing';
import { Main } from 'pages/Main';
import { PostCreate } from 'pages/PostCreate';
import { PostDetail } from 'pages/PostDetail';
import { Header } from 'pages/commonSections/Header';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Root } from 'styled';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Root>
        <Header />
        <Outlet />
      </Root>
    ),
    children: [
      { path: '/', element: <Landing /> },
      { path: '/main', element: <Main /> },
      { path: '/post/:postId', element: <PostDetail /> },
      { path: '/post/create', element: <PostCreate /> },
      { path: '/post', element: <Bulletin /> },
    ],
  },
]);
