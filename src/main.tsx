import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes ,Route} from 'react-router'
import './index.css';
import App from './pages/index.tsx';
import About from "./pages/about.tsx";
import SignIn from './pages/sign-in/index.tsx';
import SignUp from './pages/sign-up/index.tsx';
import { Root } from '@radix-ui/react-slot';
import RootLayout from './layout.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';
createRoot(document.getElementById('root')!).render(
 <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <BrowserRouter>
  <Routes>
    <Route element={<RootLayout/>}>
      <Route path="/" element={<App/>}/>
      <Route path="about" element={<About/>}/ >
      <Route path="sign-up" element={<SignUp/>}/>
      <Route path="sign-in" element={<SignIn/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </ThemeProvider>
 </StrictMode>
)
