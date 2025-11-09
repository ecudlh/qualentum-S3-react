import './Header.css';
import UserIcon from '../../assets/icons/user.svg';
import CartIcon from '../../assets/icons/shopping-cart.svg';
import HeartIcon from '../../assets/icons/heart.svg';

function Header({searchBar, setsearchBar}) {

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__logo">MiTienda</div>
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
                    <div className="header__icon">
                        <img src={UserIcon} alt="" />
                    </div>
                    <div className="header__icon">
                        <img src={HeartIcon} alt="" />
                    </div>
                    <div className="header__icon">
                        <img src={CartIcon} alt="" />
                    </div>
                </div>
            </nav>
       </header> 
    );
}

export default Header