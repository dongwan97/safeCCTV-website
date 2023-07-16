import { Landing } from 'pages/Landing';
import { Main } from 'pages/Main';
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
    ],
  },
]);
