import React, { useState } from 'react';
import { Mountain, CloudRain, Sun, Wind, ArrowRight, Info, Layers, CheckCircle2 } from 'lucide-react';

export const TopographicProfile: React.FC = () => {
  const [profileSelection, setProfileSelection] = useState<'south' | 'north'>('south');
  const [windActive, setWindActive] = useState<boolean>(true);
  const [selectedAltitudePoint, setSelectedAltitudePoint] = useState<number | null>(null);

  const thermalFloors = [
    {
      name: 'Tierra Caliente (0 a 1,000 m)',
      temp: '24°C a 28°C',
      climate: 'Cálido húmedo / tropical',
      crops: 'Plátano, caña de azúcar, cacao, yuca y selva densa.',
      bg: 'bg-emerald-500/20 text-emerald-800 border-emerald-300'
    },
    {
      name: 'Tierra Templada (1,000 a 2,000 m)',
      temp: '17°C a 24°C',
      climate: 'Templado de montaña (primaveral)',
      crops: 'Café, maíz, cítricos, bambú y flores.',
      bg: 'bg-teal-500/20 text-teal-800 border-teal-300'
    },
    {
      name: 'Tierra Fría (2,000 a 3,000 m)',
      temp: '12°C a 17°C',
      climate: 'Frío moderado',
      crops: 'Papa, trigo, cebada, hortalizas, bosques de niebla y ganado lechero.',
      bg: 'bg-blue-500/20 text-blue-800 border-blue-300'
    },
    {
      name: 'Páramo / Puna (3,000 a 4,500 m)',
      temp: '0°C a 12°C',
      climate: 'Frío andino con heladas nocturnas',
      crops: 'Frailejones, pastos duros (ichu), vicuñas, llamas y alpacas.',
      bg: 'bg-indigo-500/20 text-indigo-800 border-indigo-300'
    },
    {
      name: 'Nieves Perpetuas (> 4,500 m)',
      temp: '< 0°C constante',
      climate: 'Glaciar de alta montaña',
      crops: 'Roca desnuda, hielo, morrenas y nieves eternas.',
      bg: 'bg-slate-500/20 text-slate-800 border-slate-300'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Simulador Pedagógico Interactivo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Perfil Topográfico: ¿Cómo el Relieve Modela el Clima?
            </h2>
            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              Descubre en tiempo real cómo la gran muralla de las cordilleras americanas (Andes y Rocosas) modifica las temperaturas, detiene las nubes y da origen a desiertos y selvas mediante el <strong>efecto de sombra orográfica</strong>.
            </p>
          </div>

          {/* Profile Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl self-start lg:self-center">
            <button
              onClick={() => setProfileSelection('south')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                profileSelection === 'south'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Corte Transversal: Sudamérica
            </button>
            <button
              onClick={() => setProfileSelection('north')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                profileSelection === 'north'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Corte Transversal: Norteamérica
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Diagram */}
      <div className="bg-slate-900 rounded-3xl p-4 sm:p-8 shadow-2xl border border-slate-800 text-white space-y-6">
        {/* Interactive Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Simulación de Vientos:
            </span>
            <button
              onClick={() => setWindActive(!windActive)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                windActive
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              <Wind className="w-3.5 h-3.5" />
              <span>{windActive ? 'Vientos Húmedos Activos' : 'Pausar Vientos'}</span>
            </button>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span>Oeste (Pacífico)</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span>Este (Atlántico)</span>
          </div>
        </div>

        {/* SVG Diagram Canvas */}
        <div className="w-full h-80 sm:h-96 relative bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-800 p-2">
          <svg viewBox="0 0 1000 400" className="w-full h-full select-none">
            <defs>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0c4a6e" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.05" />
              </linearGradient>

              <linearGradient id="mountainFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="15%" stopColor="#94a3b8" />
                <stop offset="40%" stopColor="#78716c" />
                <stop offset="100%" stopColor="#292524" />
              </linearGradient>

              <linearGradient id="rainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect x="0" y="0" width="1000" height="400" fill="url(#skyGrad)" />

            {/* Altitude reference grid lines */}
            <g stroke="#334155" strokeWidth="0.8" strokeDasharray="3,3">
              <line x1="60" y1="80" x2="950" y2="80" />
              <text x="15" y="85" fill="#94a3b8" fontSize="10" fontFamily="monospace">6,000 m</text>

              <line x1="60" y1="140" x2="950" y2="140" />
              <text x="15" y="145" fill="#94a3b8" fontSize="10" fontFamily="monospace">4,500 m</text>

              <line x1="60" y1="210" x2="950" y2="210" />
              <text x="15" y="215" fill="#94a3b8" fontSize="10" fontFamily="monospace">3,000 m</text>

              <line x1="60" y1="280" x2="950" y2="280" />
              <text x="15" y="285" fill="#94a3b8" fontSize="10" fontFamily="monospace">1,500 m</text>

              <line x1="60" y1="350" x2="950" y2="350" stroke="#059669" strokeWidth="1" />
              <text x="25" y="355" fill="#10b981" fontSize="10" fontFamily="monospace">0 m</text>
            </g>

            {profileSelection === 'south' ? (
              /* ============================================================== */
              /* SOUTH AMERICA CROSS SECTION (Pacific -> Andes -> Amazon -> Brazil -> Atlantic) */
              /* ============================================================== */
              <g id="south-profile">
                {/* Pacific Ocean */}
                <rect x="60" y="350" width="80" height="50" fill="#0369a1" />
                <text x="75" y="380" fill="#bae6fd" fontSize="11" fontWeight="bold">Pacífico</text>

                {/* Coastal Desert (Atacama) */}
                <path d="M 140 350 L 190 340 L 220 300 L 250 220 L 290 90 L 330 150 L 370 170 L 410 320 L 460 345 L 750 345 L 820 280 L 890 290 L 920 350 L 980 350 L 980 400 L 60 400 Z" fill="url(#mountainFill)" />

                {/* Snow Cap on Andes */}
                <polygon points="280,120 290,90 305,120" fill="#ffffff" />
                <polygon points="320,160 330,150 340,165" fill="#ffffff" />

                {/* Atlantic Ocean */}
                <rect x="920" y="350" width="60" height="50" fill="#0369a1" />
                <text x="930" y="380" fill="#bae6fd" fontSize="11" fontWeight="bold">Atlántico</text>

                {/* Relief Labels */}
                <text x="145" y="335" fill="#fde047" fontSize="10" fontWeight="bold">Costa Árida</text>
                <text x="235" y="75" fill="#f87171" fontSize="13" fontWeight="900">Cordillera de los Andes</text>
                <text x="250" y="88" fill="#cbd5e1" fontSize="10">Cima: Aconcagua (6,961 m)</text>

                <text x="340" y="165" fill="#a7f3d0" fontSize="10" fontWeight="bold">Altiplano</text>

                {/* Amazon Basin representation */}
                <rect x="460" y="342" width="290" height="15" fill="#059669" rx="3" />
                <text x="540" y="335" fill="#4ade80" fontSize="12" fontWeight="bold">Llanura Amazónica (Selva Ecuatorial)</text>
                <text x="560" y="360" fill="#ffffff" fontSize="9">Río Amazonas y cuenca aluvial</text>

                {/* Brazilian Highlands */}
                <text x="810" y="270" fill="#d97706" fontSize="11" fontWeight="bold">Macizo Brasileño</text>

                {/* Rain Shadow & Clouds Visual */}
                {windActive && (
                  <g className="animate-subtle-float">
                    {/* Clouds on Amazon / East side of Andes (Barlovento) */}
                    <g transform="translate(380, 210)">
                      <circle cx="20" cy="20" r="22" fill="#e2e8f0" opacity="0.85" />
                      <circle cx="45" cy="15" r="26" fill="#f1f5f9" opacity="0.9" />
                      <circle cx="70" cy="22" r="20" fill="#e2e8f0" opacity="0.85" />
                      <text x="10" y="60" fill="#38bdf8" fontSize="10" fontWeight="bold">Lluvia Orográfica</text>
                      {/* Rain Drops */}
                      <line x1="25" y1="45" x2="20" y2="70" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
                      <line x1="45" y1="45" x2="40" y2="75" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
                      <line x1="65" y1="45" x2="60" y2="70" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
                    </g>

                    {/* Wind Arrows from Amazon pushing west into Andes */}
                    <g stroke="#38bdf8" strokeWidth="2.5" fill="none">
                      <path d="M 680 290 Q 550 280 430 240" strokeDasharray="6,4" />
                      <polygon points="430,240 440,235 442,246" fill="#38bdf8" />
                    </g>
                    <text x="510" y="270" fill="#67e8f9" fontSize="11" fontWeight="bold">
                      Vientos Alisios Húmedos (Amazonía ➔ Andes)
                    </text>

                    {/* Dry air descending to Pacific coast / Atacama */}
                    <g stroke="#fbbf24" strokeWidth="2" fill="none">
                      <path d="M 270 120 Q 220 220 180 310" strokeDasharray="4,4" />
                    </g>
                    <text x="140" y="240" fill="#fde047" fontSize="10" fontWeight="bold">
                      Aire seco descendente
                    </text>
                    <text x="140" y="255" fill="#fde047" fontSize="9">
                      (Sombra de lluvia)
                    </text>
                  </g>
                )}
              </g>
            ) : (
              /* ============================================================== */
              /* NORTH AMERICA CROSS SECTION (Pacific -> Cascades/Rockies -> Great Plains -> Appalachians -> Atlantic) */
              /* ============================================================== */
              <g id="north-profile">
                {/* Pacific Ocean */}
                <rect x="60" y="350" width="80" height="50" fill="#0369a1" />
                <text x="75" y="380" fill="#bae6fd" fontSize="11" fontWeight="bold">Pacífico</text>

                {/* Coast Range, Rockies, Great Plains, Appalachians */}
                <path d="M 140 350 L 190 240 L 230 280 L 320 110 L 390 260 L 440 310 L 680 320 L 760 250 L 820 270 L 880 350 L 980 350 L 980 400 L 60 400 Z" fill="url(#mountainFill)" />

                {/* Snow Cap on Rockies */}
                <polygon points="310,135 320,110 335,135" fill="#ffffff" />

                {/* Atlantic Ocean */}
                <rect x="880" y="350" width="100" height="50" fill="#0369a1" />
                <text x="910" y="380" fill="#bae6fd" fontSize="11" fontWeight="bold">Atlántico</text>

                {/* Labels */}
                <text x="160" y="225" fill="#fb923c" fontSize="11" fontWeight="bold">Cadena Costera</text>
                <text x="270" y="95" fill="#f97316" fontSize="13" fontWeight="900">Montañas Rocosas</text>
                <text x="290" y="108" fill="#cbd5e1" fontSize="10">Monte Elbert (4,401 m)</text>

                <text x="490" y="305" fill="#a3e635" fontSize="12" fontWeight="bold">Grandes Llanuras Centrales</text>
                <text x="510" y="335" fill="#e2e8f0" fontSize="9">Cuenca fluvial Misisipi-Misuri</text>

                <text x="740" y="235" fill="#ca8a04" fontSize="11" fontWeight="bold">Montes Apalaches</text>
                <text x="745" y="248" fill="#94a3b8" fontSize="9">(Relieve antiguo erosionado)</text>

                {/* Pacific Wind condensation */}
                {windActive && (
                  <g className="animate-subtle-float">
                    <g transform="translate(130, 200)">
                      <circle cx="20" cy="20" r="20" fill="#e2e8f0" opacity="0.85" />
                      <circle cx="45" cy="15" r="24" fill="#f1f5f9" opacity="0.9" />
                      <circle cx="65" cy="22" r="18" fill="#e2e8f0" opacity="0.85" />
                      <line x1="25" y1="45" x2="20" y2="70" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
                      <line x1="45" y1="45" x2="40" y2="75" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
                    </g>
                    <text x="70" y="180" fill="#67e8f9" fontSize="11" fontWeight="bold">
                      Vientos Húmedos del Pacífico
                    </text>
                    <text x="235" y="275" fill="#fde047" fontSize="10" fontWeight="bold">
                      Gran Cuenca Árida (Sombra orográfica)
                    </text>
                  </g>
                )}
              </g>
            )}
          </svg>
        </div>

        {/* Dynamic Scientific Explanation Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1.5">
              <CloudRain className="w-4 h-4" />
              <span>1. Barlovento (Ladera Húmeda)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              El viento marino choca contra la montaña y asciende forzadamente. Al subir se enfría, se condensa el vapor y descarga intensas lluvias orográficas.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1.5">
              <Sun className="w-4 h-4" />
              <span>2. Sotavento (Sombra de Lluvia)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Al cruzar la cumbre, el aire ya descargó casi toda su humedad. Al descender, se calienta y absorbe humedad en vez de expulsarla, creando desiertos y estepas.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1.5">
              <Mountain className="w-4 h-4" />
              <span>3. Gradiente Térmico Vertical</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Por cada 180 a 200 metros de altitud la temperatura disminuye ~1°C. Esto genera una zonificación vegetal y agrícola escalonada (pisos térmicos).
            </p>
          </div>
        </div>
      </div>

      {/* Pisos Térmicos Andinos y de Montaña Guide */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
              <Mountain className="w-5 h-5 text-emerald-600" />
              <span>Los Pisos Térmicos / Altitudinales de América</span>
            </h3>
            <p className="text-xs text-slate-500">
              Haz clic en cualquier estrato altitudinal para analizar su clima, temperaturas y actividades productivas
            </p>
          </div>
          <span className="text-xs font-mono bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
            Contenido 8vo Grado A
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {thermalFloors.map((floor, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedAltitudePoint(idx === selectedAltitudePoint ? null : idx)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedAltitudePoint === idx
                  ? 'ring-2 ring-emerald-500 shadow-md bg-emerald-50/50 border-emerald-300'
                  : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  {floor.temp}
                </span>
              </div>
              <h4 className="font-bold text-xs text-slate-800 mb-1">
                {floor.name}
              </h4>
              <p className="text-[11px] text-slate-500 mb-2">
                {floor.climate}
              </p>
              <div className="text-[11px] text-slate-700 border-t border-slate-200/80 pt-2 font-medium">
                🌱 <strong>Actividades:</strong> {floor.crops}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
