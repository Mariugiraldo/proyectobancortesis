// src/components/PurposeTerms.jsx
import React from 'react';

const PurposeTerms = () => {
  return (
    <div className="purpose-terms-container">
      <h2>Propósito de la Página</h2>
      <p>
        El propósito de esta página es crear una red solidaria para facilitar el acceso a equipamiento ortopédico y fomentar la colaboración comunitaria.
      </p>
      <h3>Términos y Condiciones</h3>
      <p>
        Al utilizar esta página, usted acepta los siguientes términos y condiciones:
        <ul>
          <li>No se permite la venta de artículos robados o de procedencia dudosa.</li>
          <li>Todos los artículos deben estar en buen estado y ser funcionales.</li>
          <li>El uso de esta plataforma es para fines solidarios y no comerciales.</li>
          <li>La plataforma no se hace responsable por transacciones entre usuarios.</li>
        </ul>
      </p>
    </div>
  );
};

export default PurposeTerms;
