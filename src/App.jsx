// import './App.css';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { AlertProvider } from './context/alertContext';
import Construction from './components/Construction';
import NotFound from './components/NotFound';
import Alert from './components/Alert';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LandingSection /> },
      { path: 'projects', element: <ProjectsSection /> },
      { path: 'contact', element: <ContactMeSection /> },
      { path: 'construction', element: <Construction /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <AlertProvider>
      <RouterProvider router={router}>
        <Alert />
      </RouterProvider>
    </AlertProvider>
  );
}

export default App;
