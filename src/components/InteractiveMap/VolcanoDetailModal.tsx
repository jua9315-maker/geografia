import React from 'react';
import { VolcanoItem } from '../../types';
import { X, Flame, Mountain, Sparkles, Navigation, Layers, Compass } from 'lucide-react';

interface VolcanoDetailModalProps {
  volcano: VolcanoItem | null;
  onClose: () => void;
  onFlyToVolcano?: (volcano: VolcanoItem) => void;
}

export const VolcanoDetailModal: React.FC<VolcanoDetailModalProps> = ({
  volcano,
  onClose,
  onFlyToVolcano
}) => {
  if (!volcano) return null;

  const isActive = volcano.status === 'Activo';
  const isLatent = volcano.status === 'Latente';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden flex flex-col border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with fiery volcano theme */}
        <div className="bg-gradient-to-r from-red-900 via-amber-900 to-orange-900 text-white p-5 sm:p-6 relative">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-2xl">🌋</span>
              <span className="bg-black/30 border border-amber-400/40 text-amber-200 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>{volcano.volcanicArc}</span>
              </span>
              <span
                className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-red-600 text-white animate-pulse'
                    : isLatent
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-700 text-slate-200'
                }`}
              >
                {volcano.status}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {onFlyToVolcano && (
                <button
                  onClick={() => {
                    onFlyToVolcano(volcano);
                    onClose();
                  }}
                  title="Centrar volcán en el mapa"
                  className="flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-xl transition cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Centrar</span>
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

          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
            {volcano.name}
          </h2>

          <div className="flex items-center gap-4 mt-2 text-xs text-amber-200 font-medium">
            <span>País: <strong className="text-white">{volcano.country}</strong></span>
            <span>•</span>
            <span>Altitud: <strong className="text-white">{volcano.elevation} ({volcano.elevationMeters} msnm)</strong></span>
            {volcano.lastEruption && (
              <>
                <span>•</span>
                <span className="text-orange-200">Última erupción: <strong>{volcano.lastEruption}</strong></span>
              </>
            )}
          </div>
        </div>

        {/* Body content */}
        <div className="p-5 sm:p-6 space-y-5 text-slate-700 overflow-y-auto max-h-[65vh]">
          {/* Geographic description */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1 flex items-center gap-1.5">
              <Mountain className="w-3.5 h-3.5 text-amber-600" />
              <span>Descripción Geomorfológica</span>
            </h4>
            <p className="text-sm leading-relaxed text-slate-800 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 font-medium">
              {volcano.description}
            </p>
          </div>

          {/* Causal Relation: Volcano and Climate / Environment */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 space-y-1.5">
            <h4 className="text-xs font-bold uppercase text-amber-900 tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Influencia en el Clima, Suelos y Entorno</span>
            </h4>
            <p className="text-sm text-amber-950 leading-relaxed font-medium">
              {volcano.climateInfluence}
            </p>
          </div>

          {/* Geological Framework */}
          <div className="bg-slate-900 text-slate-200 rounded-2xl p-4 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Compass className="w-4 h-4" />
              <span className="uppercase tracking-wider">Cinturón de Fuego del Pacífico (América)</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Este volcán forma parte de la zona de subducción tectónica más activa del planeta, donde las placas de Cocos, Nazca y del Pacífico se hunden bajo las placas Continental Norteamericana, Caribeña y Sudamericana, originando la cadena volcánica continua que bordea la costa pacífica de América.
            </p>
            <div className="pt-1 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
              <span>Coordenadas exactas: {volcano.lat}°N, {volcano.lng}°W</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500 font-medium">
            Cadena Volcánica de América • 8.º Grado «A»
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
          >
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  );
};
