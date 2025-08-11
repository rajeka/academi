// import './App.css';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Construction from './components/Construction';
import NotFound from './components/NotFound';
import { Toaster } from 'react-hot-toast';

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
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#333',
            padding: '12px 16px',
            borderRadius: '8px',
          },
        }}
      />
    </>
  );
}

export default App;
