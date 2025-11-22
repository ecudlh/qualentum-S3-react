import './Header.css';
import UserIcon from '../../assets/icons/user.svg';
import CartIcon from '../../assets/icons/shopping-cart.svg';
import HeartIcon from '../../assets/icons/heart.svg';
import ThemeIcon from '../../assets/icons/theme.svg';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ThemeContext } from '../../context/ThemeContext';
import { useNavigate } from "react-router-dom";

function Header({searchBar, setsearchBar}) {
    const {countProducts} = useContext(CartContext);
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <header className={darkMode ? 'header--dark' : 'header--light'}>
            <nav className="header__nav">
                <div className="header__logo" onClick={() => navigate("/")}>MiTienda</div>
                <ul className="header__menu">
                    <li className="header__menu--item"><a href="#">INICIO</a></li>
                    <li className="header__menu--item"><a href="#">CATEGORÍAS</a></li>
                    <li className="header__menu--item"><a href="#">OFERTAS</a></li>
                    <li className="header__menu--item"><a href="#">CONTACTO</a></li>
                </ul>
                
                <div className="header__searchbar">
                    <input 
                        type="text" 
                        className="header__searchbar-input" 
                        placeholder="Buscar productos" 
                        id="search-input"
                        value={searchBar}
                        onChange={(e) => setsearchBar(e.target.value)}/>
                </div>

                <div className="header__icons">
                    <div className="header__icon" onClick={toggleTheme}>
                        <img className="theme-icon" src={ThemeIcon} alt="" />
                    </div>
                    <div className="header__icon">
                        <img src={UserIcon} alt="" />
                    </div>
                    <div className="header__icon">
                        <img src={HeartIcon} alt="" />
                    </div>
                    <div className="header__icon header__icon-cart" onClick={() => navigate("/cart")}>
                        <img src={CartIcon} alt="" />
                        {countProducts > 0 && (
                            <div className="header__icon-number">{countProducts}</div>
                        )}
                    </div>
                </div>
            </nav>
       </header> 
    );
}

export default Header