import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import {Route, Routes, Link, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

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
