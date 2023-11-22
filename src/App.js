import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Counter } from './features/counter/counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Update from './Update'

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Counter></Counter>}></Route>
    <Route path='/edit/:id' element={<Update></Update>}></Route>
   </Routes>
   </BrowserRouter>

    </>
  );
}

export default App;
