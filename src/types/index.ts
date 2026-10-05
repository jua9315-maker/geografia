export type TabType = 'map' | 'profile' | 'quizzes' | 'teacher' | 'pedagogy';

export type MapLayer = 'relief' | 'climate' | 'hydrography' | 'currents' | 'volcanoes';
export type AmericaRegion = 'all' | 'north' | 'central' | 'south';
export type BaseMapType = 'physical' | 'satellite' | 'topographic' | 'streets';

export interface VolcanoItem {
  id: string;
  name: string;
  country: string;
  region: 'Norte' | 'Centro' | 'Sur';
  elevation: string;
  elevationMeters: number;
  status: 'Activo' | 'Latente' | 'Extinto';
  lastEruption?: string;
  lat: number;
  lng: number;
  volcanicArc: 'Arco Volcánico Centroamericano (CAAV)' | 'Eje Neovolcánico Transversal' | 'Arco de las Cascadas' | 'Zona Volcánica de los Andes';
  description: string;
  climateInfluence: string;
}

export interface CountryGeography {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: 'Norte' | 'Centro' | 'Sur' | 'Caribe';
  capital: string;
  lat: number;
  lng: number;
  zoom: number;
  highestPeak: string;
  mainReliefForms: string[];
  reliefDescription: string;
  climateTypes: string[];
  climateDescription: string;
  rainfallAndTemp: string;
  mainVolcanoesOrRanges: string[];
  mainRiversAndLakes: string[];
  pedagogicalHighlight: string;
}

export interface ReliefFeature {
  id: string;
  name: string;
  type: 'cordillera' | 'meseta' | 'llanura' | 'escudo' | 'volcan';
  region: 'Norte' | 'Centro' | 'Sur';
  maxElevation: string;
  formationAge: 'Cenozoico (Joven)' | 'Mesozoico' | 'Paleozoico' | 'Precámbrico (Antiguo)';
  description: string;
  climateInfluence: string;
  keyPoints: string[];
  lat: number;
  lng: number;
  zoomLevel?: number;
  areaPolygon?: [number, number][];
  cx: number;
  cy: number;
  pathOrShape?: string;
  color: string;
}

export interface ClimateZone {
  id: string;
  name: string;
  category: 'Cálido' | 'Templado' | 'Frío' | 'Árido/Seco';
  subtypes: string;
  characteristics: string;
  temperatureRange: string;
  rainfall: string;
  typicalFloraFauna: string;
  geographicLocations: string[];
  reliefRelation: string;
  color: string;
  realPolygons?: [number, number][][];
  svgRegions: {
    name: string;
    path: string;
  }[];
}

export interface OceanCurrent {
  id: string;
  name: string;
  temperature: 'Cálida' | 'Fría';
  pathDescription: string;
  climateImpact: string;
  centerLat?: number;
  centerLng?: number;
  realPath?: [number, number][];
  coordinates: { x: number; y: number; labelX: number; labelY: number; path: string };
}

export interface RiverSystem {
  id: string;
  name: string;
  length: string;
  basinArea: string;
  region: string;
  realCoordinates?: [number, number][];
  path: string;
  labelCoords: { x: number; y: number };
  importance: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'Relieve' | 'Clima' | 'Relación Relieve-Clima' | 'Localización';
  difficulty: 'Fácil' | 'Media' | 'Avanzada';
  mapTargetId?: string;
}

export interface DiagnosticResult {
  score: number;
  total: number;
  percentage: number;
  level: 'Nivel Inicial' | 'Nivel Básico' | 'Nivel Competente';
  diagnosedDifficulties: string[];
  recommendedActivities: string[];
}

export interface TeacherResourceItem {
  id: string;
  title: string;
  category: 'Planificación' | 'Rúbrica' | 'Ficha de Aula' | 'Mapa Mudo' | 'Banco de Ítems';
  targetGrade: string;
  duration?: string;
  description: string;
  content: string;
  downloadFilename: string;
  iconName: string;
}
