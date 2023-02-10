import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Home from '../pages/Home'
function Header(){
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="localhost:3000/">
                    <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/128/3081/3081559.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Fake Shop
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Header