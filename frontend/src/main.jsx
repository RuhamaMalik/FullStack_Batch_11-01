import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'flowbite';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.jsx';
import { AuthProvider } from './context/AuthContext.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* // provide Auth context */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

