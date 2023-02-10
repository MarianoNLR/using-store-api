import { Children } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Layout(props) {
  return (
    <>
      <Header changeValue={props.onSearch}></Header>
      {props.children}
    </>
  )
}

export default Layout