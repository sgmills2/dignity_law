import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { extendTheme } from '@mui/joy/styles';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Professional legal color palette
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#f0f6ff',
          100: '#d6e4ff',
          200: '#a6c1ff',
          300: '#7a9eff',
          400: '#467bff',
          500: '#1a56ff', // Primary brand color
          600: '#0039cc',
          700: '#002b99',
          800: '#001c66',
          900: '#000e33',
        },
        neutral: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1a1a1a',
        },
      },
    },
  },
  fontFamily: {
    display: "'Libre Baskerville', serif",
    body: "'Inter', sans-serif",
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;
