import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Projects';
import LoginPage from './pages/Login';
import NewProject from './pages/NewProject';
import ProjectsRootLayout from './pages/ProjectsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
