import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import {Route, Routes, Link, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

function App() {
  return (
  <>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home></Home>}></Route>
      </Routes>
    </Layout>
  </>
  )
}

export default App;
