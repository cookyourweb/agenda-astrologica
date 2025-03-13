import React from 'react';

const PortadaMistica = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-[148mm] h-[210mm] p-6 bg-white flex flex-col items-center justify-center text-center">
      {/* Título principal */}
      <div className="space-y-4 mb-12">
        <h1 className="text-3xl font-serif text-purple-900">Tu Vuelta al Sol</h1>
        <p className="text-xl text-purple-700">Agenda Astrológica Personal</p>
        <p className="text-lg text-purple-600">2025-2026</p>
      </div>

      {/* Datos personales */}
      <div className="mb-12">
        <h2 className="text-2xl font-serif text-purple-800 mb-2">Bea</h2>
        <p className="text-sm text-purple-600">
          Sol en Piscis • Luna en Libra • Ascendente Leo
        </p>
      </div>

      {/* Frase inspiracional */}
      <div className="border-t border-purple-200 pt-6 max-w-sm">
        <p className="text-sm italic text-purple-700">
          &quot;Guiando almas a través de la transformación con sabiduría y amor&quot;
        </p>
      </div>

      {/* Agenda Content */}
      <div style={{ padding: "20px", width: "210mm", height: "297mm" }}>
        <h1>Agenda</h1>
        <p>This is your agenda content.</p>
        <button onClick={handlePrint}>Print Agenda</button>
      </div>
    </div>
  );
};

export default PortadaMistica;
