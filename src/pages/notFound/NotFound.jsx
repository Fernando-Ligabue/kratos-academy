import React from 'react';
import { Link } from 'react-router-dom';

import './notFound.css';

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Página não encontrada</h2>
        <Link to="/" className="btn">Voltr para Página Inicial</Link>
      </div>
    </section>
  )
}

export default NotFound;