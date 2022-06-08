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
                  <a href="#">Option</a>
              </li>
              <li>
                  <a href="#">Option</a>
              </li>
              <li>
                  <a href="#">Option</a>
              </li>
              <li>
                  <a href="#">Option</a>
              </li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar
