import { VolcanoItem, CountryGeography } from '../types';

export const VOLCANOES_DATA: VolcanoItem[] = [
  // --- NICARAGUA (Contexto Instituto Rosa Cerda Amador) ---
  {
    id: 'volcan-san-cristobal',
    name: 'Volcán San Cristóbal',
    country: 'Nicaragua',
    region: 'Centro',
    elevation: '1,745 m',
    elevationMeters: 1745,
    status: 'Activo',
    lastEruption: '2024',
    lat: 12.702,
    lng: -87.004,
    volcanicArc: 'Arco Volcánico Centroamericano (CAAV)',
    description: 'El volcán más alto de Nicaragua, ubicado en Chinandega. Es un estrato-volcán casi cónico perfecto con constante emisión de gases y cenizas.',
    climateInfluence: 'Sus laderas fértiles frenan las brisas del Pacífico propiciando microclimas agrícolas de caña, maní y café en sus faldas.'
  },
  {
    id: 'volcan-cerro-negro',
    name: 'Volcán Cerro Negro',
    country: 'Nicaragua',
    region: 'Centro',
    elevation: '728 m',
    elevationMeters: 728,
    status: 'Activo',
    lastEruption: '1999',
    lat: 12.506,
    lng: -86.702,
    volcanicArc: 'Arco Volcánico Centroamericano (CAAV)',
    description: 'El volcán más joven de Centroamérica (nacido en 1850). Cono de escoria negra basáltica sin vegetación, famoso a nivel mundial por el volcano-boarding.',
    climateInfluence: 'Su superficie negra basáltica absorbe intensa radiación solar, generando una pequeña anomalía térmica local y aridez circundante.'
  },
  {
    id: 'volcan-momotombo',
    name: 'Volcán Momotombo',
    country: 'Nicaragua',
    region: 'Centro',
    elevation: '1,297 m',
    elevationMeters: 1297,
    status: 'Activo',
    lastEruption: '2015',
    lat: 12.422,
    lng: -86.540,
    volcanicArc: 'Arco Volcánico Centroamericano (CAAV)',
    description: 'Emblemático volcán a orillas del Lago Xolotlán (Managua). Su violenta erupción en 1610 obligó al traslado de la ciudad de León Viejo.',
    climateInfluence: 'Modula la brisa lacustre del lago de Managua y alberga una de las principales plantas de energía geotérmica del país.'
  },
  {
    id: 'volcan-masaya',
    name: 'Volcán Masaya (Popogatepe)',
    country: 'Nicaragua',
    region: 'Centro',
    elevation: '635 m',
    elevationMeters: 635,
    status: 'Activo',
    lastEruption: '2024',
    lat: 11.984,
    lng: -86.161,
    volcanicArc: 'Arco Volcánico Centroamericano (CAAV)',
    description: 'Gran caldera volcánica con lago de lava incandescente en el cráter Santiago. Conocido como "La Boca del Infierno" por los colonizadores españoles.',
    climateInfluence: 'La emisión continua de dióxido de azufre (lluvia ácida volcánica) genera el área árida conocida como "El Llano del Pacaya" a sotavento.'
  },
  {
    id: 'volcan-concepcion',
    name: 'Volcán Concepción',
    country: 'Nicaragua',
    region: 'Centro',
    elevation: '1,610 m',
    elevationMeters: 1610,
    status: 'Activo',
    lastEruption: '2024',
    lat: 11.538,
    lng: -85.622,
    volcanicArc: 'Arco Volcánico Centroamericano (CAAV)',
    description: 'Majestuoso estrato-volcán simétrico que forma la mitad norte de la Isla de Ometepe en el Gran Lago de Nicaragua (Cocibolca).',
    climateInfluence: 'Crea un microclima insular húmedo y nuboso en su cima mientras sus faldas se benefician de la humedad evaporada del lago.'
  },

  // --- RESTO DE CENTROAMÉRICA ---
  {
    id: 'volcan-tajumulco',
    name: 'Volcán Tajumulco',
    country: 'Guatemala',
    region: 'Centro',
    elevation: '4,220 m',
    elevationMeters: 4220,
    status: 'Latente',
    lat: 15.045,
    lng: -91.904,
    volcanicArc: 'Arco Volcánico Centroamericano (CAAV)',
    description: 'El punto más alto de toda América Central. Ubicado en el departamento de San Marcos, suele presentar escarcha y nevadas ocasionales en invierno.',
    climateInfluence: 'Genera clima frío de alta montaña en pleno istmo centroamericano, con temperaturas bajo cero en su cumbre.'
  },
  {
    id: 'volcan-fuego-guatemala',
    name: 'Volcán de Fuego',
    country: 'Guatemala',
    region: 'Centro',
    elevation: '3,763 m',
    elevationMeters: 3763,
    status: 'Activo',
    lastEruption: '2024',
    lat: 14.473,
    lng: -90.880,
    volcanicArc: 'Arco Volcánico Centroamericano (CAAV)',
    description: 'Uno de los volcanes más activos del mundo, célebre por sus constantes explosiones estrombolianas y flujos piroclásticos cerca de Antigua Guatemala.',
    climateInfluence: 'Sus columnas de ceniza dispersan partículas que bloquean temporalmente la radiación solar y acidifican las precipitaciones en la costa sur.'
  },
  {
    id: 'volcan-santa-ana',
    name: 'Volcán de Santa Ana (Ilamatepec)',
    country: 'El Salvador',
    region: 'Centro',
    elevation: '2,381 m',
    elevationMeters: 2381,
    status: 'Activo',
    lastEruption: '2005',
    lat: 13.853,
    lng: -89.630,
    volcanicArc: 'Arco Volcánico Centroamericano (CAAV)',
    description: 'El volcán más alto de El Salvador, con una laguna de agua verde esmeralda ácida en su cráter principal.',
    climateInfluence: 'Favorece el piso térmico templado donde se cultiva el café de altura de la cordillera de Apaneca-Ilamatepec.'
  },
  {
    id: 'volcan-arenal',
    name: 'Volcán Arenal',
    country: 'Costa Rica',
    region: 'Centro',
    elevation: '1,670 m',
    elevationMeters: 1670,
    status: 'Latente',
    lastEruption: '2010',
    lat: 10.463,
    lng: -84.703,
    volcanicArc: 'Arco Volcánico Centroamericano (CAAV)',
    description: 'Cono volcánico icónico de Costa Rica rodeado de selva tropical lluviosa y aguas termales en la provincia de Alajuela.',
    climateInfluence: 'Barrera orográfica que condensa la humedad del mar Caribe originando el denso bosque nuboso lluvioso de Monteverde y Arenal.'
  },
  {
    id: 'volcan-baru',
    name: 'Volcán Barú',
    country: 'Panamá',
    region: 'Centro',
    elevation: '3,475 m',
    elevationMeters: 3475,
    status: 'Latente',
    lat: 8.808,
    lng: -82.542,
    volcanicArc: 'Arco Volcánico Centroamericano (CAAV)',
    description: 'Punto más elevado de Panamá. Desde su cumbre en días despejados es posible avistar simultáneamente los dos océanos: Pacífico y Caribe.',
    climateInfluence: 'Alberga tierras altas frías donde se produce el afamado café Geisha de Boquete bajo el fenómeno de niebla orográfica "bajareque".'
  },

  // --- NORTEAMÉRICA Y MÉXICO ---
  {
    id: 'volcan-popocatepetl',
    name: 'Volcán Popocatépetl ("Don Goyo")',
    country: 'México',
    region: 'Norte',
    elevation: '5,426 m',
    elevationMeters: 5426,
    status: 'Activo',
    lastEruption: '2024',
    lat: 19.022,
    lng: -98.628,
    volcanicArc: 'Eje Neovolcánico Transversal',
    description: 'Segundo pico más alto de México, situado en el Eje Volcánico Transversal a solo 70 km de Ciudad de México. Monitoreado permanentemente por ceniza.',
    climateInfluence: 'Glaciares de cumbre en retroceso y marcado piso altitudinal frío y de zacatonales alpinos.'
  },
  {
    id: 'pico-de-orizaba',
    name: 'Pico de Orizaba (Citlaltépetl)',
    country: 'México',
    region: 'Norte',
    elevation: '5,636 m',
    elevationMeters: 5636,
    status: 'Latente',
    lat: 19.030,
    lng: -97.269,
    volcanicArc: 'Eje Neovolcánico Transversal',
    description: 'El volcán más alto de Norteamérica y tercera cumbre del continente. Estratovolcán coronado por el Glaciar de Jamapa.',
    climateInfluence: 'Frena los vientos húmedos del Golfo de México, generando selva en barlovento y semidesierto en el altiplano de Puebla a sotavento.'
  },
  {
    id: 'monte-santa-helena',
    name: 'Monte Santa Helena (Mount St. Helens)',
    country: 'Estados Unidos',
    region: 'Norte',
    elevation: '2,549 m',
    elevationMeters: 2549,
    status: 'Activo',
    lastEruption: '2008',
    lat: 46.191,
    lng: -122.196,
    volcanicArc: 'Arco de las Cascadas',
    description: 'Famoso por su catastrófica erupción lateral y colapso de ladera el 18 de mayo de 1980 en el estado de Washington.',
    climateInfluence: 'Clima templado oceánico frío con abundantes nevadas invernales que alimentan el glaciar Crater.'
  },
  {
    id: 'monte-rainier',
    name: 'Monte Rainier',
    country: 'Estados Unidos',
    region: 'Norte',
    elevation: '4,392 m',
    elevationMeters: 4392,
    status: 'Activo',
    lat: 46.852,
    lng: -121.760,
    volcanicArc: 'Arco de las Cascadas',
    description: 'El volcán más prominente de las Cascadas y el más cubierto de glaciares de los 48 estados contiguos de EE.UU. Domina el horizonte de Seattle.',
    climateInfluence: 'Captura masas de aire marítimo polar provocando precipitaciones que superan los 3,000 mm anuales en forma de nieve.'
  },

  // --- SUDAMÉRICA (ANDES) ---
  {
    id: 'volcan-cotopaxi',
    name: 'Volcán Cotopaxi',
    country: 'Ecuador',
    region: 'Sur',
    elevation: '5,897 m',
    elevationMeters: 5897,
    status: 'Activo',
    lastEruption: '2023',
    lat: -0.683,
    lng: -78.436,
    volcanicArc: 'Zona Volcánica de los Andes',
    description: 'Uno de los volcanes activos más altos y bellos del mundo, con una silueta simétrica cubierta de nieves eternas en la "Avenida de los Volcanes".',
    climateInfluence: 'Glaciar ecuatorial que actúa como fuente de agua dulce para la cuenca alta andina y el páramo circundante.'
  },
  {
    id: 'volcan-chimborazo',
    name: 'Volcán Chimborazo',
    country: 'Ecuador',
    region: 'Sur',
    elevation: '6,263 m',
    elevationMeters: 6263,
    status: 'Extinto',
    lat: -1.469,
    lng: -78.817,
    volcanicArc: 'Zona Volcánica de los Andes',
    description: 'Debido al abultamiento ecuatorial de la Tierra, su cumbre es el punto más cercano de la superficie terrestre al Sol y el más alejado del centro de la Tierra.',
    climateInfluence: 'Páramo andino y casquete glaciar donde habitan manadas protegidas de vicuñas silvestres.'
  },
  {
    id: 'nevado-del-ruiz',
    name: 'Nevado del Ruiz',
    country: 'Colombia',
    region: 'Sur',
    elevation: '5,321 m',
    elevationMeters: 5321,
    status: 'Activo',
    lastEruption: '2024',
    lat: 4.892,
    lng: -75.324,
    volcanicArc: 'Zona Volcánica de los Andes',
    description: 'Volcán nevado en la Cordillera Central de Colombia, recordado por la tragedia de Armero en 1985 originada por el deshielo de su casquete glaciar.',
    climateInfluence: 'Modela los pisos térmicos del Eje Cafetero colombiano y abastece los ríos Chinchiná y Gualí.'
  },
  {
    id: 'volcan-misti',
    name: 'Volcán Misti',
    country: 'Perú',
    region: 'Sur',
    elevation: '5,822 m',
    elevationMeters: 5822,
    status: 'Latente',
    lat: -16.294,
    lng: -71.408,
    volcanicArc: 'Zona Volcánica de los Andes',
    description: 'Tutelando la ciudad de Arequipa (la "Ciudad Blanca"), construida con roca volcánica de sillar blanco arrojada por sus antiguas erupciones.',
    climateInfluence: 'Transición entre el desierto costero peruano y el clima seco y frío de puna andina.'
  },
  {
    id: 'ojos-del-salado',
    name: 'Nevado Ojos del Salado',
    country: 'Chile / Argentina',
    region: 'Sur',
    elevation: '6,893 m',
    elevationMeters: 6893,
    status: 'Activo',
    lat: -27.109,
    lng: -68.541,
    volcanicArc: 'Zona Volcánica de los Andes',
    description: 'El volcán activo más alto de todo el planeta Tierra y la segunda cumbre más elevada de América después del Aconcagua.',
    climateInfluence: 'Ubicado en la Puna de Atacama, presenta un clima de extrema aridez y bajísimas temperaturas con escasa acumulación de nieve.'
  },
  {
    id: 'volcan-villarrica',
    name: 'Volcán Villarrica (Rukapillán)',
    country: 'Chile',
    region: 'Sur',
    elevation: '2,847 m',
    elevationMeters: 2847,
    status: 'Activo',
    lastEruption: '2024',
    lat: -39.420,
    lng: -71.939,
    volcanicArc: 'Zona Volcánica de los Andes',
    description: 'Uno de los volcanes más activos de Sudamérica, con un lago de lava permanente en su cráter abierto y un cono completamente cubierto de glaciares.',
    climateInfluence: 'Rodeado de bosques templados lluviosos araucanos y lagos glaciares del sur chileno.'
  }
];

// Cadena Volcánica: Líneas que trazan el Cinturón de Fuego del Pacífico en América
export const VOLCANIC_ARC_LINES: { name: string; path: [number, number][] }[] = [
  {
    name: 'Arco de las Cascadas (Norteamérica)',
    path: [
      [50.0, -123.0],
      [48.8, -121.9],
      [46.85, -121.76],
      [46.19, -122.2],
      [45.37, -121.7],
      [44.0, -121.7],
      [41.4, -122.2],
      [40.5, -121.5]
    ]
  },
  {
    name: 'Eje Neovolcánico Transversal (México)',
    path: [
      [19.5, -104.5],
      [19.4, -103.6],
      [19.5, -102.2],
      [19.0, -99.8],
      [19.02, -98.63],
      [19.03, -97.27],
      [18.5, -95.0]
    ]
  },
  {
    name: 'Arco Volcánico Centroamericano (CAAV - Cinturón de Fuego)',
    path: [
      [15.05, -91.9],
      [14.47, -90.88],
      [13.85, -89.63],
      [13.4, -88.3],
      [12.7, -87.0],
      [12.5, -86.7],
      [12.42, -86.54],
      [11.98, -86.16],
      [11.54, -85.62],
      [10.8, -85.3],
      [10.46, -84.7],
      [10.0, -84.0],
      [8.8, -82.54]
    ]
  },
  {
    name: 'Zona Volcánica de los Andes (Norte a Sur)',
    path: [
      [4.89, -75.32],
      [1.2, -77.3],
      [-0.68, -78.44],
      [-1.47, -78.82],
      [-9.0, -77.5],
      [-16.29, -71.4],
      [-18.5, -69.0],
      [-23.0, -67.8],
      [-27.1, -68.54],
      [-33.0, -70.0],
      [-39.42, -71.94],
      [-42.0, -72.5],
      [-50.0, -73.5]
    ]
  }
];

// =========================================================================
// GEOGRAFÍA POR PAÍSES DE AMÉRICA: RELIEVES Y CLIMAS ESPECÍFICOS
// =========================================================================

export const COUNTRIES_GEOGRAPHY: CountryGeography[] = [
  // --- NICARAGUA ---
  {
    id: 'nicaragua',
    name: 'Nicaragua',
    code: 'NIC',
    flag: '🇳🇮',
    region: 'Centro',
    capital: 'Managua',
    lat: 12.8654,
    lng: -85.2072,
    zoom: 7,
    highestPeak: 'Cerro Mogotón (2,107 m en la Cordillera de Dipilto)',
    mainReliefForms: [
      'Cadena Volcánica del Pacífico (Cordillera de los Maribios)',
      'Depresión o Graben de los Lagos (Lago Cocibolca y Lago Xolotlán)',
      'Tierras Altas del Interior (Cordillera Isabelia, Dariense y Chontaleña)',
      'Gran Llanura Costera del Caribe (Mosquitia)'
    ],
    reliefDescription: 'Presenta tres grandes regiones geomorfológicas: la planicie del Pacífico dominada por la imponente cadena volcánica activa y los grandes lagos; la región central montañosa de origen volcánico antiguo y metamórfico (con serranías y mesetas); y las extensas llanuras bajas sedimentarias del Caribe.',
    climateTypes: [
      'Tropical con estación seca (Sabana de verano) en el Pacífico',
      'Tropical húmedo de selva en el Caribe (lluvias todo el año)',
      'Templado de montaña en tierras altas del norte (Matagalpa, Jinotega y Nueva Segovia)'
    ],
    climateDescription: 'El relieve divide el clima: los vientos alisios del noreste descargan hasta 4,000 mm anuales en el Caribe (San Juan del Norte), mientras el Pacífico goza de una estación seca bien marcada (noviembre a abril) con temperaturas de 27°C a 34°C. En el norte montañoso las temperaturas descienden a 16°C-22°C.',
    rainfallAndTemp: 'Caribe: 3,000 - 4,500 mm/año | Pacífico: 1,200 - 1,800 mm/año | Temperatura promedio: 26°C a 32°C (18°C en montañas)',
    mainVolcanoesOrRanges: ['Volcán San Cristóbal (1,745 m)', 'Momotombo', 'Cerro Negro', 'Masaya', 'Concepción', 'Cordillera Isabelia'],
    mainRiversAndLakes: ['Río Coco o Wangki (566 km)', 'Río San Juan', 'Río Grande de Matagalpa', 'Lago Cocibolca (8,264 km²)', 'Lago Xolotlán'],
    pedagogicalHighlight: 'Contexto clave para el Instituto Rosa Cerda Amador: demuestra cómo la cadena volcánica fertiliza los suelos del Pacífico y cómo el relieve central provoca que el Caribe sea lluvioso y el Pacífico seco.'
  },

  // --- GUATEMALA ---
  {
    id: 'guatemala',
    name: 'Guatemala',
    code: 'GTM',
    flag: '🇬🇹',
    region: 'Centro',
    capital: 'Ciudad de Guatemala',
    lat: 15.7835,
    lng: -90.2308,
    zoom: 7,
    highestPeak: 'Volcán Tajumulco (4,220 m)',
    mainReliefForms: [
      'Sierra de los Cuchumatanes (macizo no volcánico más alto de Centroamérica)',
      'Sierra Madre y Cadena Volcánica del Sur',
      'Llanura kárstica de las Tierras Bajas de El Petén',
      'Planicie Costera del Pacífico'
    ],
    reliefDescription: 'Eje montañoso este-oeste muy accidentado con más de 30 volcanes en su vertiente sur, altas mesetas kársticas y la gran selva plana del Petén al norte.',
    climateTypes: [
      'Cálido tropical húmedo en Petén e Izabal',
      'Templado de montaña en el Altiplano central ("Tierra de la Eterna Primavera")',
      'Frío de altitud en los Cuchumatanes'
    ],
    climateDescription: 'Marcado escalonamiento térmico: caluroso y húmedo en costas y Petén; primaveral y templado en la capital y Quetzaltenango; y frío con heladas en las cumbres montañosas.',
    rainfallAndTemp: '1,500 a 3,500 mm anuales | Temperatura: 12°C a 32°C según el piso altitudinal',
    mainVolcanoesOrRanges: ['Tajumulco', 'Volcán de Fuego', 'Volcán de Pacaya', 'Sierra de los Cuchumatanes'],
    mainRiversAndLakes: ['Río Motagua', 'Río Usumacinta', 'Lago de Atitlán', 'Lago de Izabal'],
    pedagogicalHighlight: 'Ejemplo representativo de pisos térmicos y vulcanismo de subducción en Centroamérica.'
  },

  // --- HONDURAS ---
  {
    id: 'honduras',
    name: 'Honduras',
    code: 'HND',
    flag: '🇭🇳',
    region: 'Centro',
    capital: 'Tegucigalpa',
    lat: 15.2,
    lng: -86.24,
    zoom: 7,
    highestPeak: 'Cerro Las Minas / Celaque (2,870 m)',
    mainReliefForms: [
      'Macizo Central Hondureño (80% del territorio es montañoso)',
      'Valle de Sula y Llanuras del Norte caribeño',
      'Llanura de la Mosquitia oriental',
      'Golfo de Fonseca en el Pacífico'
    ],
    reliefDescription: 'El país más montañoso de América Central; no posee volcanes activos pero sí abundantes serranías, mesetas y valles intramontanos.',
    climateTypes: ['Tropical húmedo en la costa caribeña', 'Templado y seco en valles interiores', 'Subtropical de altura'],
    climateDescription: 'El litoral caribeño recibe vientos alisios cargados de humedad con lluvias abundantes gran parte del año, mientras Tegucigalpa goza de clima templado de montaña.',
    rainfallAndTemp: '1,000 a 3,200 mm | Temp media: 20°C en valles altos, 31°C en costas',
    mainVolcanoesOrRanges: ['Montaña de Celaque', 'Sierra de Omoa', 'Cordillera de Nombre de Dios'],
    mainRiversAndLakes: ['Río Patuca', 'Río Ulúa', 'Río Chamelecón', 'Lago de Yojoa'],
    pedagogicalHighlight: 'Muestra cómo un país predominantemente montañoso carece de volcanes activos pero posee ricas cuencas fluviales.'
  },

  // --- EL SALVADOR ---
  {
    id: 'el-salvador',
    name: 'El Salvador',
    code: 'SLV',
    flag: '🇸🇻',
    region: 'Centro',
    capital: 'San Salvador',
    lat: 13.7942,
    lng: -88.8965,
    zoom: 8,
    highestPeak: 'Cerro El Pital (2,730 m en la frontera con Honduras)',
    mainReliefForms: [
      'Cadena Costera y Cordillera Volcánica Central',
      'Meseta Central y Valle del Lempa',
      'Sierra Madre del Norte'
    ],
    reliefDescription: 'Conocido como la "Tierra de los Volcanes", es el único país centroamericano sin costa en el mar Caribe. Su geografía está modelada por calderas y conos volcánicos.',
    climateTypes: ['Cálido tropical con estación seca', 'Templado de montaña en el norte'],
    climateDescription: 'Clima tropical cálido con dos estaciones bien definidas (época lluviosa o invierno de mayo a octubre, y época seca de noviembre a abril).',
    rainfallAndTemp: '1,400 a 2,200 mm | Temp media: 23°C a 30°C',
    mainVolcanoesOrRanges: ['Volcán Santa Ana', 'Volcán de San Salvador (Boquerón)', 'Izalco', 'San Vicente (Chinchontepec)'],
    mainRiversAndLakes: ['Río Lempa', 'Lago de Coatepeque', 'Lago de Ilopango'],
    pedagogicalHighlight: 'Estudio de caso de alta densidad poblacional sobre suelos volcánicos fértiles.'
  },

  // --- COSTA RICA ---
  {
    id: 'costa-rica',
    name: 'Costa Rica',
    code: 'CRI',
    flag: '🇨🇷',
    region: 'Centro',
    capital: 'San José',
    lat: 9.7489,
    lng: -83.7534,
    zoom: 7,
    highestPeak: 'Cerro Chirripó (3,820 m en la Cordillera de Talamanca)',
    mainReliefForms: [
      'Cordillera Volcánica de Guanacaste y Central',
      'Cordillera de Talamanca (origen tectónico no volcánico)',
      'Valle Central (Meseta Central)',
      'Llanuras del Caribe y del Tortuguero'
    ],
    reliefDescription: 'Espinazo montañoso central que divide el país entre la vertiente pacífica y la vertiente caribeña, con volcanes activos y cumbres glaciares fósiles.',
    climateTypes: ['Tropical húmedo del Caribe', 'Tropical seco en Guanacaste', 'Templado del Valle Central', 'Páramo en el Chirripó'],
    climateDescription: 'Enorme variedad de microclimas en un territorio compacto: selvas lluviosas caribeñas, sabanas secas pacíficas y páramos fríos.',
    rainfallAndTemp: '1,500 a 5,000 mm | Temp: 14°C en Talamanca a 32°C en costas',
    mainVolcanoesOrRanges: ['Arenal', 'Poás', 'Irazú', 'Cordillera de Talamanca'],
    mainRiversAndLakes: ['Río San Juan (fronterizo)', 'Río Reventazón', 'Río Tárcoles', 'Laguna Arenal'],
    pedagogicalHighlight: 'Puente biológico mundial que ilustra la biodiversidad condicionada por el relieve y dos océanos.'
  },

  // --- PANAMÁ ---
  {
    id: 'panama',
    name: 'Panamá',
    code: 'PAN',
    flag: '🇵🇦',
    region: 'Centro',
    capital: 'Ciudad de Panamá',
    lat: 8.5379,
    lng: -80.7821,
    zoom: 7,
    highestPeak: 'Volcán Barú (3,475 m)',
    mainReliefForms: [
      'Cordillera Central (Serranías de Tabasará)',
      'Depresión central del Canal de Panamá',
      'Serranías del Darién en el este',
      'Arco Seco en la Península de Azuero'
    ],
    reliefDescription: 'Istmo estrecho y sinuoso que une las dos Américas. Su parte central desciende a menos de 100 m de altitud, permitiendo la construcción del Canal de Panamá.',
    climateTypes: ['Tropical muy húmedo en el Caribe y Darién', 'Tropical de sabana en el Pacífico', 'Templado en Boquete'],
    climateDescription: 'Clima cálido ecuatorial y tropical donde las lluvias son torrenciales en la vertiente caribeña, alimentando las cuencas que operan el Canal.',
    rainfallAndTemp: '1,200 mm (Arco Seco) a 4,000 mm (Caribe) | Temp media: 27°C',
    mainVolcanoesOrRanges: ['Volcán Barú', 'Serranía del Darién', 'Cordillera Central'],
    mainRiversAndLakes: ['Río Chagres', 'Río Tuira', 'Lago Gatún (clave para el Canal)'],
    pedagogicalHighlight: 'Importancia geopolítica del istmo y el ciclo hidrológico del Río Chagres para el comercio mundial.'
  },

  // --- MÉXICO ---
  {
    id: 'mexico',
    name: 'México',
    code: 'MEX',
    flag: '🇲🇽',
    region: 'Norte',
    capital: 'Ciudad de México',
    lat: 23.6345,
    lng: -102.5528,
    zoom: 5,
    highestPeak: 'Pico de Orizaba o Citlaltépetl (5,636 m)',
    mainReliefForms: [
      'Sierra Madre Occidental y Sierra Madre Oriental',
      'Altiplanicie Mexicana (Mesa del Centro y del Norte)',
      'Eje Neovolcánico Transversal',
      'Península de Yucatán (plataforma kárstica plana con cenotes)',
      'Península de Baja California'
    ],
    reliefDescription: 'Relieve altamente montañoso que flanquea una gran meseta central elevada. El Eje Neovolcánico cruza de este a oeste con los volcanes más activos y altos del país.',
    climateTypes: [
      'Árido y semiárido en el norte (Desierto de Sonora y Chihuahua)',
      'Templado de montaña en el Altiplano Central',
      'Cálido subhúmedo en costas del Pacífico',
      'Cálido húmedo tropical en Veracruz, Tabasco y Chiapas'
    ],
    climateDescription: 'El Trópico de Cáncer divide al país en dos zonas térmicas (templada al norte y tropical al sur), pero la altitud del relieve modela climas templados frescos en las grandes urbes.',
    rainfallAndTemp: '100 mm en Sonora a 3,500 mm en Chiapas | Temp: 8°C a 38°C',
    mainVolcanoesOrRanges: ['Popocatépetl', 'Iztaccíhuatl', 'Pico de Orizaba', 'Paricutín', 'Sierra Madre del Sur'],
    mainRiversAndLakes: ['Río Bravo (Grande)', 'Río Balsas', 'Río Grijalva-Usumacinta', 'Lago de Chapala'],
    pedagogicalHighlight: 'Interacción entre latitud (Trópico de Cáncer), altitud de la meseta y sombra de lluvia de las Sierras Madres.'
  },

  // --- ESTADOS UNIDOS ---
  {
    id: 'estados-unidos',
    name: 'Estados Unidos',
    code: 'USA',
    flag: '🇺🇸',
    region: 'Norte',
    capital: 'Washington, D.C.',
    lat: 37.0902,
    lng: -95.7129,
    zoom: 4,
    highestPeak: 'Monte Denali / McKinley (6,190 m en Alaska) y Monte Whitney (4,421 m continental)',
    mainReliefForms: [
      'Montañas Rocosas (Rocallosas)',
      'Montes Apalaches en el este',
      'Grandes Llanuras Centrales y Cuenca del Misisipi',
      'Cordillera de las Cascadas y Sierra Nevada',
      'Meseta del Colorado (Gran Cañón)'
    ],
    reliefDescription: 'Estructura tripartita típica de Norteamérica: cordilleras jóvenes y escarpadas al oeste, inmensas llanuras sedimentarias fértiles al centro y cordilleras antiguas erosionadas al este.',
    climateTypes: [
      'Templado continental en el noreste y medio oeste',
      'Subtropical húmedo en el sureste',
      'Árido y desértico en el suroeste (Mojave, Gran Cuenca)',
      'Mediterráneo en California',
      'Oceánico lluvioso en el noroeste (Washington y Oregón)',
      'Polar y tundra en Alaska'
    ],
    climateDescription: 'La ausencia de cordilleras este-oeste permite que masas polares árticas colisionen con aire cálido del Golfo de México en las llanuras centrales, generando el "Callejón de los Tornados".',
    rainfallAndTemp: 'Menos de 100 mm en Death Valley a más de 3,000 mm en Cascade Range',
    mainVolcanoesOrRanges: ['Montañas Rocosas', 'Apalaches', 'Sierra Nevada', 'Monte Rainier', 'Monte Santa Helena'],
    mainRiversAndLakes: ['Río Misisipi-Misuri', 'Río Colorado', 'Río Columbia', 'Grandes Lagos (Superior, Hurón, Míchigan, Erie, Ontario)'],
    pedagogicalHighlight: 'Modelo clásico de la geografía física continental: orografía occidental vs llanuras centrales.'
  },

  // --- CANADÁ ---
  {
    id: 'canada',
    name: 'Canadá',
    code: 'CAN',
    flag: '🇨🇦',
    region: 'Norte',
    capital: 'Ottawa',
    lat: 56.1304,
    lng: -106.3468,
    zoom: 4,
    highestPeak: 'Monte Logan (5,959 m en los Montes San Elías, Yukón)',
    mainReliefForms: [
      'Escudo Canadiense o Laurentino (cubre más de la mitad del territorio)',
      'Montañas Rocosas Canadienses y Cadena Costera del Pacífico',
      'Archipiélago Ártico Canadiense',
      'Llanuras Interiores de las Praderas',
      'Tierras Bajas del Río San Lorenzo y Grandes Lagos'
    ],
    reliefDescription: 'Dominado por el milenario zócalo precámbrico erosionado por glaciares, salpicado por cientos de miles de lagos de agua dulce, con cadenas alpinas en el oeste.',
    climateTypes: [
      'Polar y de Tundra en el norte ártico (permafrost continuo)',
      'Subártico / Taiga de bosques boreales',
      'Templado continental en el sur poblado',
      'Templado marítimo en la costa de Columbia Británica'
    ],
    climateDescription: 'Inviernos largos y extremadamente gélidos que pueden descender de -40°C en el interior y norte, contrastando con el clima benigno y lluvioso de Vancouver.',
    rainfallAndTemp: '150 mm en el Ártico a 2,800 mm en la costa pacífica',
    mainVolcanoesOrRanges: ['Montañas Rocosas Canadienses', 'Montes Torngat', 'Cordillera Ártica'],
    mainRiversAndLakes: ['Río Mackenzie', 'Río San Lorenzo', 'Gran Lago del Oso', 'Gran Lago del Esclavo'],
    pedagogicalHighlight: 'Impacto del relieve precámbrico y la acción de los casquetes glaciares cuaternarios.'
  },

  // --- COLOMBIA ---
  {
    id: 'colombia',
    name: 'Colombia',
    code: 'COL',
    flag: '🇨🇴',
    region: 'Sur',
    capital: 'Bogotá',
    lat: 4.5709,
    lng: -74.2973,
    zoom: 6,
    highestPeak: 'Pico Cristóbal Colón y Pico Simón Bolívar (5,775 m en la Sierra Nevada de Santa Marta)',
    mainReliefForms: [
      'Cordilleras de los Andes: Occidental, Central y Oriental',
      'Sierra Nevada de Santa Marta (cordillera costera más alta del mundo)',
      'Llanos Orientales de la Cuenca del Orinoco',
      'Planicie Amazónica selvática',
      'Llanuras costeras del Caribe y del Pacífico (Chocó)'
    ],
    reliefDescription: 'Los Andes se dividen en tres cordilleras separadas por los fértiles valles del río Magdalena y Cauca. Cuenta además con la Sierra Nevada de Santa Marta a orillas del mar.',
    climateTypes: [
      'Cálido ecuatorial y tropical húmedo en la Amazonía y Chocó',
      'Pisos térmicos andinos: Templado, Frío, Páramo y Glaciar',
      'Árido en la Península de La Guajira'
    ],
    climateDescription: 'El Chocó biogeográfico es uno de los lugares más lluviosos de la Tierra (más de 10,000 mm anuales). Los pisos térmicos determinan la economía del café y la papa.',
    rainfallAndTemp: '300 mm en La Guajira a 12,000 mm en Lloró (Chocó)',
    mainVolcanoesOrRanges: ['Nevado del Ruiz', 'Nevado del Huila', 'Galeras', 'Sierra Nevada del Cocuy'],
    mainRiversAndLakes: ['Río Magdalena', 'Río Cauca', 'Río Atrato', 'Río Caquetá'],
    pedagogicalHighlight: 'Exponente máximo de los pisos térmicos andinos y de la relación entre relieve y precipitaciones.'
  },

  // --- BRASIL ---
  {
    id: 'brasil',
    name: 'Brasil',
    code: 'BRA',
    flag: '🇧🇷',
    region: 'Sur',
    capital: 'Brasilia',
    lat: -14.235,
    lng: -51.9253,
    zoom: 4,
    highestPeak: 'Pico da Neblina (2,995 m en el Escudo Guayanés fronterizo)',
    mainReliefForms: [
      'Llanura y Cuenca del Río Amazonas (mayor cuenca fluvial del planeta)',
      'Macizo Brasileño o Meseta Central (Cerrado)',
      'Escudo de las Guayanas en el norte',
      'Llanura del Pantanal (humedal más grande del mundo)',
      'Serra do Mar y Serra da Mantiqueira'
    ],
    reliefDescription: 'Carece de cordilleras cenozoicas jóvenes y volcanes activos. Su territorio está formado por extensas mesetas y escudos precámbricos aplanados y llanuras aluviales.',
    climateTypes: [
      'Cálido ecuatorial lluvioso permanente en la Amazonía',
      'Tropical con estación seca en el centro (Cerrado y Brasilia)',
      'Semiárido en el nordeste interior (Sertão)',
      'Subtropical templado en el sur (Paraná, Santa Catarina, Río Grande del Sur)'
    ],
    climateDescription: 'La selva amazónica bombea "ríos voladores" de vapor de agua hacia el centro y sur del continente. El Sertão nordestino sufre sequías cíclicas por inversión de vientos.',
    rainfallAndTemp: '400 mm en el Sertão a más de 3,000 mm en la Amazonía | Temp: 16°C a 34°C',
    mainVolcanoesOrRanges: ['Pico da Bandeira', 'Serra do Mar', 'Serra do Espinhaço', 'Pico da Neblina'],
    mainRiversAndLakes: ['Río Amazonas', 'Río Paraná', 'Río São Francisco', 'Río Tocantins'],
    pedagogicalHighlight: 'El motor bioclimático de América: cuenca amazónica y escudos precámbricos erosionados.'
  },

  // --- PERÚ ---
  {
    id: 'peru',
    name: 'Perú',
    code: 'PER',
    flag: '🇵🇪',
    region: 'Sur',
    capital: 'Lima',
    lat: -9.19,
    lng: -75.0152,
    zoom: 5,
    highestPeak: 'Nevado Huascarán (6,768 m en la Cordillera Blanca)',
    mainReliefForms: [
      'Cordillera de los Andes (Cordillera Blanca y Huayhuash)',
      'Altiplano del Collao alrededor del Lago Titicaca',
      'Costa Desértica del Pacífico (sombra de lluvia y corriente de Humboldt)',
      'Selva Alta (Rupa-Rupa) y Selva Baja (Omagua)'
    ],
    reliefDescription: 'Tres regiones naturales tradicionales: Costa estrecha y desértica, Sierra andina de grandes desniveles y picos nevados, y Selva amazónica oriental.',
    climateTypes: [
      'Árido subtropical costero (desierto con nieblas o garúa)',
      'Templado y frío andino de puna',
      'Cálido ecuatorial húmedo en la Amazonía'
    ],
    climateDescription: 'A pesar de estar en zona intertropical, Lima tiene clima templado y desértico por la fría corriente de Humboldt, mientras Iquitos en la selva registra calor y lluvias constantes.',
    rainfallAndTemp: '10 mm en la costa a más de 3,500 mm en la selva alta',
    mainVolcanoesOrRanges: ['Nevado Huascarán', 'Volcán Misti', 'Ubinas', 'Sabancaya', 'Yerupajá'],
    mainRiversAndLakes: ['Río Amazonas (nace en Arequipa)', 'Río Ucayali', 'Río Marañón', 'Lago Titicaca (3,812 msnm)'],
    pedagogicalHighlight: 'Los 8 pisos ecológicos de Javier Pulgar Vidal y el contraste costa desértica vs selva húmeda.'
  },

  // --- CHILE ---
  {
    id: 'chile',
    name: 'Chile',
    code: 'CHL',
    flag: '🇨🇱',
    region: 'Sur',
    capital: 'Santiago',
    lat: -35.6751,
    lng: -71.543,
    zoom: 4,
    highestPeak: 'Nevado Ojos del Salado (6,893 m)',
    mainReliefForms: [
      'Cordillera de los Andes',
      'Cordillera de la Costa',
      'Depresión Intermedia o Valle Central',
      'Planicies Litorales y Fiordos Australes'
    ],
    reliefDescription: 'Larga y angosta franja de más de 4,300 km de longitud encajonada entre el océano Pacífico y los Andes, con más de 2,000 volcanes.',
    climateTypes: [
      'Árido hiperdesértico en el norte (Desierto de Atacama)',
      'Mediterráneo en la zona central (Santiago y Valparaíso)',
      'Templado oceánico lluvioso en la zona sur',
      'Frío de estepa y tundra en Magallanes y Patagonia'
    ],
    climateDescription: 'Muestra una transición latitudinal perfecta de norte a sur: de la aridez absoluta en Atacama al clima mediterráneo y a los fiordos glaciares patagónicos.',
    rainfallAndTemp: '0 mm en Atacama a más de 4,000 mm en los fiordos del sur',
    mainVolcanoesOrRanges: ['Ojos del Salado', 'Villarrica', 'Osorno', 'Calbuco', 'Láscar'],
    mainRiversAndLakes: ['Río Loa (el más largo de Chile)', 'Río Bío-Bío', 'Río Baker', 'Lago General Carrera'],
    pedagogicalHighlight: 'El mejor ejemplo de zonificación climática latitudinal y de sombra orográfica en el cono sur.'
  },

  // --- ARGENTINA ---
  {
    id: 'argentina',
    name: 'Argentina',
    code: 'ARG',
    flag: '🇦🇷',
    region: 'Sur',
    capital: 'Buenos Aires',
    lat: -38.4161,
    lng: -63.6167,
    zoom: 4,
    highestPeak: 'Cerro Aconcagua (6,961 m, el techo de América)',
    mainReliefForms: [
      'Cordillera de los Andes (Andes Áridos y Patagónicos)',
      'Llanura Pampeana (Pampa húmeda y seca)',
      'Gran Chaco en el norte',
      'Meseta Patagónica escalonada hacia el Atlántico',
      'Sierras Pampeanas y Meseta Misionera'
    ],
    reliefDescription: 'Desde la cumbre más alta del continente americano hasta las vastas llanuras aluviales pampeanas y las mesetas tabulares patagónicas.',
    climateTypes: [
      'Subtropical en el Chaco y Misiones',
      'Templado pampeano con cuatro estaciones',
      'Árido de estepa patagónica y puna andina',
      'Frío húmedo cordillerano en los bosques fueguinos'
    ],
    climateDescription: 'Al oeste los Andes frenan las lluvias pacíficas creando la estepa patagónica seca. En el centro, vientos locales como el Pampero (frío) y el Zonda (cálido y seco) modelan el tiempo.',
    rainfallAndTemp: '150 mm en la Patagonia a 2,000 mm en las Cataratas del Iguazú',
    mainVolcanoesOrRanges: ['Cerro Aconcagua', 'Monte Pissis', 'Cerro Bonete', 'Sierras de Córdoba'],
    mainRiversAndLakes: ['Río Paraná', 'Río de la Plata (el más ancho del mundo)', 'Río Uruguay', 'Río Colorado', 'Glaciar Perito Moreno'],
    pedagogicalHighlight: 'Contraste entre la barrera andina del Aconcagua y la inmensidad fértil de la Pampa húmeda.'
  },

  // --- BOLIVIA ---
  {
    id: 'bolivia',
    name: 'Bolivia',
    code: 'BOL',
    flag: '🇧🇴',
    region: 'Sur',
    capital: 'Sucre (constitucional) / La Paz (sede de gobierno)',
    lat: -16.2902,
    lng: -63.5887,
    zoom: 5,
    highestPeak: 'Nevado Sajama (6,542 m, volcán extinto)',
    mainReliefForms: [
      'Altiplano Andino (cuenca endorreica a 3,800 m)',
      'Cordillera Occidental y Cordillera Real / Oriental',
      'Valles y Yungas (ladera oriental andina)',
      'Llanos Orientales de la cuenca amazónica y chaco boliviano'
    ],
    reliefDescription: 'País de contrastes extremos: un tercio de su territorio es el Altiplano alto y frío; dos tercios corresponden a las llanuras tropicales de Santa Cruz y la Amazonía.',
    climateTypes: ['Frío y seco de Altiplano y Puna', 'Templado en valles interandinos (Cochabamba)', 'Cálido tropical en el oriente'],
    climateDescription: 'En La Paz y el Altiplano la amplitud térmica diaria es extrema (heladas nocturnas e insolación diurna), mientras Santa Cruz y el Beni disfrutan de clima cálido tropical.',
    rainfallAndTemp: '200 mm en el Salar de Uyuni a 2,200 mm en los Yungas',
    mainVolcanoesOrRanges: ['Nevado Sajama', 'Illimani', 'Huayna Potosí', 'Licancabur'],
    mainRiversAndLakes: ['Lago Titicaca', 'Salar de Uyuni (mayor desierto de sal del mundo)', 'Río Mamoré', 'Río Beni'],
    pedagogicalHighlight: 'La dualidad geográfica boliviana: el frío Altiplano andino versus los llanos tropicales amazónicos.'
  },

  // --- VENEZUELA ---
  {
    id: 'venezuela',
    name: 'Venezuela',
    code: 'VEN',
    flag: '🇻🇪',
    region: 'Sur',
    capital: 'Caracas',
    lat: 6.4238,
    lng: -66.5897,
    zoom: 6,
    highestPeak: 'Pico Bolívar (4,978 m en la Cordillera de Mérida)',
    mainReliefForms: [
      'Cordillera de Mérida (ramal andino)',
      'Llanos del Orinoco (depresión central de sabanas)',
      'Macizo Guayanés y Tepuyes milenarios del sur',
      'Cordillera de la Costa'
    ],
    reliefDescription: 'Cuatro regiones físicas distintivas: los Andes venezolanos en el oeste, los Llanos ganaderos centrales, el Escudo Guayanés con tepuyes al sur y la Cordillera de la Costa.',
    climateTypes: ['Cálido tropical de sabana', 'Cálido lluvioso de selva amazónica', 'Templado y frío andino de páramo'],
    climateDescription: 'Régimen tropical biestacional (lluvias de mayo a noviembre; sequía de diciembre a abril). Las lluvias orográficas sobre los tepuyes alimentan cascadas colosales.',
    rainfallAndTemp: '500 mm en Falcón a más de 3,500 mm en la Guayana | Temp media: 26°C',
    mainVolcanoesOrRanges: ['Pico Bolívar', 'Auyantepuy (Salto Ángel)', 'Monte Roraima', 'Cordillera de Mérida'],
    mainRiversAndLakes: ['Río Orinoco', 'Río Caroní', 'Lago de Maracaibo', 'Salto Ángel (979 m)'],
    pedagogicalHighlight: 'Los tepuyes del Precámbrico como islas de biodiversidad fósil y el Salto Ángel.'
  },

  // --- ECUADOR ---
  {
    id: 'ecuador',
    name: 'Ecuador',
    code: 'ECU',
    flag: '🇪🇨',
    region: 'Sur',
    capital: 'Quito',
    lat: -1.8312,
    lng: -78.1834,
    zoom: 7,
    highestPeak: 'Volcán Chimborazo (6,263 m)',
    mainReliefForms: [
      'Cordillera de los Andes (Avenida de los Volcanes)',
      'Llanura Costera del Pacífico',
      'Amazonía Oriental (El Oriente)',
      'Archipiélago de Galápagos (origen volcánico de punto caliente)'
    ],
    reliefDescription: 'Atravesado por la línea equinoccial o del ecuador, presenta dos cordilleras paralelas (Occidental y Real) coronadas por volcanes colosales entre valles interandinos.',
    climateTypes: ['Ecuatorial húmedo en la Amazonía', 'Pisos térmicos andinos en la Sierra', 'Tropical seco y húmedo en la Costa', 'Marítimo en Galápagos'],
    climateDescription: 'Quito, ubicada a 2,850 msnm sobre la línea del ecuador, disfruta de una temperatura primaveral constante de 15°C todo el año gracias a su altitud.',
    rainfallAndTemp: '400 mm en Santa Elena a más de 4,000 mm en la Amazonía',
    mainVolcanoesOrRanges: ['Chimborazo', 'Cotopaxi', 'Tungurahua', 'Pichincha', 'Sangay'],
    mainRiversAndLakes: ['Río Guayas', 'Río Napo (afluente del Amazonas)', 'Río Pastaza'],
    pedagogicalHighlight: 'Demuestra cómo la altitud anula el calor ecuatorial en Quito y el fenómeno volcánico de Galápagos.'
  },

  // --- CUBA ---
  {
    id: 'cuba',
    name: 'Cuba',
    code: 'CUB',
    flag: '🇨🇺',
    region: 'Caribe',
    capital: 'La Habana',
    lat: 21.5218,
    lng: -77.7812,
    zoom: 7,
    highestPeak: 'Pico Turquino (1,974 m en la Sierra Maestra)',
    mainReliefForms: [
      'Sierra Maestra en el suroriental',
      'Sierra de los Órganos y mogotes kársticos de Viñales',
      'Llanuras onduladas centrales (75% del territorio)',
      'Sierra del Escambray (Guamuahaya)'
    ],
    reliefDescription: 'La mayor isla de las Antillas; su relieve es predominantemente llano con colinas cársticas onduladas y tres macizos montañosos aislados (Occidente, Centro y Oriente).',
    climateTypes: ['Tropical de sabana con estación seca', 'Tropical húmedo en vertientes montañosas'],
    climateDescription: 'Clima tropical cálido suavizado por la brisa marina (brisas de mar y tierra). Período de lluvias de mayo a octubre y período seco de noviembre a abril. Expuesto a huracanes atlánticos.',
    rainfallAndTemp: '1,300 a 1,800 mm anuales | Temperatura media: 25°C a 30°C',
    mainVolcanoesOrRanges: ['Sierra Maestra', 'Sierra del Escambray', 'Cordillera de Guaniguanico (sin volcanes activos)'],
    mainRiversAndLakes: ['Río Cauto (el más largo, 343 km)', 'Río Toa', 'Río Zaza'],
    pedagogicalHighlight: 'Relieve kárstico de mogotes y el impacto de los vientos alisios y huracanes en las islas caribeñas.'
  },

  // --- REPÚBLICA DOMINICANA ---
  {
    id: 'republica-dominicana',
    name: 'República Dominicana',
    code: 'DOM',
    flag: '🇩🇴',
    region: 'Caribe',
    capital: 'Santo Domingo',
    lat: 18.7357,
    lng: -70.1627,
    zoom: 7,
    highestPeak: 'Pico Duarte (3,098 m, la mayor altura de todas las Antillas)',
    mainReliefForms: [
      'Cordillera Central (el espinazo antillano)',
      'Hoya de Enriquillo (depresión bajo el nivel del mar a -46 m)',
      'Valle del Cibao (gran corazón agrícola fértil)',
      'Sierra Septentrional y Llanura Costera del Caribe'
    ],
    reliefDescription: 'Posee el relieve más accidentado y variado de todo el Caribe insular, albergando simultáneamente el punto más alto del Caribe (Pico Duarte) y el punto más bajo (Lago Enriquillo a -46 msnm).',
    climateTypes: ['Tropical cálido de costa', 'Templado y frío de montaña (Constanza y Jarabacoa)', 'Árido y seco en el suroeste'],
    climateDescription: 'Impresionante gradiente microclimático: desde el frío con escarcha en el valle intra-montano de Constanza ("los Alpes del Caribe") hasta la aridez desértica de cactus alrededor del lago salado Enriquillo.',
    rainfallAndTemp: '500 mm en Enriquillo a 2,500 mm en la Cordillera Central | Temp: 5°C en cumbres a 32°C en costas',
    mainVolcanoesOrRanges: ['Cordillera Central', 'Sierra de Bahoruco', 'Sierra de Neiba'],
    mainRiversAndLakes: ['Río Yaque del Norte', 'Río Yaque del Sur', 'Lago Enriquillo (hipersalino y con cocodrilos americanos)'],
    pedagogicalHighlight: 'El contraste insular extremo: el techo del Caribe (Pico Duarte) junto a una depresión bajo el nivel del mar.'
  },

  // --- PARAGUAY ---
  {
    id: 'paraguay',
    name: 'Paraguay',
    code: 'PRY',
    flag: '🇵🇾',
    region: 'Sur',
    capital: 'Asunción',
    lat: -23.4425,
    lng: -58.4438,
    zoom: 6,
    highestPeak: 'Cerro Tres Kandú o Peró (842 m en la Cordillera del Ybytyruzú)',
    mainReliefForms: [
      'Llanura del Gran Chaco paraguayo (occidente seco y arcilloso)',
      'Meseta y serranías de la Región Oriental',
      'Valle aluvial del Río Paraguay',
      'Cordillera del Amambay y del Mbaracayú'
    ],
    reliefDescription: 'País mediterráneo dividido en dos regiones bien diferenciadas por el Río Paraguay: la región Occidental (Chaco, llanura semiárida) y la región Oriental (ondulada, selvática y fértil).',
    climateTypes: ['Subtropical húmedo en el este', 'Tropical semiárido con prolongada sequía en el Chaco'],
    climateDescription: 'Veranos muy calurosos con temperaturas que superan los 40°C en el Chaco. La ausencia de barreras orográficas facilita la llegada de vientos cálidos del norte y vientos fríos pamperos del sur.',
    rainfallAndTemp: '400 mm en el Chaco a 1,800 mm en el Alto Paraná | Temp: 15°C a 42°C',
    mainVolcanoesOrRanges: ['Cordillera del Ybytyruzú', 'Cordillera de los Altos (sin volcanes activos)'],
    mainRiversAndLakes: ['Río Paraguay', 'Río Paraná (represa hidroeléctrica de Itaipú)', 'Río Pilcomayo'],
    pedagogicalHighlight: 'Efecto de la continentalidad sin salida al mar y la división de cuencas en el cono sur.'
  },

  // --- URUGUAY ---
  {
    id: 'uruguay',
    name: 'Uruguay',
    code: 'URY',
    flag: '🇺🇾',
    region: 'Sur',
    capital: 'Montevideo',
    lat: -32.5228,
    lng: -55.7658,
    zoom: 7,
    highestPeak: 'Cerro Catedral (513 m en la Sierra de Carapé)',
    mainReliefForms: [
      'Penillanura suavemente ondulada (cuchillas)',
      'Cuchilla Grande y Cuchilla de Haedo',
      'Llanura litoral del Río de la Plata y del Océano Atlántico',
      'Humedales del este (Bañados de Rocha)'
    ],
    reliefDescription: 'El único país de Sudamérica cuyo relieve es enteramente de penillanura y llanura ondulada sin montañas abruptas ni volcanes; sus cerros apenas superan los 500 m.',
    climateTypes: ['Templado pampeano / subtropical húmedo (Pampeano)'],
    climateDescription: 'Clima templado y moderado por la influencia oceánica, con precipitaciones regulares a lo largo de todo el año y ausencia de extremos de calor o frío prolongados.',
    rainfallAndTemp: '1,000 a 1,400 mm bien distribuidos anualmente | Temp media: 17°C (invierno 12°C, verano 24°C)',
    mainVolcanoesOrRanges: ['Cuchilla Grande', 'Sierra de las Ánimas (formaciones precámbricas sin volcanismo)'],
    mainRiversAndLakes: ['Río Uruguay', 'Río Negro (atraviesa todo el país)', 'Laguna Merín', 'Río de la Plata'],
    pedagogicalHighlight: 'Ejemplo de penillanura madura erosionada y clima templado constante en América del Sur.'
  }
];

