import React from 'react'
import { Link } from 'react-router-dom'


const navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg  bg-dark '>
            <div className='container-fluid'>
                <div className='collapse navbar-collapse' id="navbarNavDropdown">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                        <Link className='nav-link active text-light' to="/">Home</Link>
                        </li>
                        <li className='nav-item'>
                        <Link className='nav-link active text-light' to="/Contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <Link to='/'>
                 <img className='rounded-circle' src='https://img2.freepng.es/20180415/jdw/kisspng-logo-silhouette-dog-bone-dog-5ad41d4b59e7d5.7560651515238505713683.jpg' width='50px'></img>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default navbar
