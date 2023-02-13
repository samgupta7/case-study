import React from 'react'
import Logo from '../../images/logo.png'
import Cart from '../Cart';

const Header = props => {
    return(
        <div style={
            {
                display:'flex',
                justifyContent: 'space-between'
            }
            }>
            <div className='logo'>
                <img src={Logo} />
            </div>
            <div className='links'>
                <nav>Home</nav>
                <nav>Products</nav>
            </div>
            <div>
                <div>

                </div>
                <div>
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default Header;