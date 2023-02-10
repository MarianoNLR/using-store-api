import ProductList from "../collections/ProductList"
import Container from "react-bootstrap/esm/Container"
import { Component } from "react"

class Home extends Component {

    constructor(props){
      super(props)
    }
  
    render() {
      return (
        <>
          <Container className='container-results'>
            <ProductList></ProductList>
          </Container>
        </>
      )
    }
  }
  
  export default Home