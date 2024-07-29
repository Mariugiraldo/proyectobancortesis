// src/pages/Onboarding.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = ({ onFinish }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onFinish();
    }
  };

  const getButtonText = () => {
    if (step < 3) {
      return 'Siguiente';
    }
    return 'Finalizar';
  };

  return (
    <div className="onboarding-container mb-20">
      {step === 1 && (<>
        <div className="profile-header mb-4">
          <div className=""><img src="/img/onboard_1.webp" alt="onboard1" /></div>
        </div>
        <div className="onboarding-step">
          <h2 className="text-2xl font-bold">Propósito de la plataforma</h2>
          <p>
            El propósito de esta página es crear una red solidaria para facilitar el acceso a equipamiento ortopédico y fomentar la colaboración comunitaria.
          </p>
        </div>
        </>
      )}
      {step === 2 && (<>
        <div className="profile-header mb-4">
          <div className=""><img src="/img/onboard_2.webp" alt="onboard2" /></div>
        </div>
        <div className="onboarding-step">
          <h2 className="text-2xl font-bold">Condiciones de la plataforma</h2>
          <p>Al utilizar esta página, usted acepta los siguientes términos y condiciones:</p>
          <ul>
            <li>No se permite la venta de artículos robados o de procedencia dudosa.</li>
            <li>Todos los artículos deben estar en buen estado y ser funcionales.</li>
            <li>El uso de esta plataforma es para fines solidarios y no comerciales.</li>
            <li>La plataforma no se hace responsable por transacciones entre usuarios.</li>
          </ul>
        </div>
      </>
      )}
      {step === 3 && (<>
        <div className="profile-header mb-4">
          <div className=""><img src="/img/onboard_3.webp" alt="onboard3" /></div>
        </div>
        <div className="onboarding-step">
          <h2 className="text-2xl font-bold">Gracias por Unirse</h2>
          <p>
            Estamos encantados de que se una a nuestra comunidad. ¡Esperamos que disfrute de su experiencia!
          </p>
        </div>
      </>
      )}
      <div className="onboarding-navigation">
        <div className="progress-indicators flex justify-center mb-4">
          <div className={`circle ${step === 1 ? 'active' : ''} w-4 h-4 mx-1 rounded-full bg-blue-500`}></div>
          <div className={`circle ${step === 2 ? 'active' : ''} w-4 h-4 mx-1 rounded-full bg-blue-500`}></div>
          <div className={`circle ${step === 3 ? 'active' : ''} w-4 h-4 mx-1 rounded-full bg-blue-500`}></div>
        </div>
        <button
          className="progress-button bg-blue-600 text-white py-2 px-4 rounded"
          onClick={nextStep}
        >
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
