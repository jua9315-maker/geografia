import React from 'react';
import { ReliefFeature, ClimateZone, OceanCurrent, RiverSystem } from '../../types';
import { X, Mountain, CloudSun, Waves, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

interface MapFeatureModalProps {
  feature: ReliefFeature | ClimateZone | OceanCurrent | RiverSystem | null;
  type: 'relief' | 'climate' | 'current' | 'river' | null;
  onClose: () => void;
}

export const MapFeatureModal: React.FC<MapFeatureModalProps> = ({
  feature,
  type,
  onClose
}) => {
  if (!feature || !type) return null;

  const isRelief = type === 'relief';
  const isClimate = type === 'climate';
  const isCurrent = type === 'current';
  const isRiver = type === 'river';

  const relief = isRelief ? (feature as ReliefFeature) : null;
  const climate = isClimate ? (feature as ClimateZone) : null;
  const current = isCurrent ? (feature as OceanCurrent) : null;
  const river = isRiver ? (feature as RiverSystem) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with thematic background */}
        <div className={`p-6 text-white relative ${
          isRelief ? 'bg-gradient-to-r from-amber-700 to-amber-900' :
          isClimate ? 'bg-gradient-to-r from-emerald-700 to-teal-900' :
          isCurrent ? 'bg-gradient-to-r from-blue-800 to-indigo-950' :
          'bg-gradient-to-r from-cyan-700 to-blue-900'
        }`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              {isRelief && <Mountain className="w-3.5 h-3.5" />}
              {isClimate && <CloudSun className="w-3.5 h-3.5" />}
              {isCurrent && <Compass className="w-3.5 h-3.5" />}
              {isRiver && <Waves className="w-3.5 h-3.5" />}
              <span>
                {isRelief ? `Unidad Geomorfológica (${relief?.type.toUpperCase()})` :
                 isClimate ? `Zona Climática (${climate?.category})` :
                 isCurrent ? `Corriente Marina (${current?.temperature})` :
                 'Sistema Hidrográfico'}
              </span>
            </span>
            <span className="text-white/80 text-xs font-mono">
              Instituto Rosa Cerda Amador
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
            {feature.name}
          </h3>

          {relief && (
            <p className="text-amber-100 text-sm mt-1">
              Elevación máxima: <strong className="text-white">{relief.maxElevation}</strong> • Formación: <strong>{relief.formationAge}</strong>
            </p>
          )}

          {climate && (
            <p className="text-emerald-100 text-sm mt-1">
              {climate.subtypes} • Temperaturas: <strong>{climate.temperatureRange}</strong>
            </p>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 text-slate-700">
          {/* Relief Details */}
          {relief && (
            <>
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                  Descripción Geográfica & Relieve
                </h4>
                <p className="text-sm leading-relaxed text-slate-800">
                  {relief.description}
                </p>
              </div>

              {/* Crucial: Relation Relief -> Climate */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <h4 className="text-xs font-bold uppercase text-amber-900 tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>¿Cómo influye este relieve en el clima?</span>
                </h4>
                <p className="text-sm text-amber-950 leading-relaxed font-medium">
                  {relief.climateInfluence}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                  Puntos destacados & Hitos
                </h4>
                <div className="flex flex-wrap gap-2">
                  {relief.keyPoints.map((pt, i) => (
                    <span key={i} className="inline-flex items-center gap-1 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {pt}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Climate Details */}
          {climate && (
            <>
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                  Características Físicas
                </h4>
                <p className="text-sm leading-relaxed text-slate-800">
                  {climate.characteristics}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <span className="text-xs font-semibold text-slate-500 block">Régimen de precipitaciones</span>
                  <span className="text-sm font-bold text-slate-800">{climate.rainfall}</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <span className="text-xs font-semibold text-slate-500 block">Flora y fauna representativa</span>
                  <span className="text-xs text-slate-700 font-medium">{climate.typicalFloraFauna}</span>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                <h4 className="text-xs font-bold uppercase text-emerald-900 tracking-wider mb-1 flex items-center gap-1.5">
                  <Mountain className="w-4 h-4 text-emerald-700" />
                  <span>Relación directa con las formas del relieve</span>
                </h4>
                <p className="text-sm text-emerald-950 leading-relaxed font-medium">
                  {climate.reliefRelation}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                  Localización geográfica en América
                </h4>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                  {climate.geographicLocations.map((loc, idx) => (
                    <li key={idx}><strong className="text-slate-800">{loc}</strong></li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Ocean Current Details */}
          {current && (
            <>
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                  Trayectoria Oceánica
                </h4>
                <p className="text-sm leading-relaxed text-slate-800">
                  {current.pathDescription}
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <h4 className="text-xs font-bold uppercase text-blue-900 tracking-wider mb-1 flex items-center gap-1.5">
                  <Waves className="w-4 h-4 text-blue-700" />
                  <span>Impacto Climatológico y Marítimo</span>
                </h4>
                <p className="text-sm text-blue-950 leading-relaxed font-medium">
                  {current.climateImpact}
                </p>
              </div>
            </>
          )}

          {/* River Details */}
          {river && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-3">
                  <span className="text-xs font-semibold text-cyan-800">Longitud aproximada</span>
                  <span className="text-sm font-bold text-cyan-950 block">{river.length}</span>
                </div>
                <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-3">
                  <span className="text-xs font-semibold text-cyan-800">Área de la cuenca</span>
                  <span className="text-sm font-bold text-cyan-950 block">{river.basinArea}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                  Importancia Hidrográfica y Ecológica
                </h4>
                <p className="text-sm leading-relaxed text-slate-800">
                  {river.importance}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            Recurso didáctico para 8vo Grado &ldquo;A&rdquo;
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            Entendido / Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
