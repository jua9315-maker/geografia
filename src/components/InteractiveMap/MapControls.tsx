import React from 'react';
import { MapLayer, AmericaRegion, BaseMapType } from '../../types';
import { Mountain, CloudSun, Waves, Compass, Target, Info, Globe, Eye, Flame } from 'lucide-react';

interface MapControlsProps {
  activeLayers: Record<MapLayer, boolean>;
  toggleLayer: (layer: MapLayer) => void;
  selectedRegion: AmericaRegion;
  setSelectedRegion: (region: AmericaRegion) => void;
  interactiveMode: 'explore' | 'challenge';
  setInteractiveMode: (mode: 'explore' | 'challenge') => void;
  selectedFeatureCount: number;
  baseMap: BaseMapType;
  setBaseMap: (base: BaseMapType) => void;
}

export const MapControls: React.FC<MapControlsProps> = ({
  activeLayers,
  toggleLayer,
  selectedRegion,
  setSelectedRegion,
  interactiveMode,
  setInteractiveMode,
  baseMap,
  setBaseMap
}) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 space-y-4">
      {/* Mode switcher: Explore vs Challenge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <h2 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-600" />
            <span>Navegador Cartográfico Real de América</span>
          </h2>
          <p className="text-xs text-slate-500">
            Explora la geografía real del continente con satélite de alta definición y relieve topográfico
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setInteractiveMode('explore')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              interactiveMode === 'explore'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>Modo Exploración</span>
          </button>
          <button
            onClick={() => setInteractiveMode('challenge')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              interactiveMode === 'challenge'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Reto &ldquo;Ubica en el Mapa&rdquo;</span>
          </button>
        </div>
      </div>

      {/* Real Base Map Provider Switcher */}
      <div className="p-3 bg-slate-50/80 rounded-2xl border border-slate-200/80">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tipo de Mapa Real:</span>
          </span>
          <span className="text-[11px] text-emerald-700 font-medium">
            💡 Cambia entre fotografía satelital, relieve físico y curvas de nivel
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            onClick={() => setBaseMap('physical')}
            className={`flex items-center justify-center gap-2 p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
              baseMap === 'physical'
                ? 'bg-amber-600 text-white border-amber-600 shadow-sm ring-2 ring-amber-400/30'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>🗺️ Relieve Físico</span>
          </button>
          <button
            onClick={() => setBaseMap('satellite')}
            className={`flex items-center justify-center gap-2 p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
              baseMap === 'satellite'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm ring-2 ring-emerald-400/30'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>🛰️ Satélite Real</span>
          </button>
          <button
            onClick={() => setBaseMap('topographic')}
            className={`flex items-center justify-center gap-2 p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
              baseMap === 'topographic'
                ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm ring-2 ring-cyan-400/30'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>⛰️ Topográfico</span>
          </button>
          <button
            onClick={() => setBaseMap('streets')}
            className={`flex items-center justify-center gap-2 p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
              baseMap === 'streets'
                ? 'bg-slate-800 text-white border-slate-800 shadow-sm ring-2 ring-slate-400/30'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>🌍 Cartográfico</span>
          </button>
        </div>
      </div>

      {/* Layer Toggles */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Capas Temáticas Superpuestas (Activar / Desactivar)
          </span>
          <span className="text-[11px] text-amber-600 font-semibold hidden sm:inline">
            🌋 Incluye la Cadena Volcánica del Cinturón de Fuego
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {/* Relief Layer */}
          <button
            onClick={() => toggleLayer('relief')}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              activeLayers.relief
                ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-xs ring-1 ring-amber-400/40'
                : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
            }`}
          >
            <Mountain className={`w-4 h-4 ${activeLayers.relief ? 'text-amber-600' : 'text-slate-400'}`} />
            <span>1. Relieve & Formas</span>
          </button>

          {/* Climate Layer */}
          <button
            onClick={() => toggleLayer('climate')}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              activeLayers.climate
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900 shadow-xs ring-1 ring-emerald-400/40'
                : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
            }`}
          >
            <CloudSun className={`w-4 h-4 ${activeLayers.climate ? 'text-emerald-600' : 'text-slate-400'}`} />
            <span>2. Zonas Climáticas</span>
          </button>

          {/* Hydrography Layer */}
          <button
            onClick={() => toggleLayer('hydrography')}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              activeLayers.hydrography
                ? 'bg-cyan-50 border-cyan-300 text-cyan-900 shadow-xs ring-1 ring-cyan-400/40'
                : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
            }`}
          >
            <Waves className={`w-4 h-4 ${activeLayers.hydrography ? 'text-cyan-600' : 'text-slate-400'}`} />
            <span>3. Red Fluvial</span>
          </button>

          {/* Currents Layer */}
          <button
            onClick={() => toggleLayer('currents')}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              activeLayers.currents
                ? 'bg-blue-50 border-blue-300 text-blue-900 shadow-xs ring-1 ring-blue-400/40'
                : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
            }`}
          >
            <Compass className={`w-4 h-4 ${activeLayers.currents ? 'text-blue-600' : 'text-slate-400'}`} />
            <span>4. Corrientes Marinas</span>
          </button>

          {/* Volcanoes / Volcanic Chain Layer */}
          <button
            onClick={() => toggleLayer('volcanoes')}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer col-span-2 sm:col-span-1 ${
              activeLayers.volcanoes
                ? 'bg-red-50 border-red-300 text-red-950 shadow-xs ring-1 ring-red-400/50'
                : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
            }`}
          >
            <Flame className={`w-4 h-4 ${activeLayers.volcanoes ? 'text-red-600 animate-pulse' : 'text-slate-400'}`} />
            <span>5. Cadena Volcánica</span>
          </button>
        </div>
      </div>

      {/* Region zoom buttons */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-semibold text-slate-500 mr-1">Vistas directas:</span>
          {(['all', 'north', 'central', 'south'] as AmericaRegion[]).map((r) => {
            const labels: Record<AmericaRegion, string> = {
              all: 'Toda América',
              north: 'Norteamérica',
              central: 'Centroamérica & Caribe',
              south: 'Sudamérica'
            };
            return (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedRegion === r
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {labels[r]}
              </button>
            );
          })}
        </div>

        <div className="text-[11px] text-slate-400 italic">
          💡 Puedes arrastrar, hacer zoom con la rueda del ratón y pulsar en cualquier elemento para abrir su ficha
        </div>
      </div>
    </div>
  );
};
