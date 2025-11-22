import { createContext, useState } from 'react';

export const LoginContext = createContext();

export function LoginProvider({ children }) {
    // Checking locaalstorage
    const [login, setLogin] = useState(() => {
        return localStorage.getItem('login') === 'true';
    });

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : { name: '', email: '' };
    });

    // Login
    const doLogin = (name, email) => {
        setUser({ name, email });
        setLogin(true);
        localStorage.setItem('login', 'true');
        localStorage.setItem('user', JSON.stringify({ name, email }));
    };

    //Log out
    const doLogout = () => {
        setUser({ name: '', email: '' });
        setLogin(false);
        localStorage.removeItem('login');
        localStorage.removeItem('user');
    };

    return (
        <LoginContext.Provider value={{ login, user, doLogin, doLogout }}>
            {children}
        </LoginContext.Provider>
    );
}