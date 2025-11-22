import './Login.css';

import { useContext, useState } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const { login, user, doLogin, doLogout } = useContext(LoginContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = () => {
        if (name && email) {
            doLogin(name, email);
            setName('');
            setEmail('');
            navigate(from, { replace: true });
        } else {
            alert('Rellena todos los campos');
        }
    };

    const handleLogout = () => {
        doLogout();
        navigate("/", { replace: true });
    };

    return (
        <div className="login-container">
            <div className="login-item">
                <p className="login-item-text">Nombre</p>
                <input 
                    type="text" 
                    className="login-item-input"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div className="login-item">
                <p className="login-item-text">Email</p>
                <input 
                    type="text" 
                    className="login-item-input" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            {login ? (
                <div className="login-success">
                    <p>¿Quieres cerrar sesión <span className="user-name">{user.name}</span>?</p>
                    <button className="logout-item" onClick={handleLogout}>Cerrar sesión</button>
                </div>
            ) : (
                <button className="login-item-btn" onClick={handleSubmit}>
                    Login
                </button>
            )}
        </div>
    );
}

export default Login;