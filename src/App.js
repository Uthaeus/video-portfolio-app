import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Projects';
import LoginPage from './pages/Login';
import NewProject from './pages/NewProject';
import ErrorPage from './pages/Error';
import ProjectsRootLayout from './pages/ProjectsRoot';
import ProjectDetailPage from './pages/ProjectDetail';
import ProjectEditPage from './pages/ProjectEdit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact-me',
        element: <ContactPage />
      },
      {
        path: 'projects',
        element: <ProjectsRootLayout />,
        children: [
          {
            index: true,
            element: <ProjectsPage />
          }, 
          {
            path: 'new',
            element: <NewProject />
          },
          {
            path: ':projectId',
            id: 'project-detail',
            children: [
              {
                index: true,
                element: <ProjectDetailPage />
              },
              {
                path: 'edit',
                element: <ProjectEditPage />
              }
            ]
          }
        ]
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  }
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
