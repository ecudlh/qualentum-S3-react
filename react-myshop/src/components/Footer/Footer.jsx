import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer__data">
                <div className="footer__data-content footer__contact">
                    <h3>Contacto</h3>
                    <p>Email: info@mitienda.com</p>
                    <p>Teléfono: +34 123 456 789</p>
                </div>
                <div className="footer__data-content footer__rrss">
                    <h3>Redes Sociales</h3>
                    <ul className="footer__rrss-items">
                        <li className="footer__rrss-item"><a href="#">Facebook</a></li>
                        <li className="footer__rrss-item"><a href="#">Twitter</a></li>
                        <li className="footer__rrss-item"><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer__data-content footer__address">
                    <h3>Dirección</h3>
                    <p>Calle Principal, 123</p>
                    <p>Ciudad, País</p>
                </div>
            </div>
            <div className="footer__copyright">©2025 MiTienda. Todos los derechos reservados.</div>
        </footer>
    );
}

export default Footer;