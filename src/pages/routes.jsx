import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './Contact';
import DetailPage from './Detail';
import HomePage from './Home';
import ListPage from './List/List';
import PostFormPage from './PostForm';

const pagesData = [
  {
    path: '',
    element: <HomePage />,
    title: 'home',
  },
  {
    path: '/list',
    element: <ListPage />,
    title: 'list',
  },
  {
    path: '/detail/:id',
    element: <DetailPage />,
    title: 'detail',
  },
  {
    path: '/contact',
    element: <ContactPage />,
    title: 'contact',
  },
  {
    path: '/post-form',
    element: <PostFormPage />,
    title: 'post form',
  },
];

function Router() {
  const pageRoutes = pagesData.map(({ path, title, element }) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
}

export default Router;
