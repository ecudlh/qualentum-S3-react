import './ErrorPage.css'
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error-page-container">
      <h1>404</h1>
      <h2>Oops! Página no encontrada</h2>
      <p>La ruta a la que intentas acceder no existe.</p>
      <Link to="/" className="link-back">Volver al inicio</Link>
    </div>
  );
}