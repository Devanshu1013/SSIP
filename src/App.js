import logo from './logo.svg';
import './App.css';
import Form from './components/form.component';
import Publish from './components/publish.component';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>

      <Route index element={<Form/>}/>
      <Route path="/publish" element={ <Publish/>}/>
  
    </Routes>
    
      
   
 </> );
}

export default App;
