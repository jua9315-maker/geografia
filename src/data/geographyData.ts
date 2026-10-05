import { ReliefFeature, ClimateZone, OceanCurrent, RiverSystem } from '../types';

export const RELIEF_FEATURES: ReliefFeature[] = [
  {
    id: 'rocosas',
    name: 'Montañas Rocosas (Rocallosas)',
    type: 'cordillera',
    region: 'Norte',
    maxElevation: '4,401 m (Monte Elbert)',
    formationAge: 'Cenozoico (Joven)',
    description: 'Extensa cordillera occidental que se extiende más de 4,800 km desde Canadá hasta Nuevo México en EE.UU. Caracterizada por picos escarpados, glaciares y valles en U.',
    climateInfluence: 'Actúa como una gigantesca barrera que bloquea las masas de aire húmedo procedentes del océano Pacífico, originando climas secos y desérticos al este (Gran Cuenca y sombra orográfica).',
    keyPoints: ['Monte Elbert (4,401 m)', 'Parque Yellowstone', 'Divisoria Continental de las Américas'],
    lat: 39.5,
    lng: -106.5,
    zoomLevel: 5,
    areaPolygon: [
      [58.0, -125.0],
      [53.0, -118.0],
      [45.0, -109.0],
      [36.0, -105.0],
      [34.0, -106.0],
      [38.0, -108.5],
      [47.0, -115.0],
      [56.0, -123.0]
    ],
    cx: 280,
    cy: 230,
    color: '#b45309'
  },
  {
    id: 'cadena-costera',
    name: 'Cadena Costera y Sierra Nevada',
    type: 'cordillera',
    region: 'Norte',
    maxElevation: '4,421 m (Monte Whitney)',
    formationAge: 'Cenozoico (Joven)',
    description: 'Cadena montañosa costera paralela al Pacífico norteamericano. Incluye volcanes activos del Arco Volcánico de las Cascadas como el Monte Rainier y Santa Helena.',
    climateInfluence: 'Detiene los vientos oceánicos del oeste generando altas precipitaciones en la costa boscosa del Pacífico norte y zonas extremadamente áridas hacia el interior (Valle de la Muerte).',
    keyPoints: ['Monte Rainier', 'Monte Whitney', 'Falla de San Andrés'],
    lat: 36.5,
    lng: -118.3,
    zoomLevel: 5,
    areaPolygon: [
      [49.0, -122.0],
      [45.0, -121.5],
      [37.0, -118.5],
      [34.0, -117.0],
      [35.0, -119.5],
      [43.0, -123.5],
      [48.5, -124.0]
    ],
    cx: 210,
    cy: 250,
    color: '#c2410c'
  },
  {
    id: 'apalaches',
    name: 'Montes Apalaches',
    type: 'cordillera',
    region: 'Norte',
    maxElevation: '2,037 m (Monte Mitchell)',
    formationAge: 'Paleozoico',
    description: 'Sistema montañoso muy antiguo y desgastado por la erosión en el este de Norteamérica. Presenta cumbres redondeadas cubiertas por densos bosques templados.',
    climateInfluence: 'Su menor altitud permite la penetración de masas de aire del Atlántico hacia el interior, favoreciendo un clima templado húmedo en la vertiente oriental.',
    keyPoints: ['Monte Mitchell (2,037 m)', 'Ricos yacimientos de carbón', 'Bosques caducifolios'],
    lat: 36.0,
    lng: -82.2,
    zoomLevel: 5,
    areaPolygon: [
      [46.0, -70.0],
      [42.0, -74.0],
      [36.0, -82.0],
      [33.5, -86.5],
      [35.0, -88.0],
      [40.0, -80.0],
      [45.0, -73.0]
    ],
    cx: 480,
    cy: 280,
    color: '#854d0e'
  },
  {
    id: 'escudo-canadiense',
    name: 'Escudo Canadiense o Laurentino',
    type: 'escudo',
    region: 'Norte',
    maxElevation: '1,652 m (Montes Torngat)',
    formationAge: 'Precámbrico (Antiguo)',
    description: 'Enorme zócalo rocoso precámbrico que rodea la Bahía de Hudson. Superficie aplanada con miles de lagos de origen glaciar y delgada capa de suelo.',
    climateInfluence: 'Expuesto a los vientos árticos sin barreras que lo protejan, favorece inviernos extremadamente crudos y la presencia de biomas de taiga y tundra.',
    keyPoints: ['Rocas de más de 3,800 millones de años', 'Miles de lagos glaciares', 'Minerales de níquel, oro y hierro'],
    lat: 55.0,
    lng: -80.0,
    zoomLevel: 4,
    areaPolygon: [
      [62.0, -95.0],
      [60.0, -68.0],
      [50.0, -65.0],
      [46.0, -78.0],
      [50.0, -95.0]
    ],
    cx: 430,
    cy: 140,
    color: '#71717a'
  },
  {
    id: 'grandes-llanuras',
    name: 'Grandes Llanuras Centrales',
    type: 'llanura',
    region: 'Norte',
    maxElevation: '1,500 m en el oeste a 200 m en el este',
    formationAge: 'Mesozoico',
    description: 'Vasta planicie sedimentaria entre las Montañas Rocosas y los Apalaches, drenada principalmente por la cuenca hidrográfica del Misisipi-Misuri.',
    climateInfluence: 'Corredor natural para vientos fríos del Ártico en invierno y vientos cálidos y húmedos del Golfo de México en verano, generando alta inestabilidad climática y tornados.',
    keyPoints: ['Granero del mundo (trigo y maíz)', 'Cuenca del río Misisipi', 'Clima templado continental'],
    lat: 41.5,
    lng: -99.5,
    zoomLevel: 5,
    areaPolygon: [
      [50.0, -105.0],
      [50.0, -96.0],
      [32.0, -96.0],
      [32.0, -103.0],
      [42.0, -104.0]
    ],
    cx: 360,
    cy: 260,
    color: '#65a30d'
  },
  {
    id: 'sierra-madre',
    name: 'Sierras Madres de México y Eje Neovolcánico',
    type: 'cordillera',
    region: 'Norte',
    maxElevation: '5,636 m (Pico de Orizaba)',
    formationAge: 'Cenozoico (Joven)',
    description: 'Sistemas montañosos que flanquean la Altiplanicie Mexicana (Sierra Madre Occidental y Oriental), convergiendo en el Eje Volcánico Transversal con volcanes como el Popocatépetl.',
    climateInfluence: 'Crea pisos térmicos muy marcados: tierras calientes en las costas, tierras templadas en las mesetas altas y tierras frías en los volcanes.',
    keyPoints: ['Pico de Orizaba / Citlaltépetl', 'Altiplano Mexicano', 'Gran biodiversidad por pisos altitudinales'],
    lat: 19.5,
    lng: -99.0,
    zoomLevel: 6,
    areaPolygon: [
      [28.0, -107.0],
      [26.0, -100.0],
      [19.0, -97.0],
      [18.5, -102.0],
      [23.0, -105.0]
    ],
    cx: 290,
    cy: 420,
    color: '#a16207'
  },
  {
    id: 'cordillera-centroamericana',
    name: 'Cordillera Centroamericana y Arco del Caribe',
    type: 'cordillera',
    region: 'Centro',
    maxElevation: '4,220 m (Volcán Tajumulco)',
    formationAge: 'Cenozoico (Joven)',
    description: 'Espinazo montañoso y volcánico que une América del Norte con América del Sur. Zona de intensa actividad sísmica por la subducción de la Placa de Cocos bajo la Placa del Caribe.',
    climateInfluence: 'Divide el istmo en dos vertientes: el Caribe (muy lluvioso por los vientos alisios húmedos) y el Pacífico (con una marcada estación seca de verano).',
    keyPoints: ['Volcán Tajumulco (4,220 m en Guatemala)', 'Cadena volcánica de Nicaragua y Costa Rica', 'Bosques nubosos de altura'],
    lat: 14.5,
    lng: -89.0,
    zoomLevel: 6,
    areaPolygon: [
      [15.5, -92.0],
      [15.0, -86.0],
      [10.0, -84.0],
      [8.5, -83.0],
      [12.0, -86.5],
      [14.0, -90.5]
    ],
    cx: 350,
    cy: 530,
    color: '#ea580c'
  },
  {
    id: 'andes-norte',
    name: 'Cordillera de los Andes del Norte',
    type: 'cordillera',
    region: 'Sur',
    maxElevation: '6,263 m (Volcán Chimborazo)',
    formationAge: 'Cenozoico (Joven)',
    description: 'Sección septentrional de los Andes en Colombia, Ecuador y Venezuela, donde la cordillera se ramifica en cordilleras Occidental, Central y Oriental.',
    climateInfluence: 'Los pisos térmicos escalonan los climas desde el cálido ecuatorial a nivel del mar hasta los páramos y nieves perpetuas en las cumbres.',
    keyPoints: ['Chimborazo y Cotopaxi', 'Ecosistema de Páramo', 'Pisos térmicos de producción agrícola'],
    lat: 1.5,
    lng: -76.5,
    zoomLevel: 6,
    areaPolygon: [
      [8.0, -73.0],
      [6.0, -72.0],
      [-2.0, -78.0],
      [-4.0, -79.5],
      [1.0, -78.0],
      [5.0, -76.0]
    ],
    cx: 380,
    cy: 640,
    color: '#dc2626'
  },
  {
    id: 'andes-centrales',
    name: 'Andes Centrales y Altiplano',
    type: 'cordillera',
    region: 'Sur',
    maxElevation: '6,768 m (Huascarán)',
    formationAge: 'Cenozoico (Joven)',
    description: 'Sector más ancho de los Andes (hasta 700 km) que alberga el Altiplano andino a casi 4,000 m de altitud, compartido por Perú, Bolivia, Chile y Argentina.',
    climateInfluence: 'Bloquea la humedad proveniente de la Amazonía, generando el desierto costero peruano y el árido desierto de Atacama en la vertiente occidental.',
    keyPoints: ['Lago Titicaca (3,812 msnm)', 'Nevado Huascarán', 'Estepas de puna andina'],
    lat: -16.0,
    lng: -69.5,
    zoomLevel: 5,
    areaPolygon: [
      [-9.0, -77.5],
      [-14.0, -70.0],
      [-19.0, -65.5],
      [-24.0, -66.0],
      [-22.0, -69.0],
      [-15.0, -74.0]
    ],
    cx: 410,
    cy: 760,
    color: '#b91c1c'
  },
  {
    id: 'andes-sur',
    name: 'Andes del Sur o Patagónicos',
    type: 'cordillera',
    region: 'Sur',
    maxElevation: '6,961 m (Cerro Aconcagua)',
    formationAge: 'Cenozoico (Joven)',
    description: 'Franja montañosa que culmina en el Cerro Aconcagua (techo de América) y desciende hacia el sur con fiordos, campos de hielo continental y valles glaciares.',
    climateInfluence: 'Frena los vientos fríos y húmedos del Pacífico suroeste, provocando torrenciales lluvias en los fiordos chilenos y una extrema aridez en la estepa patagónica oriental.',
    keyPoints: ['Cerro Aconcagua (6,961 m)', 'Campo de Hielo Sur', 'Glaciar Perito Moreno'],
    lat: -32.65,
    lng: -70.0,
    zoomLevel: 5,
    areaPolygon: [
      [-30.0, -70.0],
      [-35.0, -70.5],
      [-45.0, -72.0],
      [-54.0, -70.0],
      [-54.0, -72.0],
      [-42.0, -74.0],
      [-32.0, -71.0]
    ],
    cx: 415,
    cy: 940,
    color: '#991b1b'
  },
  {
    id: 'escudo-guayanes',
    name: 'Escudo o Macizo Guayanés',
    type: 'escudo',
    region: 'Sur',
    maxElevation: '2,810 m (Monte Roraima)',
    formationAge: 'Precámbrico (Antiguo)',
    description: 'Meseta precámbrica muy erosionada famosa por sus mesetas tabulares de paredes verticales llamadas "tepuyes". Es una de las formaciones geológicas más antiguas de la Tierra.',
    climateInfluence: 'Situado en la faja ecuatorial, recibe copiosas precipitaciones orográficas que alimentan impresionantes caídas de agua como el Salto Ángel.',
    keyPoints: ['Monte Roraima', 'Salto Ángel (979 m, caída más alta del mundo)', 'Tepuyes de cuarcita'],
    lat: 5.2,
    lng: -62.5,
    zoomLevel: 6,
    areaPolygon: [
      [7.5, -64.0],
      [6.0, -58.0],
      [2.0, -59.0],
      [2.5, -65.0]
    ],
    cx: 490,
    cy: 640,
    color: '#78716c'
  },
  {
    id: 'macizo-brasileno',
    name: 'Macizo Brasileño o Escudo de Brasilia',
    type: 'escudo',
    region: 'Sur',
    maxElevation: '2,892 m (Pico da Bandeira)',
    formationAge: 'Precámbrico (Antiguo)',
    description: 'Extenso altiplano antiguo y ondulado que ocupa gran parte del este, centro y sur de Brasil. Su vertiente atlántica (Serra do Mar) cae abruptamente hacia el océano.',
    climateInfluence: 'Genera lluvias orográficas en la costa atlántica y condiciona un clima tropical semiárido en el interior nordestino (Sertão).',
    keyPoints: ['Pico da Bandeira', 'Serra do Mar', 'Cataratas del Iguazú'],
    lat: -18.5,
    lng: -45.5,
    zoomLevel: 5,
    areaPolygon: [
      [-10.0, -48.0],
      [-12.0, -38.0],
      [-23.0, -42.0],
      [-25.0, -50.0],
      [-18.0, -52.0]
    ],
    cx: 580,
    cy: 790,
    color: '#7c2d12'
  },
  {
    id: 'llanura-amazonica',
    name: 'Llanura Amazónica',
    type: 'llanura',
    region: 'Sur',
    maxElevation: 'Menos de 200 m',
    formationAge: 'Cenozoico (Joven)',
    description: 'La mayor llanura aluvial del planeta, formada por sedimentos del río Amazonas y sus cientos de afluentes. Cubre más de 6 millones de km².',
    climateInfluence: 'Corazón del clima cálido ecuatorial; su densa selva genera su propia lluvia por evapotranspiración ("ríos voladores" de vapor atmosférico).',
    keyPoints: ['Cuenca del río Amazonas', 'Selva tropical más grande del mundo', 'Regulador bioclimático global'],
    lat: -3.4,
    lng: -62.0,
    zoomLevel: 5,
    areaPolygon: [
      [3.0, -70.0],
      [1.0, -52.0],
      [-6.0, -50.0],
      [-10.0, -64.0],
      [-7.0, -74.0],
      [-1.0, -75.0]
    ],
    cx: 490,
    cy: 710,
    color: '#15803d'
  },
  {
    id: 'llanura-chaco-pampeana',
    name: 'Llanura Chaco-Pampeana',
    type: 'llanura',
    region: 'Sur',
    maxElevation: '50 a 300 m',
    formationAge: 'Cenozoico (Joven)',
    description: 'Extensa cuenca sedimentaria que abarca el Gran Chaco en el norte y la llanura de la Pampa en el centro de Argentina, Uruguay y sur de Brasil.',
    climateInfluence: 'Transición entre el clima subtropical y el templado pampeano. Al carecer de barreras orográficas, experimenta vientos del sur fríos (Pampero) y vientos del norte cálidos y húmedos.',
    keyPoints: ['Suelos de loess muy fértiles', 'Viento Pampero y Sudestada', 'Gran producción ganadera y cerealera'],
    lat: -33.0,
    lng: -62.0,
    zoomLevel: 5,
    areaPolygon: [
      [-20.0, -62.0],
      [-22.0, -57.0],
      [-34.0, -56.0],
      [-38.0, -62.0],
      [-33.0, -66.0]
    ],
    cx: 480,
    cy: 890,
    color: '#4d7c0f'
  }
];

export const CLIMATE_ZONES: ClimateZone[] = [
  {
    id: 'calido-ecuatorial',
    name: 'Clima Cálido Ecuatorial',
    category: 'Cálido',
    subtypes: 'Ecuatorial lluvioso constante (Selva/Pluvisilva)',
    characteristics: 'Temperaturas elevadas todo el año sin estación fría. Precipitaciones abundantes y constantes que superan los 2,000 mm anuales. Humedad relativa muy alta.',
    temperatureRange: '25°C a 28°C (amplitud térmica anual menor a 3°C)',
    rainfall: '> 2,000 a 4,000 mm anuales',
    typicalFloraFauna: 'Selva densa estratificada, jaguares, tucanes, anacondas, perezosos, miles de especies de orquídeas y árboles maderables.',
    geographicLocations: ['Cuenca del Amazonas (Brasil, Perú, Colombia)', 'Costa del Pacífico colombiano (Chocó)', 'Costas caribeñas de Centroamérica'],
    reliefRelation: 'Favorecido por las bajas elevaciones de la llanura amazónica que atrapan los vientos alisios húmedos contra la muralla de los Andes orientales.',
    color: '#059669',
    realPolygons: [
      [
        [5.0, -77.5],
        [4.0, -70.0],
        [2.0, -50.0],
        [-3.0, -48.0],
        [-9.0, -60.0],
        [-8.0, -73.0],
        [-2.0, -77.0]
      ]
    ],
    svgRegions: [
      { name: 'Amazonía y Chocó', path: 'M 420 660 Q 480 640 560 670 Q 560 740 500 750 Q 430 730 420 660 Z' }
    ]
  },
  {
    id: 'calido-tropical',
    name: 'Clima Cálido Tropical',
    category: 'Cálido',
    subtypes: 'Tropical con estación seca (Sabana y Bosque seco)',
    characteristics: 'Temperaturas cálidas todo el año con dos estaciones bien diferenciadas: una estación lluviosa en verano y una estación seca en invierno.',
    temperatureRange: '22°C a 27°C',
    rainfall: '1,000 a 1,800 mm anuales (concentrados en 6 meses)',
    typicalFloraFauna: 'Sabanas de gramíneas, árboles dispersos (moriches, ceibas), capibaras, caimanes, osos hormigueros gigantes.',
    geographicLocations: ['Llanos del Orinoco (Venezuela y Colombia)', 'Meseta del Cerrado y Pantanal (Brasil)', 'Península de Yucatán y vertiente pacífica centroamericana'],
    reliefRelation: 'Se desarrolla en mesetas y llanuras abiertas donde el desplazamiento de la Zona de Convergencia Intertropical (ZCIT) marca la temporada de lluvias.',
    color: '#10b981',
    realPolygons: [
      [
        [10.5, -72.0],
        [9.5, -61.0],
        [5.0, -62.0],
        [4.0, -71.0]
      ],
      [
        [-10.0, -56.0],
        [-11.0, -40.0],
        [-22.0, -44.0],
        [-21.0, -58.0]
      ]
    ],
    svgRegions: [
      { name: 'Llanos y Cerrado', path: 'M 440 600 Q 520 610 540 650 Q 480 660 440 600 Z' },
      { name: 'Cerrado brasileño', path: 'M 500 750 Q 590 740 600 810 Q 520 830 500 750 Z' }
    ]
  },
  {
    id: 'calido-desertico',
    name: 'Clima Árido y Desértico',
    category: 'Árido/Seco',
    subtypes: 'Desierto cálido y semiárido (Estepa)',
    characteristics: 'Extrema escasez de lluvias por debajo de 250 mm anuales. Gran oscilación térmica diaria (muy caluroso durante el día y frío durante la noche).',
    temperatureRange: 'Día: hasta 45°C | Noche: hasta 0°C',
    rainfall: '< 100 a 250 mm anuales (en Atacama casi 0 mm)',
    typicalFloraFauna: 'Cáctus columnares, xerófitas, escorpiones, serpientes de cascabel, zorros del desierto y guanacos adaptados.',
    geographicLocations: ['Desierto de Sonora y Mojave (Norteamérica)', 'Desierto de Atacama (Norte de Chile y Perú)', 'Gran Cuenca de EE.UU.'],
    reliefRelation: 'Causado directamente por el relieve: la Cordillera de los Andes y Sierra Nevada bloquean la humedad (sombra de lluvia), combinado con corrientes marinas frías.',
    color: '#f59e0b',
    realPolygons: [
      [
        [-18.5, -70.5],
        [-19.0, -68.8],
        [-28.0, -69.5],
        [-28.0, -71.2]
      ],
      [
        [36.5, -117.0],
        [36.0, -110.0],
        [28.0, -110.5],
        [27.5, -115.0]
      ]
    ],
    svgRegions: [
      { name: 'Desiertos Norteamérica', path: 'M 240 320 Q 300 340 280 400 Q 230 380 240 320 Z' },
      { name: 'Desierto de Atacama', path: 'M 390 770 Q 405 770 405 840 Q 388 840 390 770 Z' }
    ]
  },
  {
    id: 'templado-oceanico',
    name: 'Clima Templado Oceánico / Marítimo',
    category: 'Templado',
    subtypes: 'Oceánico lluvioso (Costero)',
    characteristics: 'Temperaturas suaves y moderadas gracias a la cercanía del océano. Lluvias regulares repartidas a lo largo de todo el año, sin estación seca severa.',
    temperatureRange: '8°C a 17°C (amplitud térmica baja)',
    rainfall: '1,000 a 2,500 mm anuales',
    typicalFloraFauna: 'Bosques valdivianos templados lluviosos, helechos gigantes, alerces milenarios, pudúes, huemules, nutrias marinas.',
    geographicLocations: ['Costa noroeste de EE.UU. (Washington, Oregón) y Columbia Británica (Canadá)', 'Sur de Chile (región de los lagos y fiordos patagónicos)'],
    reliefRelation: 'El relieve montañoso costero fuerza a las masas de aire marítimas húmedas a elevarse y condensarse, provocando copiosas precipitaciones orográficas constantes.',
    color: '#0284c7',
    realPolygons: [
      [
        [44.0, -125.0],
        [54.0, -132.0],
        [54.0, -126.0],
        [44.0, -122.0]
      ],
      [
        [-38.0, -74.5],
        [-38.0, -71.5],
        [-52.0, -72.0],
        [-52.0, -75.5]
      ]
    ],
    svgRegions: [
      { name: 'Costa Pacífico Norte', path: 'M 190 190 Q 220 200 215 260 Q 185 240 190 190 Z' },
      { name: 'Chile del Sur', path: 'M 395 920 Q 410 920 405 1020 Q 390 1000 395 920 Z' }
    ]
  },
  {
    id: 'templado-continental',
    name: 'Clima Templado Continental',
    category: 'Templado',
    subtypes: 'Continental con veranos cálidos e inviernos muy fríos',
    characteristics: 'Grandes amplitudes térmicas anuales (diferencia de hasta 35°C entre invierno y verano). Inviernos con nevadas persistentes y veranos moderadamente calurosos y lluviosos.',
    temperatureRange: 'Invierno: -15°C a -5°C | Verano: 18°C a 26°C',
    rainfall: '500 a 900 mm anuales',
    typicalFloraFauna: 'Bosques mixtos (robles, hayas, arces), praderas templadas, bisontes americanos, venados de cola blanca, ardillas.',
    geographicLocations: ['Medio Oeste de EE.UU. y este de Canadá', 'Llanuras centrales del interior de Norteamérica'],
    reliefRelation: 'Al estar en el interior del continente y sin barreras que frenen el viento ártico, sufre la continentalidad extrema.',
    color: '#0ea5e9',
    realPolygons: [
      [
        [42.0, -96.0],
        [50.0, -96.0],
        [48.0, -75.0],
        [40.0, -76.0]
      ]
    ],
    svgRegions: [
      { name: 'Interior de Norteamérica', path: 'M 340 220 Q 460 210 490 280 Q 360 300 340 220 Z' }
    ]
  },
  {
    id: 'templado-pampeano',
    name: 'Clima Subtropical / Templado Pampeano',
    category: 'Templado',
    subtypes: 'Templado húmedo sin estación seca',
    characteristics: 'Cuatro estaciones bien marcadas, veranos cálidos e inviernos templados. Precipitaciones suficientes para el desarrollo de ricos pastizales.',
    temperatureRange: 'Media anual de 14°C a 19°C',
    rainfall: '800 a 1,200 mm anuales',
    typicalFloraFauna: 'Pastizales de pampa, gramíneas altas, ñandúes, mulitas, zorros pampeanos.',
    geographicLocations: ['Llanura Pampeana de Argentina, Uruguay y sur de Brasil'],
    reliefRelation: 'Llanura abierta que recibe la influencia reguladora del océano Atlántico y frentes fríos del polo.',
    color: '#38bdf8',
    realPolygons: [
      [
        [-31.0, -64.0],
        [-30.0, -54.0],
        [-38.5, -57.0],
        [-38.5, -63.5]
      ]
    ],
    svgRegions: [
      { name: 'Pampa Húmeda', path: 'M 460 850 Q 540 840 530 920 Q 460 910 460 850 Z' }
    ]
  },
  {
    id: 'frio-polar',
    name: 'Clima Frío Polar y Tundra',
    category: 'Frío',
    subtypes: 'Polar Ártico y Tundra permafrost',
    characteristics: 'Inviernos muy largos y gélidos con temperaturas por debajo de -30°C. Veranos muy cortos donde el termómetro apenas supera los 0°C. Escasas precipitaciones (desierto blanco).',
    temperatureRange: '-40°C a 5°C',
    rainfall: '< 200 mm anuales en forma de nieve',
    typicalFloraFauna: 'Musgos, líquenes, sauces enanos, osos polares, caribúes, zorros árticos, focas.',
    geographicLocations: ['Norte de Canadá, Archipiélago Ártico Canadiense, costas de Groenlandia, Alaska'],
    reliefRelation: 'Ubicado en altas latitudes polares sobre el Escudo Canadiense y zonas costeras árticas.',
    color: '#6366f1',
    realPolygons: [
      [
        [68.0, -165.0],
        [75.0, -120.0],
        [74.0, -70.0],
        [60.0, -65.0],
        [58.0, -95.0],
        [64.0, -145.0]
      ]
    ],
    svgRegions: [
      { name: 'Ártico Canadiense', path: 'M 220 70 Q 560 50 620 120 Q 420 140 220 70 Z' }
    ]
  },
  {
    id: 'frio-alta-montana',
    name: 'Clima Frío de Alta Montaña',
    category: 'Frío',
    subtypes: 'Pisos térmicos andinos y glaciares de cumbre',
    characteristics: 'Disminución térmica de 1°C cada 180 metros de elevación. Gran radiación solar diurna, heladas nocturnas frecuentes y presencia de nieves eternas en las cimas.',
    temperatureRange: 'Desde 12°C en faldas hasta -15°C en cumbres nevadas',
    rainfall: 'Variable: muy lluvioso en laderas expuestas al viento (barlovento), seco en sotavento',
    typicalFloraFauna: 'Páramos, pajonales de puna, cóndor andino, vicuñas, llamas, vizcachas, bofedales.',
    geographicLocations: ['Cumbres de la Cordillera de los Andes', 'Montañas Rocosas y Cadena de las Cascadas', 'Volcanes del Eje Mexicano'],
    reliefRelation: 'El relieve es el factor causante primordial: determina la temperatura, presión atmosférica y precipitaciones según la cota de altitud.',
    color: '#818cf8',
    realPolygons: [
      [
        [4.0, -75.8],
        [4.0, -74.8],
        [-15.0, -70.5],
        [-34.0, -69.8],
        [-34.0, -70.8],
        [-15.0, -72.0]
      ]
    ],
    svgRegions: [
      { name: 'Línea de los Andes', path: 'M 400 660 L 415 760 L 420 900 L 405 970' }
    ]
  }
];

export const OCEAN_CURRENTS: OceanCurrent[] = [
  {
    id: 'corriente-humboldt',
    name: 'Corriente Fría de Humboldt (del Perú)',
    temperature: 'Fría',
    pathDescription: 'Fluye de sur a norte a lo largo de las costas de Chile y Perú transportando aguas subantárticas muy frías y ricas en nutrientes.',
    climateImpact: 'Enfría las masas de aire impidiendo la condensación de lluvias en la costa, originando el desierto hiperárido de Atacama y el desierto costero del Perú, pero generando una de las zonas pesqueras más productivas del mundo.',
    centerLat: -24.0,
    centerLng: -75.0,
    realPath: [
      [-48.0, -77.0],
      [-40.0, -76.0],
      [-32.0, -73.5],
      [-22.0, -72.5],
      [-14.0, -78.0],
      [-5.0, -83.0]
    ],
    coordinates: {
      x: 340,
      y: 840,
      labelX: 300,
      labelY: 820,
      path: 'M 350 980 C 340 900, 360 820, 370 720'
    }
  },
  {
    id: 'corriente-golfo',
    name: 'Corriente Cálida del Golfo (Gulf Stream)',
    temperature: 'Cálida',
    pathDescription: 'Nace en el Golfo de México y viaja hacia el noreste a lo largo de la costa atlántica de EE.UU. hacia Europa.',
    climateImpact: 'Aporta calor y humedad constante al sureste y este de Norteamérica, suavizando las temperaturas e impulsando frentes tormentosos y huracanes estivales.',
    centerLat: 32.0,
    centerLng: -76.0,
    realPath: [
      [24.0, -82.0],
      [27.0, -79.5],
      [34.0, -75.0],
      [38.0, -70.0],
      [42.0, -60.0],
      [46.0, -48.0]
    ],
    coordinates: {
      x: 520,
      y: 360,
      labelX: 540,
      labelY: 340,
      path: 'M 440 430 C 500 400, 520 340, 580 270'
    }
  },
  {
    id: 'corriente-california',
    name: 'Corriente Fría de California',
    temperature: 'Fría',
    pathDescription: 'Desciende a lo largo de la costa pacífica de Norteamérica desde Oregón hasta la península de Baja California.',
    climateImpact: 'Genera frecuentes nieblas costeras y reduce las precipitaciones en la costa suroeste de EE.UU. y México, propiciando el clima mediterráneo y semiárido de California y Baja California.',
    centerLat: 32.0,
    centerLng: -121.0,
    realPath: [
      [46.0, -126.0],
      [40.0, -125.0],
      [33.0, -121.0],
      [25.0, -114.0],
      [20.0, -110.0]
    ],
    coordinates: {
      x: 160,
      y: 330,
      labelX: 130,
      labelY: 330,
      path: 'M 190 220 C 180 300, 200 380, 230 450'
    }
  },
  {
    id: 'corriente-labrador',
    name: 'Corriente Fría del Labrador',
    temperature: 'Fría',
    pathDescription: 'Desciende desde el océano Glacial Ártico pasando entre Groenlandia y la península del Labrador hacia el sur.',
    climateImpact: 'Congela puertos canadienses durante varios meses de invierno y genera densas nieblas al colisionar con la cálida corriente del Golfo frente a Terranova.',
    centerLat: 54.0,
    centerLng: -54.0,
    realPath: [
      [64.0, -60.0],
      [58.0, -58.0],
      [50.0, -53.0],
      [44.0, -50.0]
    ],
    coordinates: {
      x: 580,
      y: 190,
      labelX: 600,
      labelY: 170,
      path: 'M 590 120 C 570 170, 560 210, 550 260'
    }
  },
  {
    id: 'corriente-brasil',
    name: 'Corriente Cálida del Brasil',
    temperature: 'Cálida',
    pathDescription: 'Desciende hacia el sur a lo largo de la fachada atlántica de América del Sur.',
    climateImpact: 'Aporta masas de aire cálidas y húmedas a la costa atlántica de Brasil, favoreciendo la franja boscosa de la Mata Atlántica.',
    centerLat: -20.0,
    centerLng: -38.0,
    realPath: [
      [-7.0, -33.0],
      [-14.0, -36.0],
      [-22.0, -40.0],
      [-30.0, -48.0],
      [-38.0, -54.0]
    ],
    coordinates: {
      x: 640,
      y: 780,
      labelX: 650,
      labelY: 760,
      path: 'M 600 690 C 630 760, 620 840, 580 920'
    }
  }
];

export const RIVER_SYSTEMS: RiverSystem[] = [
  {
    id: 'amazonas',
    name: 'Sistema Hidrográfico del Río Amazonas',
    length: '6,400 km (el más caudaloso del mundo)',
    basinArea: '7,050,000 km²',
    region: 'América del Sur',
    realCoordinates: [
      [-15.51, -71.77],
      [-11.20, -74.40],
      [-4.50, -73.50],
      [-3.75, -73.25],
      [-3.12, -60.02],
      [-2.45, -54.70],
      [-1.45, -51.50],
      [-0.05, -49.50]
    ],
    path: 'M 390 690 C 430 700, 480 680, 580 660',
    labelCoords: { x: 500, y: 675 },
    importance: 'Descarga alrededor del 20% del agua dulce que llega a los océanos del mundo. Regula el clima global y es la vía de comunicación principal de la cuenca amazónica.'
  },
  {
    id: 'misisipi',
    name: 'Sistema Misisipi - Misuri',
    length: '6,275 km',
    basinArea: '3,220,000 km²',
    region: 'América del Norte',
    realCoordinates: [
      [47.24, -95.21],
      [44.98, -93.26],
      [41.52, -90.57],
      [38.62, -90.19],
      [35.14, -90.05],
      [32.35, -90.87],
      [29.95, -90.07],
      [29.15, -89.25]
    ],
    path: 'M 370 200 C 380 260, 400 320, 430 400',
    labelCoords: { x: 410, y: 340 },
    importance: 'Eje fluvial crucial de Norteamérica que drena las fértiles Grandes Llanuras y desemboca en un gigantesco delta en el Golfo de México.'
  },
  {
    id: 'parana-plata',
    name: 'Cuenca del Plata (Ríos Paraná, Paraguay y Uruguay)',
    length: '4,880 km (sistema Paraná)',
    basinArea: '3,100,000 km²',
    region: 'América del Sur',
    realCoordinates: [
      [-18.5, -48.5],
      [-20.5, -51.0],
      [-24.0, -54.3],
      [-27.4, -58.8],
      [-31.7, -60.5],
      [-32.9, -60.6],
      [-34.5, -58.3]
    ],
    path: 'M 530 760 C 510 820, 490 870, 500 930',
    labelCoords: { x: 515, y: 840 },
    importance: 'Segunda cuenca fluvial de Sudamérica; abastece hidroeléctricas colosales como Itaipú y es la salida comercial de la Pampa y el Chaco.'
  },
  {
    id: 'orinoco',
    name: 'Cuenca del Río Orinoco',
    length: '2,140 km',
    basinArea: '880,000 km²',
    region: 'América del Sur',
    realCoordinates: [
      [2.3, -63.3],
      [3.1, -66.0],
      [4.0, -67.7],
      [6.2, -67.5],
      [7.6, -66.5],
      [8.1, -63.5],
      [8.6, -61.0],
      [8.9, -60.2]
    ],
    path: 'M 440 620 C 470 610, 500 620, 520 600',
    labelCoords: { x: 480, y: 595 },
    importance: 'Drena los llanos venezolanos y colombianos y se conecta naturalmente con la cuenca del Amazonas a través del Canal del Casiquiare.'
  }
];

export const PEDAGOGICAL_FRAMEWORK = {
  institution: 'Instituto Rosa Cerda Amador',
  targetGrade: '8vo Grado "A"',
  period: 'II Semestre del año 2026',
  generalObjective: 'Proponer el uso de mapas interactivos como estrategia pedagógica para fortalecer la comprensión del contenido de relieve y el clima de América en estudiantes de 8.º grado “A” del Instituto Rosa Cerda Amador, durante el segundo semestre del año 2026.',
  specificObjectives: [
    {
      num: 1,
      title: 'Diagnosticar las dificultades',
      description: 'Diagnosticar las dificultades que presentan los estudiantes en la comprensión del relieve y el clima de América.',
      indicators: [
        'Identificación de ideas previas erróneas sobre la relación altitud-temperatura.',
        'Medición de dificultades en lectura de mapas físicos y climáticos tradicionales.',
        'Mapeo de confusiones entre "tiempo atmosférico" y "zona climática".'
      ],
      associatedTool: 'Pre-test Diagnóstico Interactivo'
    },
    {
      num: 2,
      title: 'Elaborar la estrategia pedagógica',
      description: 'Elaborar una estrategia pedagógica basada en el uso de mapas interactivos para reforzar la comprensión del relieve y el clima de América.',
      indicators: [
        'Integración de capas dinámicas (relieve, clima, hidrografía, corrientes marinas).',
        'Simulación del perfil topográfico transversal y efecto de sombra de lluvia.',
        'Fichas de aprendizaje colaborativo y retos geo-espaciales guiados.'
      ],
      associatedTool: 'Mapas Interactivos Multicapa & Simulador de Perfil Topográfico'
    },
    {
      num: 3,
      title: 'Evaluar la efectividad',
      description: 'Evaluar la efectividad de la estrategia pedagógica en la comprensión del relieve y el clima de América.',
      indicators: [
        'Comparación de rendimiento entre el diagnóstico inicial y la evaluación final.',
        'Porcentaje de ganancia de aprendizaje (Hake gain) superior al 40%.',
        'Emisión de certificados de logro formativo para los estudiantes de 8vo "A".'
      ],
      associatedTool: 'Post-test Evaluativo, Rúbrica Analítica & Analítica de Progreso'
    }
  ]
};
