import './Banner.css'

import { useContext} from 'react';
import { LoginContext } from '../../context/LoginContext';

function Banner() {
    const { login, user} = useContext(LoginContext);
    return (
        <>
            {login ? (
                <div className="banner">
                    <h3 className="banner__title">¡{user.name} aprovéchate de tu 20% de descuento!</h3>
                </div>
            ) : (
                <div className="banner">
                    <h3 className="banner__title">¡20% de descuento para nuevos clientes!</h3>
                </div>
            )}
        </>
    );
}

export default Banner;