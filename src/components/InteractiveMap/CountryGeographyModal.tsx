import React, { useState } from 'react';
import { CountryGeography } from '../../types';
import { COUNTRIES_GEOGRAPHY } from '../../data/countriesAndVolcanoesData';
import {
  X,
  Mountain,
  CloudSun,
  Flame,
  Waves,
  Sparkles,
  Navigation,
  ChevronLeft,
  ChevronRight,
  School,
  Maximize2
} from 'lucide-react';

interface CountryGeographyModalProps {
  country: CountryGeography | null;
  onClose: () => void;
  onFlyToCountry?: (country: CountryGeography) => void;
  onSelectCountry?: (country: CountryGeography) => void;
}

export const CountryGeographyModal: React.FC<CountryGeographyModalProps> = ({
  country,
  onClose,
  onFlyToCountry,
  onSelectCountry
}) => {
  if (!country) return null;

  const currentIndex = COUNTRIES_GEOGRAPHY.findIndex((c) => c.id === country.id);

  const handlePrev = () => {
    if (currentIndex > 0 && onSelectCountry) {
      onSelectCountry(COUNTRIES_GEOGRAPHY[currentIndex - 1]);
    } else if (onSelectCountry) {
      onSelectCountry(COUNTRIES_GEOGRAPHY[COUNTRIES_GEOGRAPHY.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < COUNTRIES_GEOGRAPHY.length - 1 && onSelectCountry) {
      onSelectCountry(COUNTRIES_GEOGRAPHY[currentIndex + 1]);
    } else if (onSelectCountry) {
      onSelectCountry(COUNTRIES_GEOGRAPHY[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-hidden flex flex-col border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white p-5 sm:p-6 relative shrink-0">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-3xl">{country.flag}</span>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                {country.region === 'Centro' ? 'América Central' :
                 country.region === 'Norte' ? 'América del Norte' :
                 country.region === 'Sur' ? 'América del Sur' : 'Caribe Insular'}
              </span>
              <span className="text-slate-400 text-xs font-mono">
                Código: {country.code} • Capital: {country.capital}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {onFlyToCountry && (
                <button
                  onClick={() => {
                    onFlyToCountry(country);
                    onClose();
                  }}
                  title="Enfocar este país en el mapa"
                  className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-xl transition cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Ver en Mapa</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white flex items-center gap-2">
            <span>{country.name}</span>
            <span className="text-sm font-normal text-emerald-300">
              — Relieve, Climas & Geografía Física
            </span>
          </h2>

          <div className="flex items-center gap-4 mt-2 text-xs text-slate-300">
            <span className="flex items-center gap-1 text-amber-300 font-semibold">
              <Mountain className="w-3.5 h-3.5" />
              <span>Cota Máxima: {country.highestPeak}</span>
            </span>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-700 divide-y divide-slate-100">
          {/* Section 1: Relieve */}
          <div className="space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-amber-900 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Mountain className="w-3.5 h-3.5" />
              </div>
              <span>1. Relieve y Formas Geomorfológicas</span>
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed bg-amber-50/50 p-4 rounded-2xl border border-amber-200/60 font-medium">
              {country.reliefDescription}
            </p>

            <div>
              <span className="text-xs font-bold text-slate-500 block mb-2 uppercase tracking-wide">
                Principales unidades de relieve:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {country.mainReliefForms.map((relief, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl text-xs text-slate-800 font-medium"
                  >
                    <span className="text-amber-600 font-bold shrink-0">⛰️</span>
                    <span>{relief}</span>
                  </div>
                ))}
              </div>
            </div>

            {country.mainVolcanoesOrRanges && country.mainVolcanoesOrRanges.length > 0 && (
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                <span className="font-bold text-slate-600 mr-1">Cordilleras, Sierras y Volcanes Destacados:</span>
                <span className="text-slate-800 font-medium">
                  {country.mainVolcanoesOrRanges.join(' • ')}
                </span>
              </div>
            )}
          </div>

          {/* Section 2: Clima */}
          <div className="space-y-3 pt-5">
            <h3 className="text-sm font-black uppercase tracking-wider text-emerald-900 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <CloudSun className="w-3.5 h-3.5" />
              </div>
              <span>2. Climas y Régimen Meteorológico</span>
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed bg-emerald-50/50 p-4 rounded-2xl border border-emerald-200/60 font-medium">
              {country.climateDescription}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 block uppercase tracking-wide">
                Variedades climáticas del país:
              </span>
              <div className="flex flex-wrap gap-2">
                {country.climateTypes.map((type, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-300/80 px-3 py-1.5 rounded-xl text-xs font-semibold text-emerald-900 shadow-2xs"
                  >
                    <span>🌤️</span>
                    <span>{type}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px] block">
                  Pluviometría y Temperaturas:
                </span>
                <span className="font-medium text-slate-200">{country.rainfallAndTemp}</span>
              </div>
            </div>
          </div>

          {/* Section 3: Hidrografía */}
          {country.mainRiversAndLakes && country.mainRiversAndLakes.length > 0 && (
            <div className="space-y-2.5 pt-5">
              <h3 className="text-sm font-black uppercase tracking-wider text-cyan-900 flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center">
                  <Waves className="w-3.5 h-3.5" />
                </div>
                <span>3. Red Fluvial y Cuencas Hidrográficas</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {country.mainRiversAndLakes.map((hydro, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-xl text-xs font-medium text-cyan-950"
                  >
                    <span>💧</span>
                    <span>{hydro}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Section 4: Pedagogical Context for Instituto Rosa Cerda Amador */}
          <div className="pt-5">
            <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 border border-indigo-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
              <div className="flex items-center gap-2">
                <School className="w-4 h-4 text-indigo-700" />
                <h4 className="text-xs font-black uppercase tracking-wider text-indigo-900">
                  Enfoque Pedagógico para 8.º Grado «A» (Instituto Rosa Cerda Amador)
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed font-medium">
                {country.pedagogicalHighlight}
              </p>
            </div>
          </div>
        </div>

        {/* Footer with Carousel Navigation */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </button>
            <span className="text-xs text-slate-500 font-mono">
              País {currentIndex + 1} de {COUNTRIES_GEOGRAPHY.length}
            </span>
            <button
              onClick={handleNext}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition cursor-pointer"
            >
              <span className="hidden sm:inline">Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
          >
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  );
};
