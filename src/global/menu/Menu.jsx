import './Menu.css'

import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='cont-menu'>
        <ul>
            <Link to='/'>
                <li>Home</li>
            </Link >
            <Link to='/about'>
                <li>About</li>
            </Link>
        </ul>
    </div>
  )
}

export default Menu