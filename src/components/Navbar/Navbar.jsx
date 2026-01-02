import { Link } from 'react-router'
import './Navbar.css'
function Navbar() {
  return (
    <nav className='nav-bar'>
        <button><Link to='/' >Pet List</Link></button>
        <button><Link to='/pets/new' >Create Pet</Link></button>
    </nav>
  )
}

export default Navbar