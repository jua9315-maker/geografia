import React, { useState } from 'react';
import {
  TabType,
  MapLayer,
  AmericaRegion,
  BaseMapType,
  ReliefFeature,
  ClimateZone,
  OceanCurrent,
  RiverSystem,
  VolcanoItem,
  CountryGeography
} from './types';
import { Header } from './components/Header';
import { MapControls } from './components/InteractiveMap/MapControls';
import { RealLeafletMap } from './components/InteractiveMap/RealLeafletMap';
import { CountryExplorerBar } from './components/InteractiveMap/CountryExplorerBar';
import { CountryGeographyModal } from './components/InteractiveMap/CountryGeographyModal';
import { VolcanoDetailModal } from './components/InteractiveMap/VolcanoDetailModal';
import { MapFeatureModal } from './components/InteractiveMap/MapFeatureModal';
import { TopographicProfile } from './components/TopographicProfile/TopographicProfile';
import { QuizContainer } from './components/Quizzes/QuizContainer';
import { TeacherResourcesView } from './components/TeacherResources/TeacherResourcesView';
import { PedagogicalDashboard } from './components/PedagogicalDashboard/PedagogicalDashboard';
import { ProjectOverviewModal } from './components/ProjectOverviewModal';
import { Mountain, CloudSun, Compass, Flame, School } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('map');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  // Map state
  const [activeLayers, setActiveLayers] = useState<Record<MapLayer, boolean>>({
    relief: true,
    climate: true,
    hydrography: true,
    currents: true,
    volcanoes: true
  });
  const [selectedRegion, setSelectedRegion] = useState<AmericaRegion>('all');
  const [interactiveMode, setInteractiveMode] = useState<'explore' | 'challenge'>('explore');
  const [baseMap, setBaseMap] = useState<BaseMapType>('physical');
  const [targetFocus, setTargetFocus] = useState<{
    lat: number;
    lng: number;
    zoom: number;
    timestamp: number;
  } | null>(null);

  // Selected feature modal
  const [selectedFeature, setSelectedFeature] = useState<
    ReliefFeature | ClimateZone | OceanCurrent | RiverSystem | null
  >(null);
  const [selectedFeatureType, setSelectedFeatureType] = useState<
    'relief' | 'climate' | 'current' | 'river' | null
  >(null);

  // Selected Country and Volcano modals
  const [selectedCountry, setSelectedCountry] = useState<CountryGeography | null>(null);
  const [selectedVolcano, setSelectedVolcano] = useState<VolcanoItem | null>(null);

  const toggleLayer = (layer: MapLayer) => {
    setActiveLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  const handleSelectFeature = (
    feature: ReliefFeature | ClimateZone | OceanCurrent | RiverSystem,
    type: 'relief' | 'climate' | 'current' | 'river'
  ) => {
    setSelectedFeature(feature);
    setSelectedFeatureType(type);
  };

  const handleSelectCountry = (country: CountryGeography) => {
    setSelectedCountry(country);
    setTargetFocus({
      lat: country.lat,
      lng: country.lng,
      zoom: country.zoom,
      timestamp: Date.now()
    });
  };

  const handleSelectVolcano = (volcano: VolcanoItem) => {
    setSelectedVolcano(volcano);
    setTargetFocus({
      lat: volcano.lat,
      lng: volcano.lng,
      zoom: 8.5,
      timestamp: Date.now()
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/70 text-slate-800">
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenInstitutionalModal={() => setIsProjectModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Tab 1: Interactive Maps */}
        {activeTab === 'map' && (
          <div className="space-y-6">
            <MapControls
              activeLayers={activeLayers}
              toggleLayer={toggleLayer}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              interactiveMode={interactiveMode}
              setInteractiveMode={setInteractiveMode}
              selectedFeatureCount={5}
              baseMap={baseMap}
              setBaseMap={setBaseMap}
            />

            {/* Country Explorer: Relief & Climate by country */}
            <CountryExplorerBar
              onSelectCountry={handleSelectCountry}
              selectedCountryId={selectedCountry?.id}
            />

            {/* Real Map with Leaflet, satellite, relief, volcanoes, and countries */}
            <RealLeafletMap
              activeLayers={activeLayers}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              interactiveMode={interactiveMode}
              baseMap={baseMap}
              setBaseMap={setBaseMap}
              onSelectFeature={handleSelectFeature}
              onSelectVolcano={handleSelectVolcano}
              onSelectCountry={handleSelectCountry}
              targetFocus={targetFocus}
            />

            {/* Quick Educational Cards beneath the Map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
                  <Mountain className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Asimetría del Relieve
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Las cordilleras jóvenes y escarpadas (Andes, Rocosas) se ubican todas en el margen pacífico occidental, mientras los antiguos escudos desgastados ocupan el oriente atlántico.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm">
                  <Flame className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Cadena Volcánica Activa
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  El Cinturón de Fuego del Pacífico abarca el Arco Centroamericano (con los volcanes de Nicaragua), el Eje Neovolcánico y los Andes, fertilizando suelos con cenizas basálticas.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  <CloudSun className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Diversidad Climática
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  América se extiende de polo a polo, abarcando todas las zonas térmicas de la Tierra: fríos polares, templados continentales, cálidos ecuatoriales y pisos altitudinales.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-sm">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Corrientes Marinas
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  La Corriente de Humboldt (fría) enfría la costa chileno-peruana generando el desierto de Atacama, mientras la Corriente del Golfo (cálida) aporta humedad al Atlántico.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Topographic Profile Simulator */}
        {activeTab === 'profile' && <TopographicProfile />}

        {/* Tab 3: Dynamic Quizzes */}
        {activeTab === 'quizzes' && <QuizContainer />}

        {/* Tab 4: Teacher Resources */}
        {activeTab === 'teacher' && <TeacherResourcesView />}

        {/* Tab 5: Pedagogical Framework & Evaluation */}
        {activeTab === 'pedagogy' && <PedagogicalDashboard />}
      </main>

      {/* Country Detail Modal */}
      <CountryGeographyModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
        onFlyToCountry={(country) =>
          setTargetFocus({
            lat: country.lat,
            lng: country.lng,
            zoom: country.zoom,
            timestamp: Date.now()
          })
        }
        onSelectCountry={(country) => setSelectedCountry(country)}
      />

      {/* Volcano Detail Modal */}
      <VolcanoDetailModal
        volcano={selectedVolcano}
        onClose={() => setSelectedVolcano(null)}
        onFlyToVolcano={(volcano) =>
          setTargetFocus({
            lat: volcano.lat,
            lng: volcano.lng,
            zoom: 9,
            timestamp: Date.now()
          })
        }
      />

      {/* General Feature Details Modal */}
      <MapFeatureModal
        feature={selectedFeature}
        type={selectedFeatureType}
        onClose={() => {
          setSelectedFeature(null);
          setSelectedFeatureType(null);
        }}
      />

      {/* Project Institutional Modal */}
      <ProjectOverviewModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />

      {/* Institutional Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 no-print text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-sm">
              <School className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">
                Instituto Rosa Cerda Amador
              </p>
              <p className="text-slate-400 text-xs">
                Propuesta de Innovación Educativa • 8vo Grado &ldquo;A&rdquo; • II Semestre 2026
              </p>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-slate-300 font-medium">
              &ldquo;Uso de mapas interactivos para la comprensión del relieve y el clima de América&rdquo;
            </p>
            <p className="text-slate-400 text-[11px]">
              Garantizando una experiencia de aprendizaje significativa, interactiva y colaborativa
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
