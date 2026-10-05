import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapLayer,
  AmericaRegion,
  BaseMapType,
  ReliefFeature,
  ClimateZone,
  OceanCurrent,
  RiverSystem,
  VolcanoItem,
  CountryGeography
} from '../../types';
import {
  RELIEF_FEATURES,
  CLIMATE_ZONES,
  OCEAN_CURRENTS,
  RIVER_SYSTEMS
} from '../../data/geographyData';
import {
  VOLCANOES_DATA,
  VOLCANIC_ARC_LINES,
  COUNTRIES_GEOGRAPHY
} from '../../data/countriesAndVolcanoesData';
import { MAP_CHALLENGES } from '../../data/quizData';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Layers,
  Maximize2,
  Minimize2,
  Navigation2,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface RealLeafletMapProps {
  activeLayers: Record<MapLayer, boolean>;
  selectedRegion: AmericaRegion;
  setSelectedRegion: (region: AmericaRegion) => void;
  interactiveMode: 'explore' | 'challenge';
  baseMap: BaseMapType;
  setBaseMap: (base: BaseMapType) => void;
  onSelectFeature: (
    feature: ReliefFeature | ClimateZone | OceanCurrent | RiverSystem,
    type: 'relief' | 'climate' | 'current' | 'river'
  ) => void;
  onSelectVolcano?: (volcano: VolcanoItem) => void;
  onSelectCountry?: (country: CountryGeography) => void;
  targetFocus?: { lat: number; lng: number; zoom: number; timestamp: number } | null;
}

export const RealLeafletMap: React.FC<RealLeafletMapProps> = ({
  activeLayers,
  selectedRegion,
  setSelectedRegion,
  interactiveMode,
  baseMap,
  setBaseMap,
  onSelectFeature,
  onSelectVolcano,
  onSelectCountry,
  targetFocus
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const layerGroupRef = useRef<L.LayerGroup | null>(null);

  const [mouseCoords, setMouseCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [currentZoom, setCurrentZoom] = useState<number>(3);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Challenge Mode State
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [challengeScore, setChallengeScore] = useState(0);
  const [challengeFeedback, setChallengeFeedback] = useState<{
    status: 'correct' | 'wrong' | null;
    message: string;
  }>({ status: null, message: '' });

  // Map tile configurations
  const getTileUrl = (type: BaseMapType) => {
    switch (type) {
      case 'satellite':
        return {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
          maxZoom: 18
        };
      case 'topographic':
        return {
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
          maxZoom: 17
        };
      case 'streets':
        return {
          url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19
        };
      case 'physical':
      default:
        return {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
          attribution: 'Tiles &copy; Esri &mdash; Source: US National Park Service',
          maxZoom: 8
        };
    }
  };

  // Region View coordinates
  const getRegionCoordinates = (region: AmericaRegion): { center: [number, number]; zoom: number } => {
    switch (region) {
      case 'north':
        return { center: [45.0, -100.0], zoom: 4 };
      case 'central':
        return { center: [14.0, -84.0], zoom: 5.5 };
      case 'south':
        return { center: [-18.0, -62.0], zoom: 4 };
      case 'all':
      default:
        return { center: [12.0, -82.0], zoom: 3 };
    }
  };

  // Challenge click handler
  const handleFeatureClick = (
    feature: ReliefFeature | ClimateZone | OceanCurrent | RiverSystem,
    type: 'relief' | 'climate' | 'current' | 'river'
  ) => {
    if (interactiveMode === 'challenge') {
      const activeChallenge = MAP_CHALLENGES[currentChallengeIndex];
      if (feature.id === activeChallenge.targetFeatureId) {
        setChallengeFeedback({
          status: 'correct',
          message: `¡Excelente! Has localizado correctamente en el mapa real: ${feature.name}.`
        });
        setChallengeScore((prev) => prev + 10);
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });

        setTimeout(() => {
          if (currentChallengeIndex < MAP_CHALLENGES.length - 1) {
            setCurrentChallengeIndex((prev) => prev + 1);
            setChallengeFeedback({ status: null, message: '' });
          } else {
            setChallengeFeedback({
              status: 'correct',
              message: '🎉 ¡Felicitaciones! Has dominado todos los accidentes en el mapa real de América.'
            });
          }
        }, 1800);
      } else {
        setChallengeFeedback({
          status: 'wrong',
          message: `Has pulsado en "${feature.name}". Pista: ${activeChallenge.hint}`
        });
      }
    } else {
      onSelectFeature(feature, type);
    }
  };

  // 1. Initialize map on mount
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    const initial = getRegionCoordinates(selectedRegion);

    const map = L.map(mapContainerRef.current, {
      center: initial.center,
      zoom: initial.zoom,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: false,
      attributionControl: false
    });

    const tileInfo = getTileUrl(baseMap);
    const tileLayer = L.tileLayer(tileInfo.url, {
      maxZoom: tileInfo.maxZoom,
      attribution: tileInfo.attribution,
      subdomains: 'abc'
    }).addTo(map);

    tileLayerRef.current = tileLayer;

    // Layer group for all geo markers & shapes
    const layerGroup = L.layerGroup().addTo(map);
    layerGroupRef.current = layerGroup;

    // Listeners for coordinates and zoom
    map.on('mousemove', (e: L.LeafletMouseEvent) => {
      setMouseCoords({
        lat: Number(e.latlng.lat.toFixed(2)),
        lng: Number(e.latlng.lng.toFixed(2))
      });
    });

    map.on('zoomend', () => {
      setCurrentZoom(map.getZoom());
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // 2. Update Base Map Tiles when baseMap changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }

    const tileInfo = getTileUrl(baseMap);
    const newTile = L.tileLayer(tileInfo.url, {
      maxZoom: tileInfo.maxZoom,
      attribution: tileInfo.attribution,
      subdomains: 'abc'
    }).addTo(map);

    tileLayerRef.current = newTile;
  }, [baseMap]);

  // 3. Update view when selectedRegion changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    const { center, zoom } = getRegionCoordinates(selectedRegion);
    map.flyTo(center, zoom, {
      duration: 1.2,
      easeLinearity: 0.25
    });
  }, [selectedRegion]);

  // 3b. Fly to target coordinates when targetFocus changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !targetFocus) return;

    map.flyTo([targetFocus.lat, targetFocus.lng], targetFocus.zoom, {
      duration: 1.4,
      easeLinearity: 0.25
    });
  }, [targetFocus]);

  // 4. Render all interactive elements (relief, climate, rivers, currents, volcanoes, countries)
  useEffect(() => {
    const map = mapInstanceRef.current;
    const layerGroup = layerGroupRef.current;
    if (!map || !layerGroup) return;

    layerGroup.clearLayers();

    // A. CLIMATE LAYER (Polygons)
    if (activeLayers.climate) {
      CLIMATE_ZONES.forEach((climate) => {
        if (!climate.realPolygons) return;

        climate.realPolygons.forEach((polyCoords) => {
          const polygon = L.polygon(polyCoords, {
            color: climate.color,
            fillColor: climate.color,
            fillOpacity: 0.32,
            weight: 2,
            dashArray: '4,4'
          });

          polygon.bindTooltip(
            `<div class="text-xs font-bold text-slate-900">${climate.name}</div>
             <div class="text-[10px] text-slate-600">${climate.subtypes}</div>
             <div class="text-[10px] text-emerald-800 font-semibold mt-0.5">🌧️ ${climate.rainfall}</div>`,
            { sticky: true, opacity: 0.95 }
          );

          polygon.on('click', () => {
            handleFeatureClick(climate, 'climate');
          });

          polygon.on('mouseover', function (this: L.Polygon) {
            this.setStyle({ fillOpacity: 0.55, weight: 3 });
          });

          polygon.on('mouseout', function (this: L.Polygon) {
            this.setStyle({ fillOpacity: 0.32, weight: 2 });
          });

          polygon.addTo(layerGroup);
        });
      });
    }

    // B. RIVERS / HYDROGRAPHY LAYER
    if (activeLayers.hydrography) {
      RIVER_SYSTEMS.forEach((river) => {
        if (!river.realCoordinates) return;

        // Glow polyline behind
        const glowLine = L.polyline(river.realCoordinates, {
          color: '#06b6d4',
          weight: 7,
          opacity: 0.45,
          lineCap: 'round',
          lineJoin: 'round'
        });
        glowLine.addTo(layerGroup);

        // Core river polyline
        const riverLine = L.polyline(river.realCoordinates, {
          color: '#22d3ee',
          weight: 3.5,
          opacity: 0.95,
          dashArray: '8,4'
        });

        riverLine.bindTooltip(
          `<div class="text-xs font-black text-cyan-950">${river.name}</div>
           <div class="text-[10px] text-cyan-800">Longitud: <strong>${river.length}</strong></div>
           <div class="text-[10px] text-slate-600">Cuenca: ${river.basinArea}</div>`,
          { sticky: true, opacity: 0.95 }
        );

        riverLine.on('click', () => {
          handleFeatureClick(river, 'river');
        });

        riverLine.on('mouseover', function (this: L.Polyline) {
          this.setStyle({ weight: 5, color: '#38bdf8' });
        });

        riverLine.on('mouseout', function (this: L.Polyline) {
          this.setStyle({ weight: 3.5, color: '#22d3ee' });
        });

        riverLine.addTo(layerGroup);
      });
    }

    // C. OCEAN CURRENTS LAYER
    if (activeLayers.currents) {
      OCEAN_CURRENTS.forEach((current) => {
        if (!current.realPath) return;

        const isWarm = current.temperature === 'Cálida';
        const color = isWarm ? '#ef4444' : '#0284c7';

        const currentPoly = L.polyline(current.realPath, {
          color: color,
          weight: 4,
          opacity: 0.85,
          dashArray: '10,6'
        });

        currentPoly.bindTooltip(
          `<div class="text-xs font-bold ${isWarm ? 'text-red-700' : 'text-blue-700'}">${current.name}</div>
           <div class="text-[10px] font-semibold text-slate-700">Tipo: Corriente ${current.temperature}</div>
           <div class="text-[10px] text-slate-500 max-w-xs">${current.climateImpact.slice(0, 110)}...</div>`,
          { sticky: true, opacity: 0.95 }
        );

        currentPoly.on('click', () => {
          handleFeatureClick(current, 'current');
        });

        currentPoly.addTo(layerGroup);

        // Center marker for current flow
        if (current.centerLat && current.centerLng) {
          const arrowHtml = `
            <div style="background-color: ${isWarm ? '#ef4444' : '#0284c7'}; color: white;" 
                 class="w-7 h-7 rounded-full shadow-lg flex items-center justify-center font-bold text-xs border-2 border-white ring-2 ring-black/20 animate-pulse">
              ${isWarm ? '🔥' : '❄️'}
            </div>
          `;
          const arrowIcon = L.divIcon({
            html: arrowHtml,
            className: 'custom-current-icon',
            iconSize: [28, 28],
            iconAnchor: [14, 14]
          });

          const currentMarker = L.marker([current.centerLat, current.centerLng], { icon: arrowIcon });
          currentMarker.on('click', () => handleFeatureClick(current, 'current'));
          currentMarker.addTo(layerGroup);
        }
      });
    }

    // D. RELIEF FEATURES (Markers and Area Polygons)
    if (activeLayers.relief) {
      RELIEF_FEATURES.forEach((feature) => {
        // Optional area polygon
        if (feature.areaPolygon) {
          const areaPoly = L.polygon(feature.areaPolygon, {
            color: feature.color,
            fillColor: feature.color,
            fillOpacity: 0.18,
            weight: 1.5,
            dashArray: '4,4'
          });

          areaPoly.on('click', () => handleFeatureClick(feature, 'relief'));
          areaPoly.addTo(layerGroup);
        }

        // Custom rich marker pin
        const isMountain = feature.type === 'cordillera' || feature.type === 'volcan';
        const isPlains = feature.type === 'llanura';
        const symbol = isMountain ? '⛰️' : isPlains ? '🌾' : '🛡️';

        const customMarkerHtml = `
          <div class="group cursor-pointer flex flex-col items-center">
            <div style="background-color: ${feature.color};"
                 class="px-2 py-0.5 rounded-full text-white text-[11px] font-black shadow-lg border-2 border-white flex items-center gap-1 whitespace-nowrap transform transition-all group-hover:scale-110">
              <span>${symbol}</span>
              <span class="max-w-[120px] truncate">${feature.name.split('(')[0]}</span>
            </div>
            <div class="w-2 h-2 rotate-45 -mt-1 shadow" style="background-color: ${feature.color};"></div>
          </div>
        `;

        const icon = L.divIcon({
          html: customMarkerHtml,
          className: 'custom-relief-marker',
          iconSize: [140, 36],
          iconAnchor: [70, 30]
        });

        const marker = L.marker([feature.lat, feature.lng], { icon });

        marker.bindTooltip(
          `<div class="text-xs font-black text-slate-900">${feature.name}</div>
           <div class="text-[10px] text-amber-800 font-bold">Cota máxima: ${feature.maxElevation}</div>
           <div class="text-[10px] text-slate-500 font-mono">Era: ${feature.formationAge}</div>
           <div class="text-[10px] text-emerald-800 font-semibold mt-1">💡 Clic para ver ficha completa y relación relieve-clima</div>`,
          { direction: 'top', offset: [0, -16], opacity: 0.95 }
        );

        marker.on('click', () => {
          handleFeatureClick(feature, 'relief');
        });

        marker.addTo(layerGroup);
      });
    }

    // E. CADENA VOLCÁNICA LAYER (Cinturón de Fuego del Pacífico)
    if (activeLayers.volcanoes) {
      // 1. Arcos Volcánicos continuos (Polylines con resplandor)
      VOLCANIC_ARC_LINES.forEach((arc) => {
        // Resplandor exterior de magma
        const glowLine = L.polyline(arc.path, {
          color: '#ef4444',
          weight: 9,
          opacity: 0.35,
          lineCap: 'round',
          lineJoin: 'round'
        });
        glowLine.addTo(layerGroup);

        // Línea punteada de fuego interior
        const arcLine = L.polyline(arc.path, {
          color: '#f97316',
          weight: 3.5,
          opacity: 0.95,
          dashArray: '8,6'
        });

        arcLine.bindTooltip(
          `<div class="text-xs font-black text-red-950 flex items-center gap-1.5">
             <span>🌋</span> <span>${arc.name}</span>
           </div>
           <div class="text-[10px] text-amber-800 font-bold mt-0.5">Cinturón de Fuego del Pacífico (Zona de Subducción)</div>
           <div class="text-[10px] text-slate-600">Arco tectónico que origina la cadena volcánica activa de América</div>`,
          { sticky: true, opacity: 0.95 }
        );

        arcLine.addTo(layerGroup);
      });

      // 2. Marcadores individuales de Volcanes con estados e info interactiva
      VOLCANOES_DATA.forEach((volcano) => {
        const isActive = volcano.status === 'Activo';
        const isNicaragua = volcano.country === 'Nicaragua';

        const customVolcanoHtml = `
          <div class="group cursor-pointer flex flex-col items-center">
            <div class="relative flex items-center justify-center">
              ${isActive ? '<span class="absolute -inset-1 rounded-full bg-red-500/40 animate-ping"></span>' : ''}
              <div class="w-7 h-7 rounded-full shadow-xl flex items-center justify-center text-xs font-bold border-2 border-white ring-2 ${
                isActive
                  ? 'bg-gradient-to-tr from-red-600 to-amber-500 text-white ring-red-500 shadow-red-500/50'
                  : 'bg-gradient-to-tr from-amber-700 to-orange-400 text-white ring-amber-400'
              } transform transition-all group-hover:scale-125">
                🌋
              </div>
            </div>
            <div class="bg-slate-950/90 text-white px-2 py-0.5 rounded-md text-[10px] font-black shadow-lg mt-1 border border-slate-700 max-w-[120px] truncate whitespace-nowrap ${
              isNicaragua ? 'text-amber-300 border-amber-500/80 ring-1 ring-amber-400/40' : ''
            }">
              ${volcano.name.replace('Volcán ', '').replace('Monte ', '')}
            </div>
          </div>
        `;

        const icon = L.divIcon({
          html: customVolcanoHtml,
          className: 'custom-volcano-marker',
          iconSize: [120, 52],
          iconAnchor: [60, 20]
        });

        const marker = L.marker([volcano.lat, volcano.lng], { icon });

        marker.bindTooltip(
          `<div class="text-xs font-black text-slate-900 flex items-center gap-1.5">
             <span>🌋</span>
             <span>${volcano.name}</span>
             <span class="text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
               isActive ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-800'
             }">${volcano.status}</span>
           </div>
           <div class="text-[10px] text-amber-800 font-semibold mt-0.5">
             Altitud: <strong>${volcano.elevation}</strong> • ${volcano.country}
           </div>
           <div class="text-[10px] text-slate-600">${volcano.volcanicArc}</div>
           <div class="text-[10px] text-emerald-800 font-semibold mt-1">💡 Clic para abrir ficha completa de este volcán</div>`,
          { direction: 'top', offset: [0, -18], opacity: 0.95 }
        );

        marker.on('click', () => {
          if (onSelectVolcano) {
            onSelectVolcano(volcano);
          }
        });

        marker.addTo(layerGroup);
      });
    }

    // F. COUNTRY BADGES / EXPLORATION NODES
    COUNTRIES_GEOGRAPHY.forEach((country) => {
      const isNicaragua = country.id === 'nicaragua';

      const customCountryHtml = `
        <div class="group cursor-pointer flex items-center gap-1 px-2 py-0.5 rounded-full shadow-lg border backdrop-blur-md transition-all group-hover:scale-115 ${
          isNicaragua
            ? 'bg-amber-950/85 border-amber-400 text-amber-200 ring-2 ring-amber-400/30'
            : 'bg-slate-950/75 border-slate-700 text-white hover:bg-emerald-950/90 hover:border-emerald-400'
        }">
          <span class="text-sm leading-none">${country.flag}</span>
          <span class="text-[10px] font-bold tracking-tight">${country.name}</span>
          ${isNicaragua ? '<span class="text-[7px] bg-amber-500 text-slate-950 font-black px-1 rounded-xs uppercase">Sede</span>' : ''}
        </div>
      `;

      const icon = L.divIcon({
        html: customCountryHtml,
        className: 'custom-country-badge',
        iconSize: [120, 26],
        iconAnchor: [60, 13]
      });

      const marker = L.marker([country.lat, country.lng], { icon });

      marker.bindTooltip(
        `<div class="text-xs font-black text-slate-900 flex items-center gap-1.5">
           <span>${country.flag}</span>
           <span>${country.name} (${country.code})</span>
         </div>
         <div class="text-[10px] text-amber-800 font-semibold mt-0.5">
           🏔️ Cota Máxima: ${country.highestPeak}
         </div>
         <div class="text-[10px] text-emerald-800 font-medium">
           🌤️ Climas: ${country.climateTypes.slice(0, 2).join(', ')}...
         </div>
         <div class="text-[10px] text-blue-700 font-bold mt-1">
           👉 Clic para abrir ficha completa de Relieve y Clima
         </div>`,
        { direction: 'top', offset: [0, -14], opacity: 0.95 }
      );

      marker.on('click', () => {
        if (onSelectCountry) {
          onSelectCountry(country);
        }
      });

      marker.addTo(layerGroup);
    });
  }, [activeLayers, interactiveMode, currentChallengeIndex]);

  const activeChallenge = MAP_CHALLENGES[currentChallengeIndex];

  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleReset = () => {
    setSelectedRegion('all');
    const { center, zoom } = getRegionCoordinates('all');
    mapInstanceRef.current?.flyTo(center, zoom);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`relative bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden select-none transition-all ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'h-[620px] sm:h-[700px] lg:h-[780px]'
      }`}
    >
      {/* Challenge Bar if Challenge Mode active */}
      {interactiveMode === 'challenge' && (
        <div className="absolute top-4 left-4 right-16 z-30 bg-slate-950/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Desafío Real {currentChallengeIndex + 1} de {MAP_CHALLENGES.length}
              </span>
              <span className="text-emerald-400 font-mono text-xs font-semibold">
                Puntaje: {challengeScore} pts
              </span>
            </div>
            <p className="text-white font-bold text-xs sm:text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse shrink-0" />
              <span>{activeChallenge.prompt}</span>
            </p>
            {challengeFeedback.status && (
              <p
                className={`text-xs font-medium flex items-center gap-1.5 ${
                  challengeFeedback.status === 'correct' ? 'text-emerald-300' : 'text-amber-300'
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

      {/* Floating Base Map Type Switcher */}
      <div className="absolute top-4 right-4 z-30 flex flex-col gap-1.5 bg-slate-950/85 backdrop-blur-md p-1.5 rounded-2xl border border-slate-700/60 shadow-xl">
        <button
          onClick={handleZoomIn}
          title="Acercar"
          className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white flex items-center justify-center transition cursor-pointer"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          title="Alejar"
          className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white flex items-center justify-center transition cursor-pointer"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleReset}
          title="Restablecer vista continental"
          className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-amber-600 text-slate-200 hover:text-white flex items-center justify-center transition cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Salir de pantalla completa' : 'Ver a pantalla completa'}
          className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white flex items-center justify-center transition cursor-pointer"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Real Map Base Layer Switcher (Top Left) */}
      <div className="absolute bottom-4 left-4 z-30 hidden sm:flex items-center gap-1 bg-slate-950/85 backdrop-blur-md p-1 rounded-2xl border border-slate-700/60 shadow-xl text-xs">
        <span className="text-[11px] font-bold text-slate-400 px-2 py-1 flex items-center gap-1">
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          <span>Mapa Base:</span>
        </span>
        <button
          onClick={() => setBaseMap('physical')}
          className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition cursor-pointer ${
            baseMap === 'physical'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          Relieve Físico
        </button>
        <button
          onClick={() => setBaseMap('satellite')}
          className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition cursor-pointer ${
            baseMap === 'satellite'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          Satélite Real
        </button>
        <button
          onClick={() => setBaseMap('topographic')}
          className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition cursor-pointer ${
            baseMap === 'topographic'
              ? 'bg-cyan-600 text-white shadow-xs'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          Topográfico
        </button>
        <button
          onClick={() => setBaseMap('streets')}
          className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition cursor-pointer ${
            baseMap === 'streets'
              ? 'bg-slate-700 text-white shadow-xs'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          Cartográfico
        </button>
      </div>

      {/* Real-time Geographic Coordinate HUD (Bottom Right) */}
      <div className="absolute bottom-4 right-4 z-30 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 text-[11px] font-mono text-slate-300 shadow-xl flex items-center gap-3">
        <div className="flex items-center gap-1 text-emerald-400">
          <Navigation2 className="w-3 h-3 animate-pulse" />
          <span>
            {mouseCoords
              ? `${mouseCoords.lat >= 0 ? `${mouseCoords.lat}°N` : `${Math.abs(mouseCoords.lat)}°S`}, ${
                  mouseCoords.lng >= 0 ? `${mouseCoords.lng}°E` : `${Math.abs(mouseCoords.lng)}°W`
                }`
              : 'Pasa el cursor por el mapa'}
          </span>
        </div>
        <span className="text-slate-500">|</span>
        <span className="text-slate-400">Zoom: {currentZoom}x</span>
      </div>

      {/* Leaflet Map DOM Node */}
      <div ref={mapContainerRef} className="w-full h-full" style={{ background: '#0b1329' }} />
    </div>
  );
};
