import {Routes,Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './models/myTheme';
import GlobalStyles from './styles/Global.styled';
import { Container } from '@mui/material';
import { Store } from './pages/Store';
import BookDetail from './pages/BookDetail';
import Favorite from './pages/Favorite';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
  <ThemeProvider theme={myTheme}>
    <GlobalStyles/>
    <Navbar/>
    <Container>
      <Routes>
        <Route path='/' element={<Store/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/book/:id' element={<BookDetail/>}/>
      </Routes>
    </Container>
  </ThemeProvider>
  );
}

export default App;
