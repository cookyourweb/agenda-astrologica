import React from 'react';
import { Moon, Sun, Star, Sparkles } from 'lucide-react';

const PortadaMistica = () => {
  return (
    <div className="w-[148mm] h-[210mm] p-6 bg-white flex flex-col items-center justify-center text-center">
      {/* Elemento decorativo superior */}
      <div className="mb-8">
        <Star className="w-12 h-12 text-purple-500" />
      </div>

      {/* Título principal */}
      <div className="space-y-4 mb-12">
        <h1 className="text-3xl font-serif text-purple-900">Tu Vuelta al Sol</h1>
        <p className="text-xl text-purple-700">Agenda Astrológica Personal</p>
        <p className="text-lg text-purple-600">2025-2026</p>
      </div>

      {/* Símbolos astrológicos */}
      <div className="flex justify-center space-x-8 mb-12">
        <Moon className="w-8 h-8 text-blue-500" />
        <Sun className="w-8 h-8 text-orange-500" />
        <Star className="w-8 h-8 text-purple-500" />
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
          "Guiando almas a través de la transformación con sabiduría y amor"
        </p>
      </div>

      {/* Elemento decorativo inferior */}
      <div className="mt-8">
        <Sparkles className="w-8 h-8 text-purple-400" />
      </div>
    </div>
  );
};

export default PortadaMistica;
