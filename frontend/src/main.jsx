import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'flowbite';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { UserProvider } from './context/UserContext.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* // provide Auth context */}
    <AuthProvider>
      {/* <UserProvider> */}
      <RouterProvider router={router} />
      {/* </UserProvider> */}
    </AuthProvider>
  </StrictMode>,
)

