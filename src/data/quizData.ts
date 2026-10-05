import { QuizQuestion } from '../types';

export const DIAGNOSTIC_QUESTIONS: QuizQuestion[] = [
  {
    id: 'diag-1',
    question: 'A medida que una persona asciende por una montaña muy alta como el Huascarán o el Aconcagua, ¿qué le ocurre habitualmente a la temperatura del aire?',
    options: [
      'Aumenta porque la cumbre está más cerca del Sol.',
      'Disminuye aproximadamente 1°C por cada 180 metros de ascenso.',
      'Permanece idéntica a la que hay en el nivel del mar.',
      'Sube de día y baja de noche sin ninguna regla fija.'
    ],
    correctAnswer: 1,
    explanation: 'El aire se enfría con la altitud (gradiente térmico vertical: ~6°C a 6.5°C por cada 1,000 m). Una creencia común de estudiantes es que al estar más cerca del sol hace más calor, pero la atmósfera se calienta desde abajo por la radiación terrestre.',
    category: 'Relación Relieve-Clima',
    difficulty: 'Fácil'
  },
  {
    id: 'diag-2',
    question: '¿Cuál de las siguientes cordilleras se extiende de manera ininterrumpida a lo largo de la fachada occidental de América del Sur?',
    options: [
      'Montañas Rocosas',
      'Montes Apalaches',
      'Cordillera de los Andes',
      'Macizo Brasileño'
    ],
    correctAnswer: 2,
    explanation: 'La Cordillera de los Andes bordea el margen occidental de América del Sur a lo largo de más de 7,200 km, atravesando 7 países.',
    category: 'Relieve',
    difficulty: 'Fácil'
  },
  {
    id: 'diag-3',
    question: '¿Por qué en la selva amazónica llueve casi todos los días durante el año?',
    options: [
      'Porque está cerca del Polo Sur y recibe brisas glaciales.',
      'Por la alta insolación ecuatorial, la intensa evaporación y los vientos alisios que chocan con los Andes.',
      'Porque las cumbres de los Andes absorben toda el agua subterránea.',
      'Porque no existen vientos en esa zona geográfica.'
    ],
    correctAnswer: 1,
    explanation: 'En la zona ecuatorial, la intensa radiación calienta el aire cargado de humedad produciendo corrientes convectivas ascendentes ("lluvias de convección") potenciadas por el bloqueo orográfico andino.',
    category: 'Clima',
    difficulty: 'Media'
  },
  {
    id: 'diag-4',
    question: '¿Qué es el "efecto de sombra orográfica" o sombra de lluvia que producen las grandes cordilleras?',
    options: [
      'La sombra solar que proyectan las montañas en el atardecer impidiendo que crezcan plantas.',
      'El fenómeno donde el aire asciende, se condensa y llueve en barlovento, dejando aire seco y árido al cruzar a sotavento.',
      'Un tipo de eclipse que ocurre únicamente en zonas de mesetas precámbricas.',
      'El enfriamiento repentino del agua de los ríos al descender de la montaña.'
    ],
    correctAnswer: 1,
    explanation: 'El relieve montañoso actúa como biombo: la ladera orientada al viento húmedo (barlovento) recibe lluvias torrenciales, mientras que la ladera opuesta (sotavento) recibe aire que desciende seco, creando desiertos como Atacama o la Gran Cuenca.',
    category: 'Relación Relieve-Clima',
    difficulty: 'Media'
  },
  {
    id: 'diag-5',
    question: '¿Cuál de las siguientes formaciones del relieve americano es la más ANTIGUA geológicamente?',
    options: [
      'La Cordillera de los Andes',
      'El Escudo Canadiense y el Macizo Guayanés',
      'El Eje Neovolcánico de México',
      'La Cordillera Volcánica de Centroamérica'
    ],
    correctAnswer: 1,
    explanation: 'Los escudos o cratones (Escudo Canadiense, Macizo Guayanés y Macizo Brasileño) se originaron en la era Precámbrica (hace más de 2,500 millones de años) y han sido fuertemente erosionados, mientras que los Andes y las Rocosas son cadenas jóvenes cenozoicas.',
    category: 'Relieve',
    difficulty: 'Media'
  },
  {
    id: 'diag-6',
    question: '¿Cómo influye la Corriente Fría de Humboldt en el clima de la costa de Chile y Perú?',
    options: [
      'Provoca huracanes y tormentas tropicales ininterrumpidas.',
      'Aumenta la temperatura del agua marina haciéndola caribeña.',
      'Estabiliza la atmósfera e impide la formación de lluvias regulares, generando aridez costera.',
      'Genera grandes nevadas a nivel del mar durante el verano.'
    ],
    correctAnswer: 2,
    explanation: 'Al enfriar las capas bajas de la atmósfera, se genera una inversión térmica que no permite que el aire ascienda para formar nubes de tormenta, originando desiertos costeros.',
    category: 'Clima',
    difficulty: 'Avanzada'
  }
];

export const TRIVIA_QUESTIONS: QuizQuestion[] = [
  {
    id: 'trivia-1',
    question: '¿Cuál es la cumbre más alta de todo el continente americano y en qué cordillera se ubica?',
    options: [
      'Monte Denali (6,190 m) en la Cordillera de Alaska',
      'Cerro Aconcagua (6,961 m) en la Cordillera de los Andes',
      'Monte Elbert (4,401 m) en las Montañas Rocosas',
      'Nevado Ojos del Salado (6,893 m) en la Sierra Madre'
    ],
    correctAnswer: 1,
    explanation: 'El Cerro Aconcagua, con 6,961 metros sobre el nivel del mar, ubicado en la provincia de Mendoza (Argentina) en los Andes, es el punto más alto del continente y de los hemisferios sur y occidental.',
    category: 'Relieve',
    difficulty: 'Fácil'
  },
  {
    id: 'trivia-2',
    question: '¿Qué gran relieve de Norteamérica permite el libre tránsito de masas de aire polar árticas hacia el Golfo de México?',
    options: [
      'Los Montes Apalaches',
      'La Sierra Nevada',
      'Las Grandes Llanuras Centrales',
      'La Meseta del Colorado'
    ],
    correctAnswer: 2,
    explanation: 'Al tener una orientación norte-sur sin cordilleras transversales, las Grandes Llanuras actúan como una "chimenea geográfica" por donde los frentes fríos bajan sin obstáculos.',
    category: 'Relación Relieve-Clima',
    difficulty: 'Media'
  },
  {
    id: 'trivia-3',
    question: 'En Centroamérica y el Caribe, ¿cuál vertiente suele ser considerablemente más lluviosa durante todo el año?',
    options: [
      'La vertiente del Pacífico, debido a los vientos monzones del sur.',
      'La vertiente del Caribe o Atlántico, gracias a los vientos alisios cargados de humedad marina.',
      'Ambas vertientes son exactamente desérticas.',
      'Ninguna, solo llueve en las islas pero no en el istmo continental.'
    ],
    correctAnswer: 1,
    explanation: 'Los vientos alisios del noreste soplan sobre el mar Caribe absorbiendo humedad y al chocar con las montañas centroamericanas provocan abundantes lluvias en la vertiente caribeña.',
    category: 'Clima',
    difficulty: 'Media'
  },
  {
    id: 'trivia-4',
    question: '¿Qué nombre reciben las singulares montañas precámbricas de paredes verticales y cumbres planas del Macizo Guayanés?',
    options: [
      'Volcanes de cono de escoria',
      'Tepuyes',
      'Sierras plegadas alpinas',
      'Dunas fósiles'
    ],
    correctAnswer: 1,
    explanation: 'Los tepuyes son imponentes mesetas tabulares de cuarcita y arenisca del Precámbrico. En uno de ellos (el Auyantepuy) se encuentra el Salto Ángel, la cascada más alta del mundo.',
    category: 'Relieve',
    difficulty: 'Fácil'
  },
  {
    id: 'trivia-5',
    question: '¿Cuál es el río más largo y caudaloso de América y el mundo, que drena la mayor llanura aluvial tropical?',
    options: [
      'Río Misisipi',
      'Río Paraná',
      'Río Amazonas',
      'Río San Lorenzo'
    ],
    correctAnswer: 2,
    explanation: 'El río Amazonas transporta más agua que los ríos Nilo, Misisipi y Yangtsé combinados, recolectando las aguas de deshielo de los Andes y las copiosas lluvias de la cuenca amazónica.',
    category: 'Localización',
    difficulty: 'Fácil'
  },
  {
    id: 'trivia-6',
    question: 'En los países andinos como Colombia, Ecuador y Bolivia, ¿qué concepto explica por qué se cultiva café a 1,500 m y papa a 3,200 m?',
    options: [
      'La rotación de cultivos por estaciones de invierno y verano marcado.',
      'Los pisos altitudinales o pisos térmicos (tierra caliente, templada, fría y páramo).',
      'La cercanía de la Corriente del Niño en las noches.',
      'La influencia de la radiación lunar en las mesetas altas.'
    ],
    correctAnswer: 1,
    explanation: 'Los pisos térmicos escalonan el clima por altura: tierra caliente (0-1,000 m), templada (1,000-2,000 m), fría (2,000-3,000 m) y páramo/helada (>3,000 m).',
    category: 'Relación Relieve-Clima',
    difficulty: 'Media'
  },
  {
    id: 'trivia-7',
    question: '¿Cuál de los siguientes desiertos se considera el lugar no polar más árido del planeta Tierra?',
    options: [
      'Desierto de Sonora (México y EE.UU.)',
      'Desierto de Atacama (Chile)',
      'Desierto de Mojave (EE.UU.)',
      'El Sertão brasileño'
    ],
    correctAnswer: 1,
    explanation: 'El desierto de Atacama en el norte de Chile registra estaciones meteorológicas donde nunca ha llovido en décadas, resultado de la barrera andina y la fría corriente de Humboldt.',
    category: 'Clima',
    difficulty: 'Fácil'
  },
  {
    id: 'trivia-8',
    question: '¿Qué bioma característico predomina en las altas latitudes del norte de Canadá y Alaska donde el suelo está congelado (permafrost)?',
    options: [
      'Selva ecuatorial nublada',
      'Sabana arbolada',
      'Tundra ártica',
      'Pradera pampeana'
    ],
    correctAnswer: 2,
    explanation: 'La tundra se caracteriza por musgos, líquenes y vegetación baja adaptada a bajísimas temperaturas y un subsuelo congelado permanentemente llamado permafrost.',
    category: 'Clima',
    difficulty: 'Media'
  }
];

export const POST_TEST_QUESTIONS: QuizQuestion[] = [
  {
    id: 'post-1',
    question: '¿Qué factor explica que la costa pacífica de América tenga predominantemente cadenas montañosas jóvenes y volcanes activos?',
    options: [
      'El choque de los vientos alisios contra los continentes.',
      'La tectónica de placas en el "Cinturón de Fuego del Pacífico" (subducción de placas tectónicas oceánicas bajo las continentales).',
      'El peso de los glaciares acumulados durante la era cuaternaria.',
      'La erosión continua producida por la corriente cálida del Golfo.'
    ],
    correctAnswer: 1,
    explanation: 'El borde occidental de América forma parte del Cinturón de Fuego, donde la Placa del Pacífico, Cocos, Nazca y Juan de Fuca subducen bajo las placas Norteamericana, Caribeña y Sudamericana, elevando cordilleras y volcanes.',
    category: 'Relieve',
    difficulty: 'Media'
  },
  {
    id: 'post-2',
    question: 'Al comparar los Montes Apalaches con las Montañas Rocosas, ¿cuál afirmación es geográficamente correcta?',
    options: [
      'Los Apalaches son más jóvenes, tienen picos más afilados y mayor actividad volcánica.',
      'Los Apalaches son mucho más antiguos y redondeados por la erosión, mientras que las Rocosas son más jóvenes y elevadas.',
      'Ambos sistemas se formaron al mismo tiempo durante el Pleistoceno.',
      'Las Rocosas están en la costa atlántica y los Apalaches en la pacífica.'
    ],
    correctAnswer: 1,
    explanation: 'Los Apalaches se formaron en la era Paleozoica (~480 millones de años) y han sufrido cientos de millones de años de erosión; las Rocosas se elevaron en el Cretácico superior y Cenozoico.',
    category: 'Relieve',
    difficulty: 'Media'
  },
  {
    id: 'post-3',
    question: '¿Cuál es la función climática de la selva amazónica conocida como "ríos voladores"?',
    options: [
      'Ríos subterráneos que brotan en la cima del volcán Chimborazo.',
      'Enormes masas de vapor de agua bombeadas a la atmósfera por la evapotranspiración de los árboles que viajan impulsadas hacia el centro y sur de Sudamérica.',
      'Tornados de agua formados por la colisión entre el Amazonas y el Atlántico.',
      'Canales artificiales construidos por pueblos indígenas precolombinos.'
    ],
    correctAnswer: 1,
    explanation: 'Los árboles de la selva amazónica bombean miles de millones de litros de agua diarios al aire (evapotranspiración), formando ríos aéreos de vapor que riegan el centro-sur de Sudamérica.',
    category: 'Clima',
    difficulty: 'Avanzada'
  },
  {
    id: 'post-4',
    question: '¿Por qué la llanura chaco-pampeana de Argentina y Uruguay no tiene un clima tropical lluvioso como la llanura amazónica?',
    options: [
      'Porque está ubicada en latitudes medias templadas fuera de la zona intertropical, recibiendo influencias de frentes fríos polares.',
      'Porque la cordillera de los Andes está ausente en el sur.',
      'Porque es atravesada por el paralelo del Ecuador.',
      'Porque no tiene ningún río en su territorio.'
    ],
    correctAnswer: 0,
    explanation: 'La latitud es un factor astronómico determinante: la Pampa se encuentra entre los 30° y 40° de latitud sur (zona templada), con cuatro estaciones y frentes fríos polares como el viento Pampero.',
    category: 'Relación Relieve-Clima',
    difficulty: 'Media'
  },
  {
    id: 'post-5',
    question: 'Si una masa de aire marítimo cálida y húmeda se desplaza desde el océano Pacífico hacia el este y se encuentra con la Cordillera de los Andes, ¿qué ocurrirá en su ladera occidental (barlovento)?',
    options: [
      'El aire bajará de temperatura, ascenderá forzadamente, se condensará y descargará fuertes lluvias orográficas.',
      'El aire se calentará más y no formará nubes.',
      'El aire atravesará la montaña sin sufrir ningún cambio de presión ni humedad.',
      'La montaña disolverá el aire inmediatamente creando un vacío.'
    ],
    correctAnswer: 0,
    explanation: 'Al toparse con la ladera de barlovento, el aire es empujado hacia arriba, se expande por menor presión atmosférica, se enfría adiabáticamente y su vapor condensa en nubes y precipitaciones orográficas.',
    category: 'Relación Relieve-Clima',
    difficulty: 'Avanzada'
  },
  {
    id: 'post-6',
    question: '¿Cuál es la principal diferencia morfológica entre una meseta o escudo antiguo (como el Macizo Brasileño) y una cordillera joven (como los Andes)?',
    options: [
      'El escudo tiene cumbres afiladas y glaciares activos, la cordillera es plana y baja.',
      'El escudo presenta relieves aplanados o colinas onduladas muy erosionadas, mientras que la cordillera joven tiene picos escarpados, grandes desniveles y vulcanismo.',
      'Los escudos se encuentran siempre debajo del fondo marino.',
      'No existe ninguna diferencia morfológica.'
    ],
    correctAnswer: 1,
    explanation: 'Los escudos antiguos han soportado millones de años de meteorización y erosión química y física, perdiendo altitud y presentando superficies aplanadas o mesetas tabulares.',
    category: 'Relieve',
    difficulty: 'Media'
  },
  {
    id: 'post-7',
    question: '¿Qué efecto tiene la Corriente Cálida del Golfo en el litoral atlántico de América del Norte?',
    options: [
      'Congela las playas de Florida y Carolina del Norte.',
      'Transporta aguas templadas hacia el norte templando las costas y alimentando la formación de tormentas tropicales y huracanes.',
      'Crea un desierto seco e inhabitable en las costas de Nueva York.',
      'Evita la evaporación marina por completo.'
    ],
    correctAnswer: 1,
    explanation: 'La Corriente del Golfo transporta aguas cálidas desde el Golfo de México y el Caribe hacia latitudes altas, inyectando enorme calor y humedad a la atmósfera del este norteamericano.',
    category: 'Clima',
    difficulty: 'Media'
  },
  {
    id: 'post-8',
    question: 'En el Instituto Rosa Cerda Amador, un estudiante de 8vo grado analiza un climograma con 28°C de temperatura media constante y 2,600 mm de lluvia anual. ¿A qué región de América corresponde con mayor certeza?',
    options: [
      'La meseta del Colorado en Norteamérica.',
      'La cuenca del río Amazonas en América del Sur.',
      'La tundra del norte de Canadá.',
      'La estepa patagónica en el extremo sur.'
    ],
    correctAnswer: 1,
    explanation: 'Temperaturas elevadas permanentes sin invierno térmico y precipitaciones superiores a 2,000 mm anuales son la firma distintiva del clima cálido ecuatorial amazónico.',
    category: 'Clima',
    difficulty: 'Media'
  },
  {
    id: 'post-9',
    question: '¿Qué caracteriza al clima mediterráneo presente en California (EE.UU.) y en la zona central de Chile?',
    options: [
      'Lluvias torrenciales continuas durante el verano y sequía invernal.',
      'Inviernos templados y moderadamente lluviosos con veranos secos y calurosos.',
      'Nieve permanente durante los 12 meses del año.',
      'Humedad del 100% y ausencia de luz solar.'
    ],
    correctAnswer: 1,
    explanation: 'El clima mediterráneo es el único donde la estación cálida (verano) es la más seca, debido a la influencia de los anticiclones subtropicales en verano y frentes polares en invierno.',
    category: 'Clima',
    difficulty: 'Avanzada'
  },
  {
    id: 'post-10',
    question: '¿Cuál es la importancia pedagógica de articular el estudio del relieve con el del clima en 8vo grado?',
    options: [
      'Aprender únicamente a memorizar nombres de ríos y montañas para un examen escrito.',
      'Comprender el espacio geográfico como un sistema interconectado, donde el relieve condiciona vientos, lluvias, temperaturas y actividades humanas.',
      'Demostrar que el clima no tiene ninguna relación con las montañas.',
      'Reemplazar totalmente los mapas por textos teóricos abstractos.'
    ],
    correctAnswer: 1,
    explanation: 'La geografía moderna enseña que el relieve no es estático: su altitud, orientación y forma modelan las dinámicas climáticas, la vegetación, la hidrografía y el asentamiento de las comunidades humanas.',
    category: 'Relación Relieve-Clima',
    difficulty: 'Media'
  }
];

export interface MapChallengeTask {
  id: string;
  prompt: string;
  targetFeatureId: string;
  hint: string;
}

export const MAP_CHALLENGES: MapChallengeTask[] = [
  {
    id: 'task-1',
    prompt: 'Haz clic en la "Cordillera de los Andes del Sur", hogar del Aconcagua.',
    targetFeatureId: 'andes-sur',
    hint: 'Busca en la franja montañosa occidental del cono sur sudamericano.'
  },
  {
    id: 'task-2',
    prompt: 'Localiza la "Llanura Amazónica", la mayor llanura aluvial y selva tropical del mundo.',
    targetFeatureId: 'llanura-amazonica',
    hint: 'Se ubica en el corazón de América del Sur, atravesada por la línea del ecuador.'
  },
  {
    id: 'task-3',
    prompt: 'Identifica las "Montañas Rocosas (Rocallosas)" en América del Norte.',
    targetFeatureId: 'rocosas',
    hint: 'Es la gran cadena montañosa occidental que cruza Canadá y Estados Unidos.'
  },
  {
    id: 'task-4',
    prompt: 'Encuentra el antiquísimo "Escudo o Macizo Guayanés", famoso por sus tepuyes y cascadas.',
    targetFeatureId: 'escudo-guayanes',
    hint: 'Ubicado al norte de América del Sur, entre Venezuela, Guyana y el norte de Brasil.'
  },
  {
    id: 'task-5',
    prompt: 'Señala las "Grandes Llanuras Centrales" de Norteamérica.',
    targetFeatureId: 'grandes-llanuras',
    hint: 'La inmensa planicie fértil entre las Rocosas y los Apalaches.'
  },
  {
    id: 'task-6',
    prompt: 'Ubica la "Cordillera Centroamericana", puente biológico y volcánico entre los dos continentes.',
    targetFeatureId: 'cordillera-centroamericana',
    hint: 'El estrecho istmo que une México con Colombia.'
  }
];
