import './Navbar.css';

const Navbar = ({children}) => {
  return (
    <header>
      <nav className='navBar'>
          <div className='logo'>
            {children}
          </div>
          <ul className='ul'>
              <li>
                  <a href="#">Productos</a>
              </li>
              <li>
                  <a href="#">Como llegar</a>
              </li>
              <li>
                  <a href="#">Nosotros</a>
              </li>
              <li>
                  <a href="#">Sponsors</a>
              </li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar
