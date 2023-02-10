import ProductList from "../collections/ProductList"
import Container from "react-bootstrap/esm/Container"
import { Component } from "react"
import Menu from "../components/Menu"

class Home extends Component {

    constructor(props){
      super(props)
      this.onSearch = this.onSearch.bind(this)
    }

    state = {
      filter :'',
    }

    onSearch = (filterValue) =>{
      this.setState({filter : filterValue})
    }
  
    render() {
      return (
        <>
          <Menu changeValue={this.onSearch}></Menu>
          <Container className='container-results'>
            <ProductList filter={this.state.filter}></ProductList>
          </Container>
        </>
      )
    }
  }
  
  export default Home