import React, { useState } from 'react';
import {
  MapLayer,
  AmericaRegion,
  ReliefFeature,
  ClimateZone,
  OceanCurrent,
  RiverSystem
} from '../../types';
import {
  RELIEF_FEATURES,
  CLIMATE_ZONES,
  OCEAN_CURRENTS,
  RIVER_SYSTEMS
} from '../../data/geographyData';
import { MAP_CHALLENGES } from '../../data/quizData';
import { ZoomIn, ZoomOut, RotateCcw, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AmericaMapProps {
  activeLayers: Record<MapLayer, boolean>;
  selectedRegion: AmericaRegion;
  setSelectedRegion: (region: AmericaRegion) => void;
  interactiveMode: 'explore' | 'challenge';
  onSelectFeature: (
    feature: ReliefFeature | ClimateZone | OceanCurrent | RiverSystem,
    type: 'relief' | 'climate' | 'current' | 'river'
  ) => void;
}

export const AmericaMap: React.FC<AmericaMapProps> = ({
  activeLayers,
  selectedRegion,
  setSelectedRegion,
  interactiveMode,
  onSelectFeature
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Challenge Mode State
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [challengeScore, setChallengeScore] = useState(0);
  const [challengeFeedback, setChallengeFeedback] = useState<{
    status: 'correct' | 'wrong' | null;
    message: string;
  }>({ status: null, message: '' });

  // ViewBox calculation based on region
  const getViewBox = () => {
    switch (selectedRegion) {
      case 'north':
        return '100 40 600 500';
      case 'central':
        return '240 430 380 320';
      case 'south':
        return '280 560 520 560';
      case 'all':
      default:
        return '80 30 720 1080';
    }
  };

  const handleFeatureClick = (
    feature: ReliefFeature | ClimateZone | OceanCurrent | RiverSystem,
    type: 'relief' | 'climate' | 'current' | 'river'
  ) => {
    if (interactiveMode === 'challenge') {
      const activeChallenge = MAP_CHALLENGES[currentChallengeIndex];
      if (feature.id === activeChallenge.targetFeatureId) {
        setChallengeFeedback({
          status: 'correct',
          message: `¡Excelente! Has localizado correctamente: ${feature.name}.`
        });
        setChallengeScore((prev) => prev + 10);
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });

        setTimeout(() => {
          if (currentChallengeIndex < MAP_CHALLENGES.length - 1) {
            setCurrentChallengeIndex((prev) => prev + 1);
            setChallengeFeedback({ status: null, message: '' });
          } else {
            setChallengeFeedback({
              status: 'correct',
              message: '🎉 ¡Felicitaciones! Has completado todos los desafíos de ubicación cartográfica.'
            });
          }
        }, 1800);
      } else {
        setChallengeFeedback({
          status: 'wrong',
          message: `Has pulsado en "${feature.name}". Intenta de nuevo. Pista: ${activeChallenge.hint}`
        });
      }
    } else {
      onSelectFeature(feature, type);
    }
  };

  const activeChallenge = MAP_CHALLENGES[currentChallengeIndex];

  return (
    <div className="relative bg-slate-900 rounded-3xl p-3 sm:p-5 shadow-2xl border border-slate-800 overflow-hidden select-none">
      {/* Challenge Bar if Challenge Mode active */}
      {interactiveMode === 'challenge' && (
        <div className="mb-3 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 p-4 rounded-2xl border border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Desafío {currentChallengeIndex + 1} de {MAP_CHALLENGES.length}
              </span>
              <span className="text-emerald-400 font-mono text-xs font-semibold">
                Puntos: {challengeScore} pts
              </span>
            </div>
            <p className="text-white font-bold text-sm sm:text-base flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{activeChallenge.prompt}</span>
            </p>
            {challengeFeedback.status && (
              <p
                className={`text-xs font-medium flex items-center gap-1.5 ${
                  challengeFeedback.status === 'correct'
                    ? 'text-emerald-300'
                    : 'text-amber-300'
                }`}
              >
                {challengeFeedback.status === 'correct' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                )}
                <span>{challengeFeedback.message}</span>
              </p>
            )}
          </div>

          <button
            onClick={() => {
              setCurrentChallengeIndex(0);
              setChallengeScore(0);
              setChallengeFeedback({ status: null, message: '' });
            }}
            className="self-start sm:self-auto text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition cursor-pointer"
          >
            Reiniciar Desafío
          </button>
        </div>
      )}

      {/* Floating Map Zoom & Reset Bar */}
      <div className="absolute top-6 right-6 z-20 flex flex-col gap-1.5 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-700/60 shadow-xl">
        <button
          onClick={() => setZoomLevel((z) => Math.min(z + 0.2, 1.8))}
          title="Acercar mapa"
          className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoomLevel((z) => Math.max(z - 0.2, 0.8))}
          title="Alejar mapa"
          className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => {
            setZoomLevel(1);
            setSelectedRegion('all');
          }}
          title="Restablecer vista"
          className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-amber-600 text-slate-200 hover:text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Map Legend Floating Drawer */}
      <div className="absolute bottom-6 left-6 z-20 hidden md:block bg-slate-950/85 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/60 text-xs text-slate-300 space-y-2 max-w-xs shadow-xl">
        <div className="font-bold text-slate-200 flex items-center justify-between border-b border-slate-800 pb-1.5">
          <span>Simbología Cartográfica</span>
          <span className="text-[10px] text-emerald-400 font-mono">8vo Grado A</span>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-600 shadow-xs"></span>
            <span>Cordilleras Cenozoicas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-700 shadow-xs"></span>
            <span>Escudos Precámbricos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-600 shadow-xs"></span>
            <span>Llanuras Aluviales</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-xs"></span>
            <span>Ríos & Cuencas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1.5 bg-red-400 rounded-full"></span>
            <span>Corriente Cálida</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1.5 bg-cyan-400 rounded-full"></span>
            <span>Corriente Fría</span>
          </div>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="w-full h-[580px] sm:h-[680px] lg:h-[760px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b1329] via-[#09152b] to-[#040914] rounded-2xl">
        <svg
          viewBox={getViewBox()}
          className="w-full h-full transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0b1a38" />
              <stop offset="100%" stopColor="#061026" />
            </linearGradient>

            <linearGradient id="landGradNorth" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <linearGradient id="amazonGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="andesRed" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>

            <linearGradient id="rockiesOrange" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* Grid Pattern for ocean */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>

            {/* Filter for glowing markers */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ocean Background with cartographic grid */}
          <rect x="-200" y="-100" width="1400" height="1500" fill="url(#oceanGrad)" />
          <rect x="-200" y="-100" width="1400" height="1500" fill="url(#grid)" />

          {/* Tropic and Equator Lines */}
          <g stroke="#334155" strokeWidth="1" strokeDasharray="4,4">
            {/* Tropic of Cancer (23.5° N) */}
            <line x1="80" y1="410" x2="800" y2="410" />
            <text x="710" y="405" fill="#64748b" fontSize="10" fontFamily="monospace">
              Trópico de Cáncer (23°26′ N)
            </text>

            {/* Equator (0°) */}
            <line x1="80" y1="650" x2="800" y2="650" stroke="#059669" strokeWidth="1.2" />
            <text x="730" y="645" fill="#10b981" fontSize="11" fontWeight="bold" fontFamily="monospace">
              Línea del Ecuador (0°)
            </text>

            {/* Tropic of Capricorn (23.5° S) */}
            <line x1="80" y1="830" x2="800" y2="830" />
            <text x="700" y="825" fill="#64748b" fontSize="10" fontFamily="monospace">
              Trópico de Capricornio (23°26′ S)
            </text>
          </g>

          {/* ============================================================ */}
          {/* BASE CONTINENT LANDMASS PATHS */}
          {/* ============================================================ */}
          <g id="landmass" stroke="#334155" strokeWidth="1.5">
            {/* North America (Alaska, Canada, USA, Mexico) */}
            <path
              d="
                M 120 120
                Q 140 70 220 70
                Q 290 60 360 80
                Q 420 50 490 60
                Q 580 80 620 120
                Q 590 180 540 210
                Q 500 160 440 180
                Q 480 230 520 280
                Q 550 320 500 370
                Q 450 420 400 420
                Q 350 440 330 490
                Q 280 470 260 390
                Q 230 350 200 320
                Q 170 260 190 200
                Q 140 170 120 120 Z
              "
              fill="#1e293b"
              className="transition-colors hover:fill-[#243047]"
            />

            {/* Greenland / Groenlandia */}
            <path
              d="M 540 40 Q 640 40 680 90 Q 650 140 580 150 Q 530 110 540 40 Z"
              fill="#334155"
              opacity="0.8"
            />
            <text x="590" y="95" fill="#94a3b8" fontSize="10" fontWeight="bold">
              Groenlandia
            </text>

            {/* Central America & Isthmus */}
            <path
              d="
                M 330 490
                Q 360 510 390 530
                Q 430 560 410 590
                Q 380 580 350 550
                Q 320 530 330 490 Z
              "
              fill="#1e293b"
            />

            {/* Caribbean Islands (Cuba, Hispaniola, etc.) */}
            <path d="M 430 450 Q 480 445 510 460 Q 470 470 430 450 Z" fill="#334155" />
            <path d="M 520 465 Q 550 470 560 480 Q 530 485 520 465 Z" fill="#334155" />

            {/* South America */}
            <path
              d="
                M 390 590
                Q 460 590 540 600
                Q 620 630 670 690
                Q 710 740 660 820
                Q 600 890 540 940
                Q 470 1020 430 1070
                Q 410 1060 400 980
                Q 380 900 370 820
                Q 360 740 370 660
                Q 370 620 390 590 Z
              "
              fill="#1e293b"
              className="transition-colors hover:fill-[#243047]"
            />
          </g>

          {/* ============================================================ */}
          {/* CLIMATE LAYER (if activeLayers.climate) */}
          {/* ============================================================ */}
          {activeLayers.climate && (
            <g id="climate-layer" opacity="0.65" className="transition-opacity duration-300">
              {/* Polar & Tundra (North Canada & Alaska) */}
              <path
                d="M 140 100 Q 300 70 550 70 Q 570 130 450 140 Q 250 150 140 100 Z"
                fill="#6366f1"
                className="cursor-pointer hover:opacity-90"
                onClick={() => handleFeatureClick(CLIMATE_ZONES[6], 'climate')}
              />

              {/* Continental North America */}
              <path
                d="M 240 170 Q 450 170 480 250 Q 380 290 260 260 Z"
                fill="#0ea5e9"
                className="cursor-pointer hover:opacity-90"
                onClick={() => handleFeatureClick(CLIMATE_ZONES[4], 'climate')}
              />

              {/* Desert North America (Sonora / Mojave) */}
              <path
                d="M 230 330 Q 280 340 280 400 Q 230 390 230 330 Z"
                fill="#f59e0b"
                className="cursor-pointer hover:opacity-90"
                onClick={() => handleFeatureClick(CLIMATE_ZONES[2], 'climate')}
              />

              {/* Tropical Central America */}
              <path
                d="M 330 490 Q 380 520 410 570 Q 370 570 330 510 Z"
                fill="#10b981"
                className="cursor-pointer hover:opacity-90"
                onClick={() => handleFeatureClick(CLIMATE_ZONES[1], 'climate')}
              />

              {/* Equatorial Amazon & Chocó */}
              <path
                d="M 400 640 Q 520 630 620 670 Q 610 740 500 760 Q 420 730 400 640 Z"
                fill="#059669"
                className="cursor-pointer hover:opacity-90"
                onClick={() => handleFeatureClick(CLIMATE_ZONES[0], 'climate')}
              />

              {/* Tropical Savanna (Llanos & Cerrado) */}
              <path
                d="M 440 600 Q 530 605 550 635 Q 470 645 440 600 Z"
                fill="#10b981"
                className="cursor-pointer hover:opacity-90"
                onClick={() => handleFeatureClick(CLIMATE_ZONES[1], 'climate')}
              />
              <path
                d="M 520 750 Q 630 740 640 820 Q 550 830 520 750 Z"
                fill="#10b981"
                className="cursor-pointer hover:opacity-90"
                onClick={() => handleFeatureClick(CLIMATE_ZONES[1], 'climate')}
              />

              {/* Desert Atacama */}
              <path
                d="M 382 760 Q 396 760 394 840 Q 380 840 382 760 Z"
                fill="#f59e0b"
                className="cursor-pointer hover:opacity-90"
                onClick={() => handleFeatureClick(CLIMATE_ZONES[2], 'climate')}
              />

              {/* Temperate Pampean (Argentina & Uruguay) */}
              <path
                d="M 450 850 Q 550 840 530 930 Q 450 920 450 850 Z"
                fill="#38bdf8"
                className="cursor-pointer hover:opacity-90"
                onClick={() => handleFeatureClick(CLIMATE_ZONES[5], 'climate')}
              />

              {/* Cold Mountain / Andes Spine */}
              <path
                d="M 390 600 L 410 730 L 415 880 L 410 1020"
                stroke="#818cf8"
                strokeWidth="14"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
                className="cursor-pointer"
                onClick={() => handleFeatureClick(CLIMATE_ZONES[7], 'climate')}
              />
            </g>
          )}

          {/* ============================================================ */}
          {/* HYDROGRAPHY LAYER (Rivers) */}
          {/* ============================================================ */}
          {activeLayers.hydrography && (
            <g id="rivers-layer">
              {RIVER_SYSTEMS.map((river) => (
                <g
                  key={river.id}
                  className="cursor-pointer group"
                  onClick={() => handleFeatureClick(river, 'river')}
                  onMouseEnter={() => setHoveredItem(river.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Glowing wide line */}
                  <path
                    d={river.path}
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="6"
                    strokeOpacity="0.4"
                    strokeLinecap="round"
                  />
                  {/* Main river line with animated dash */}
                  <path
                    d={river.path}
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    strokeDasharray="8,4"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                  {/* Text label */}
                  <text
                    x={river.labelCoords.x}
                    y={river.labelCoords.y}
                    fill="#a5f3fc"
                    fontSize="11"
                    fontWeight="bold"
                    filter="url(#glow)"
                  >
                    {river.name.split('(')[0]}
                  </text>
                </g>
              ))}
            </g>
          )}

          {/* ============================================================ */}
          {/* OCEAN CURRENTS LAYER */}
          {/* ============================================================ */}
          {activeLayers.currents && (
            <g id="currents-layer">
              {OCEAN_CURRENTS.map((current) => {
                const isWarm = current.temperature === 'Cálida';
                const strokeColor = isWarm ? '#f87171' : '#38bdf8';
                return (
                  <g
                    key={current.id}
                    className="cursor-pointer"
                    onClick={() => handleFeatureClick(current, 'current')}
                    onMouseEnter={() => setHoveredItem(current.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Direction arrow path */}
                    <path
                      d={current.coordinates.path}
                      fill="none"
                      stroke={strokeColor}
                      strokeWidth="3.5"
                      strokeDasharray="6,3"
                      strokeLinecap="round"
                    />
                    {/* Circle marker */}
                    <circle
                      cx={current.coordinates.x}
                      cy={current.coordinates.y}
                      r="6"
                      fill={strokeColor}
                      className="animate-ping"
                      opacity="0.7"
                    />
                    <circle
                      cx={current.coordinates.x}
                      cy={current.coordinates.y}
                      r="5"
                      fill={strokeColor}
                    />
                    {/* Name tag */}
                    <text
                      x={current.coordinates.labelX}
                      y={current.coordinates.labelY}
                      fill={isWarm ? '#fecaca' : '#bae6fd'}
                      fontSize="10"
                      fontWeight="bold"
                      className="font-mono"
                    >
                      {current.name.split('(')[0]}
                    </text>
                  </g>
                );
              })}
            </g>
          )}

          {/* ============================================================ */}
          {/* RELIEF LAYER (Shapes & Icons) */}
          {/* ============================================================ */}
          {activeLayers.relief && (
            <g id="relief-layer">
              {/* Rocky Mountains Mountain Range Visual Ribbon */}
              <path
                d="M 230 140 Q 270 220 300 350"
                stroke="url(#rockiesOrange)"
                strokeWidth="18"
                strokeLinecap="round"
                fill="none"
                opacity="0.85"
              />

              {/* Appalachian Range Ribbon */}
              <path
                d="M 450 240 Q 490 280 470 330"
                stroke="#854d0e"
                strokeWidth="14"
                strokeLinecap="round"
                fill="none"
                opacity="0.75"
              />

              {/* Sierra Madre Ribbon */}
              <path
                d="M 270 360 Q 290 420 330 460"
                stroke="#d97706"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
              />

              {/* Central America Cordillera */}
              <path
                d="M 330 490 Q 360 520 390 550"
                stroke="#ea580c"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
                opacity="0.85"
              />

              {/* Andes Mountain Spine from Colombia to Cape Horn */}
              <path
                d="M 380 610 Q 405 690 415 780 Q 425 870 415 970 Q 420 1020 425 1060"
                stroke="url(#andesRed)"
                strokeWidth="18"
                strokeLinecap="round"
                fill="none"
                opacity="0.9"
              />

              {/* Canadian Shield / Escudo Canadiense polygon */}
              <polygon
                points="360,110 480,100 480,170 380,180"
                fill="#71717a"
                fillOpacity="0.45"
                stroke="#a1a1aa"
                strokeWidth="1"
                strokeDasharray="3,3"
              />

              {/* Great Plains expanse */}
              <rect
                x="310"
                y="220"
                width="120"
                height="100"
                rx="15"
                fill="#65a30d"
                fillOpacity="0.3"
                stroke="#84cc16"
                strokeWidth="1"
                strokeDasharray="4,4"
              />

              {/* Amazon Basin expanse */}
              <ellipse
                cx="500"
                cy="710"
                rx="110"
                ry="60"
                fill="url(#amazonGreen)"
                stroke="#10b981"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />

              {/* Guiana Shield */}
              <polygon
                points="460,625 540,620 530,665 460,660"
                fill="#78716c"
                fillOpacity="0.5"
                stroke="#a8a29e"
                strokeWidth="1"
              />

              {/* Brazilian Shield */}
              <polygon
                points="530,760 630,750 620,830 540,840"
                fill="#7c2d12"
                fillOpacity="0.45"
                stroke="#b45309"
                strokeWidth="1"
              />

              {/* Chaco-Pampean Plains */}
              <ellipse
                cx="480"
                cy="890"
                rx="55"
                ry="50"
                fill="#4d7c0f"
                fillOpacity="0.35"
                stroke="#84cc16"
                strokeWidth="1"
              />

              {/* ============================================================ */}
              {/* INTERACTIVE RELIEF PINS & LABELS */}
              {/* ============================================================ */}
              {RELIEF_FEATURES.map((feature) => {
                const isHovered = hoveredItem === feature.name;
                const isTarget =
                  interactiveMode === 'challenge' &&
                  activeChallenge.targetFeatureId === feature.id;

                return (
                  <g
                    key={feature.id}
                    className="cursor-pointer group transition-all"
                    onClick={() => handleFeatureClick(feature, 'relief')}
                    onMouseEnter={() => setHoveredItem(feature.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Pulsing ring on hover or challenge target */}
                    {(isHovered || isTarget) && (
                      <circle
                        cx={feature.cx}
                        cy={feature.cy}
                        r="18"
                        fill="none"
                        stroke={isTarget ? '#fbbf24' : '#10b981'}
                        strokeWidth="2"
                        className="animate-ping"
                      />
                    )}

                    {/* Pin background */}
                    <circle
                      cx={feature.cx}
                      cy={feature.cy}
                      r={isHovered ? 12 : 9}
                      fill={feature.color}
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="transition-all duration-200"
                    />

                    {/* Pin icon or center dot */}
                    <circle
                      cx={feature.cx}
                      cy={feature.cy}
                      r="3.5"
                      fill="#ffffff"
                    />

                    {/* Label */}
                    <g className="transition-opacity">
                      <rect
                        x={feature.cx + 12}
                        y={feature.cy - 12}
                        width={feature.name.length * 6.5 + 14}
                        height="20"
                        rx="6"
                        fill="#0f172a"
                        fillOpacity="0.88"
                        stroke="#334155"
                        strokeWidth="1"
                      />
                      <text
                        x={feature.cx + 18}
                        y={feature.cy + 2}
                        fill="#f8fafc"
                        fontSize="10"
                        fontWeight="600"
                        fontFamily="sans-serif"
                      >
                        {feature.name.split('(')[0]}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          )}

          {/* Continent Labels */}
          <text x="320" y="140" fill="#475569" fontSize="16" fontWeight="900" letterSpacing="4">
            AMÉRICA DEL NORTE
          </text>
          <text x="260" y="520" fill="#475569" fontSize="12" fontWeight="900" letterSpacing="3">
            AMÉRICA CENTRAL
          </text>
          <text x="520" y="640" fill="#475569" fontSize="16" fontWeight="900" letterSpacing="4">
            AMÉRICA DEL SUR
          </text>

          {/* Oceans */}
          <text x="110" y="700" fill="#1e293b" fontSize="15" fontWeight="bold" letterSpacing="2">
            OCÉANO PACÍFICO
          </text>
          <text x="640" y="550" fill="#1e293b" fontSize="15" fontWeight="bold" letterSpacing="2">
            OCÉANO ATLÁNTICO
          </text>
        </svg>
      </div>

      {/* Footer Info within Map Card */}
      <div className="mt-3 flex flex-wrap items-center justify-between text-xs text-slate-400 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>
            Mapas interactivos multicapa para estudiantes de 8vo Grado &ldquo;A&rdquo;
          </span>
        </div>
        <div className="text-[11px] font-mono text-slate-500">
          Proyección Cartográfica Didáctica • Instituto Rosa Cerda Amador
        </div>
      </div>
    </div>
  );
};
