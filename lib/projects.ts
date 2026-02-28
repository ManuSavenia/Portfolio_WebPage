export interface ProjectImage {
  src: string
  captionEn: string
  captionEs: string
}

export interface ProjectData {
  slug: string
  titleEn: string
  titleEs: string
  descriptionEn: string
  descriptionEs: string
  description2En: string
  description2Es: string
  tags: string[]
  link?: string
  imageColor: string
  logo: string
  imagePosition?: string // CSS object-position value, e.g. 'top', 'center'
  imageFit?: 'cover' | 'contain' // CSS object-fit value, default 'cover'
  gallery: ProjectImage[]
  startDate: string // e.g. "Mar 2024"
  endDate: string // e.g. "Jun 2024" or "Present"
  startDateEs: string
  endDateEs: string
  collaborators: { name: string; link?: string }[]
}

export const projects: ProjectData[] = [
  {
    slug: 'blitzcrank',
    titleEn: 'Blitzcrank',
    titleEs: 'Blitzcrank',
    descriptionEn:
      'A prototype of a mobile robotic gripper designed to move in two axes (X and Y) through a rail system. On this plane of movement, the gripper can move up, down, open, and close, giving it the ability to manipulate light objects within a determined area. Control is performed manually through a Hall effect joystick and a set of buttons that allow the user to interact simply and intuitively.',
    descriptionEs:
      'El proyecto Blitzcrank es un prototipo de garra robótica móvil diseñado para desplazarse en dos ejes (X e Y) mediante un sistema de rieles. Sobre este plano de movimiento, la garra puede subir, bajar, abrir y cerrar, lo que le otorga la capacidad de manipular objetos livianos dentro de un área determinada. El control se realiza manualmente a través de un joystick de efecto Hall y un conjunto de botones que permiten al usuario interactuar de manera sencilla e intuitiva.',
    description2En:
      'The Blitzcrank project was developed as a university course project. The system uses a custom-designed PCB featuring an ESP32 microcontroller running FreeRTOS for real-time task management. The mechanical structure was designed for precision movement across a 2D plane, with a vertical gripper mechanism. The PCB was designed from scratch including the schematic and layout, and manufactured locally.\n\nThe development of the project was divided into parts and assigned to 4 members. I managed the electronics infrastructure and PCB design. This required me to choose drivers (for motors), cable configurations, as well as passive components to make the project come to life. I was also in charge of the rail movement and building the physical structure, making the software to control the stepper motors.\n\nThis project taught me a lot — not only did I learn how to work with electronics, electricity, and complex logic systems through trial and error, but it also taught me that progress takes time and that building something from nothing is not an easy task. Never having worked on a project of this scale with a group showed me that teamwork is essential for tackling this type of problems.',
    description2Es:
      'El proyecto Blitzcrank fue desarrollado como proyecto de una materia universitaria. El sistema utiliza una PCB de diseño personalizado con un microcontrolador ESP32 corriendo FreeRTOS para la gestión de tareas en tiempo real. La estructura mecánica fue diseñada para movimiento preciso en un plano 2D, con un mecanismo de pinza vertical. La PCB fue diseñada desde cero, incluyendo el esquemático y el layout, y fabricada localmente.\n\nEl desarrollo del proyecto fue dividido en partes y asignado a 4 integrantes. Yo me encargué de la infraestructura electrónica y el diseño de la PCB. Esto requirió que eligiera drivers (para motores), configuraciones de cableado, así como componentes pasivos para darle vida al proyecto. También estuve a cargo del movimiento sobre los rieles y la construcción de la estructura física, desarrollando el software para controlar los motores paso a paso.\n\nEste proyecto me enseñó mucho: no solo aprendí a manipular electrónica , electricidad, y sistemas lógicos complejos a través de prueba y error, sino que también me enseñó que el progreso lleva tiempo y que construir algo desde cero no es una tarea fácil. Nunca haber trabajado en un proyecto de esta escala con un grupo me demostró que el trabajo en equipo es esencial para abordar este tipo de problemas.',
    tags: ['Electronics', 'EDU-CIAA', 'RTOS', 'C', 'ESP32'],
    link: 'https://github.com/gonblas/blitzcrank',
    imageColor: '#1a1a1a',
    logo: '/Pictures/projects/Blitzcranck/Logo.png',
    gallery: [
      {
        src: '/Pictures/projects/Blitzcranck/PCB_design.png',
        captionEn: 'PCB design layout',
        captionEs: 'Diseño del layout de la PCB',
      },
      {
        src: '/Pictures/projects/Blitzcranck/Schematic_design_ESP32.pdf',
        captionEn: 'ESP32 schematic design',
        captionEs: 'Diseño del esquemático del ESP32',
      },
      {
        src: '/Pictures/projects/Blitzcranck/Schematic_designc.pdf',
        captionEn: 'Full schematic design',
        captionEs: 'Diseño del esquemático completo',
      },
      {
        src: '/Pictures/projects/Blitzcranck/PCB_front.jpeg',
        captionEn: 'PCB front view',
        captionEs: 'Vista frontal de la PCB',
      },
      {
        src: '/Pictures/projects/Blitzcranck/PCB_back.jpeg',
        captionEn: 'PCB back view',
        captionEs: 'Vista trasera de la PCB',
      },
      {
        src: '/Pictures/projects/Blitzcranck/finished_structure.jpeg',
        captionEn: 'Finished structure',
        captionEs: 'Estructura terminada',
      },
      {
        src: '/Pictures/projects/Blitzcranck/holding_object.jpeg',
        captionEn: 'Gripper holding an object',
        captionEs: 'Pinza sosteniendo un objeto',
      },
    ],
    startDate: 'Oct 2025',
    endDate: 'Feb 2026',
    startDateEs: 'Oct 2025',
    endDateEs: 'Feb 2026',
    collaborators: [
      { name: 'Manuel Savenia', link: 'https://www.linkedin.com/in/manuel-savenia-b38639363/' },
      { name: 'Gonzalo Blasco', link: 'https://www.linkedin.com/in/gonblas/' },
      { name: 'Ivan Valentin Polanis', link: 'https://www.linkedin.com/in/ivanpolanis/' },
      { name: 'Mateo Romero', link: 'https://www.linkedin.com/in/mateo-romero-dev/' },
    ],
  },
  {
    slug: 'electricsim',
    titleEn: 'ElectricSim',
    titleEs: 'ElectricSim',
    descriptionEn:
      'ElectricSim is an educational platform oriented towards the analysis, simulation, and prediction of electrical demand in the Greater Buenos Aires area (GBA). The system integrates energy, meteorological, and astronomical data sources, consolidates them through Apache Kafka, and exposes them to a deep learning model capable of anticipating variations in electrical consumption and detecting anomalous behaviors in real time.',
    descriptionEs:
      'ElectricSim es una plataforma educativa orientada al análisis, simulación y predicción de la demanda eléctrica en el Gran Buenos Aires (GBA). El sistema integra fuentes de datos energéticas, meteorológicas y astronómicas, las consolida mediante Apache Kafka y las expone a un modelo de deep learning capaz de anticipar variaciones en el consumo eléctrico y detectar comportamientos anómalos en tiempo real.',
    description2En:
      'The platform was built with a microservices architecture using Spring Boot for the backend, Apache Kafka for data streaming, TensorFlow for the ML prediction model, and Grafana for real-time dashboard visualization. It processes historical and live data to forecast energy demand patterns.\n\nThe development of the project was divided among 6 members, and I was part of the three-person team responsible for the machine learning core and data preprocessing. My role focused on designing the neural network architecture and ensuring that the raw data—ranging from weather patterns to historical consumption—was cleaned and transformed into a format the model could actually learn from.\n\nWorking on the neural network and the data pipeline taught me a great deal through trial and error. I learned that a model is only as good as the data feeding it, which led us to spend significant time refining our preprocessing logic to handle anomalies and missing values. It was a constant process of adjusting hyperparameters and testing different layers to see how the system responded to the live data stream coming from Apache Kafka.\n\nThis project showed me that building a complex predictive system from scratch is no small feat. Never having worked on a deep learning project of this scale with a large group before, I realized that collaboration is essential when balancing data integrity with model performance.',
    description2Es:
      'La plataforma fue construida con una arquitectura de microservicios utilizando Spring Boot para el backend, Apache Kafka para el streaming de datos, TensorFlow para el modelo de predicción ML y Grafana para la visualización en tiempo real. Procesa datos históricos y en vivo para predecir patrones de demanda energética.\n\nEl desarrollo del proyecto se dividió entre 6 integrantes, y yo formé parte del equipo de tres personas responsable del núcleo de machine learning y el preprocesamiento de datos. Mi rol se centró en diseñar la arquitectura de la red neuronal y asegurar que los datos crudos —desde patrones climáticos hasta consumo histórico— fueran limpiados y transformados a un formato del que el modelo pudiera realmente aprender.\n\nTrabajar en la red neuronal y el pipeline de datos me enseñó mucho a través de prueba y error. Aprendí que un modelo es tan bueno como los datos que lo alimentan, lo que nos llevó a dedicar un tiempo significativo a refinar nuestra lógica de preprocesamiento para manejar anomalías y valores faltantes. Fue un proceso constante de ajustar hiperparámetros y probar diferentes capas para ver cómo respondía el sistema al flujo de datos en vivo proveniente de Apache Kafka.\n\nEste proyecto me demostró que construir un sistema predictivo complejo desde cero no es tarea sencilla. Al no haber trabajado antes en un proyecto de deep learning de esta escala con un grupo grande, me di cuenta de que la colaboración es esencial cuando se trata de equilibrar la integridad de los datos con el rendimiento del modelo.',
    tags: ['SpringBoot', 'ApacheKafka', 'TensorFlow', 'Grafana'],
    link: 'https://github.com/ElectricSIM/ElectricSim-ML',
    imageColor: '#0f1419',
    logo: '/Pictures/projects/ElectricSim/logo2.png',
    gallery: [
      {
        src: '/Pictures/projects/ElectricSim/526513435-2118839a-ce69-4528-8362-0c713d75b9a6.png',
        captionEn: 'Platform architecture overview',
        captionEs: 'Vista general de la arquitectura de la plataforma',
      },
      {
        src: '/Pictures/projects/ElectricSim/workflow.png',
        captionEn: 'System workflow',
        captionEs: 'Flujo de trabajo del sistema',
      },
      {
        src: '/Pictures/projects/ElectricSim/model.png',
        captionEn: 'Deep learning model',
        captionEs: 'Modelo de deep learning',
      },
      {
        src: '/Pictures/projects/ElectricSim/grafana1.png',
        captionEn: 'Grafana dashboard - Overview',
        captionEs: 'Dashboard de Grafana - Vista general',
      },
      {
        src: '/Pictures/projects/ElectricSim/grafana2.png',
        captionEn: 'Grafana dashboard - Metrics',
        captionEs: 'Dashboard de Grafana - Métricas',
      },
      {
        src: '/Pictures/projects/ElectricSim/grafana3.png',
        captionEn: 'Grafana dashboard - Analysis',
        captionEs: 'Dashboard de Grafana - Análisis',
      },
    ],
    startDate: 'Oct 2025',
    endDate: 'Nov 2025',
    startDateEs: 'Oct 2025',
    endDateEs: 'Nov 2025',
    collaborators: [
      { name: 'Manuel Savenia', link: 'https://www.linkedin.com/in/manuel-savenia-b38639363/' },
      { name: 'Gonzalo Blasco', link: 'https://www.linkedin.com/in/gonblas/' },
      { name: 'Ivan Valentin Polanis', link: 'https://www.linkedin.com/in/ivanpolanis/' },
      { name: 'Agustin Murray', link: 'https://www.linkedin.com/in/agust%C3%ADn-murray-235ab6188/' },
      { name: 'Ramiro Cabral', link: 'https://www.linkedin.com/in/ramirocabral04/' },
      { name: 'Mateo Romero', link: 'https://www.linkedin.com/in/mateo-romero-dev/' },
    ],
  },
  {
    slug: 'bipedal-robot',
    titleEn: 'Bipedal Robot',
    titleEs: 'Robot Bípedo',
    descriptionEn:
      'Bipedal Robot Prototype: This project presents a 3D-printed bipedal robot designed for agile movement. It is powered by an ESP8266 microcontroller paired with an Arduino Motor Shield V2 to manage its multiple servomotors. The robot is controlled remotely through a custom web interface, enabling real-time wireless command execution over a local network.',
    descriptionEs:
      'Prototipo de Robot Bípedo: Este proyecto presenta un robot bípedo impreso en 3D diseñado para el movimiento ágil. Está impulsado por un microcontrolador ESP8266 junto con un Arduino Motor Shield V2 para gestionar sus múltiples servomotores. El robot se controla de forma remota a través de una interfaz web desarrollada personalizadamente, permitiendo la ejecución inalámbrica de comandos en tiempo real a través de una red local.',
    description2En:
      'The robot chassis and joints were fully 3D printed, allowing rapid prototyping and iteration. The ESP8266 hosts a lightweight web server that serves the control interface, where users can trigger predefined movement sequences or manually control individual servos. Movement calibration was performed iteratively to achieve stable bipedal gait patterns.\n\nThe development of the project was divided into specialized roles among a team of 4 members. I was in charge of the physical structure, assembly, and mechanical maintenance of the robot. This required me to manage the entire hardware integration, from selecting the right fasteners and bearings to ensuring the 3D-printed joints could withstand the torque of the servomotors.\n\nThis project was a continuous process of trial and error, especially regarding the mechanical integrity and gait stability. A single loose bearing or a slightly misaligned limb could throw off the entire balance of the robot. This taught me a lot about the precision required in robotics\u2014not just in the code, but in the physical assembly that brings the software to life. It showed me that progress takes time and that maintaining a complex mechanical system is just as critical as the initial build.\n\nWorking on a project of this scale with a group showed me that clear communication between the hardware and software teams is essential. Since I was responsible for the physical \u201cbody\u201d of the robot, I had to work closely with those handling the ESP8266 logic to ensure the structure could actually execute the movements they programmed.',
    description2Es:
      'El chasis y las articulaciones del robot fueron completamente impresos en 3D, permitiendo prototipado rápido e iteración. El ESP8266 aloja un servidor web ligero que sirve la interfaz de control, donde los usuarios pueden disparar secuencias de movimiento predefinidas o controlar servos individuales manualmente. La calibración del movimiento se realizó de forma iterativa para lograr patrones de marcha bípeda estables.\n\nEl desarrollo del proyecto se dividió en roles especializados entre un equipo de 4 integrantes. Yo estuve a cargo de la estructura física, el ensamblaje y el mantenimiento mecánico del robot. Esto requirió que gestionara toda la integración del hardware, desde la selección de los sujetadores y rodamientos correctos hasta asegurar que las articulaciones impresas en 3D pudieran soportar el torque de los servomotores.\n\nEste proyecto fue un proceso continuo de prueba y error, especialmente en lo que respecta a la integridad mecánica y la estabilidad de la marcha. Un solo rodamiento flojo o una extremidad ligeramente desalineada podían desestabilizar todo el equilibrio del robot. Esto me enseñó mucho sobre la precisión que se requiere en robótica, no solo en el código, sino en el ensamblaje físico que le da vida al software. Me demostró que el progreso lleva tiempo y que mantener un sistema mecánico complejo es tan crítico como la construcción inicial.\n\nTrabajar en un proyecto de esta escala con un grupo me mostró que la comunicación clara entre los equipos de hardware y software es esencial. Como yo era responsable del «cuerpo» físico del robot, tuve que trabajar estrechamente con quienes manejaban la lógica del ESP8266 para asegurar que la estructura pudiera realmente ejecutar los movimientos que ellos programaban.',
    tags: ['ArduinoIDE', 'ESP8266', 'ArduinoShieldV2'],
    link: '#',
    imageColor: '#1a1f2e',
    logo: '/Pictures/projects/Bipedal_robot/robot.png',
    imagePosition: 'top',
    gallery: [
      {
        src: '/Pictures/projects/Bipedal_robot/robot.png',
        captionEn: 'Bipedal robot assembled',
        captionEs: 'Robot bípedo ensamblado',
      },
      {
        src: '/Pictures/projects/Bipedal_robot/topView.jpg',
        captionEn: 'Bipedal robot assembled (Top view)',
        captionEs: 'Robot bípedo ensamblado (Vista superior)',
      },
      {
        src: '/Pictures/projects/Bipedal_robot/walk_no_audio.mp4',
        captionEn: 'Walking demonstration',
        captionEs: 'Demostración de caminata',
      },
    ],
    startDate: 'Oct 2025',
    endDate: 'Nov 2025',
    startDateEs: 'Oct 2025',
    endDateEs: 'Nov 2025',
    collaborators: [
      { name: 'Manuel Savenia', link: 'https://www.linkedin.com/in/manuel-savenia-b38639363/' },
      { name: 'Bautista Garcia', link: 'https://www.linkedin.com/in/bautista-garcia-334169210/' },
      { name: 'Valeria Micol Garcia', link: 'https://www.linkedin.com/in/valeria-micol-garcia-72a653267/' },
      { name: 'Mateo Romero', link: 'https://www.linkedin.com/in/mateo-romero-dev/' },
    ],
  },
  {
    slug: 'room-leds',
    titleEn: 'Room LEDs',
    titleEs: 'Room LEDs',
    descriptionEn:
      'LED room illumination project using an ESP32 with WLED to synchronize computer audio with light movement. This setup creates an immersive ambient lighting experience by analyzing audio input and dynamically controlling LED strips in real-time through network synchronization.',
    descriptionEs:
      'Proyecto de iluminación de ambientes con LED utilizando un ESP32 con WLED para sincronizar el audio de la computadora con el movimiento de la luz. Esta configuración crea una experiencia de iluminación ambiental inmersiva al analizar la entrada de audio y controlar dinámicamente tiras de LED en tiempo real mediante sincronización de red.',
    description2En:
      'The project uses an ESP32 flashed with WLED firmware to drive addressable WS2815 LED strips. Audio from the computer is captured and streamed to LedFX, which performs real-time audio analysis and generates lighting effects synchronized with the music. The entire system communicates over WiFi,',
    description2Es:
      'El proyecto utiliza un ESP32 flasheado con firmware WLED para controlar tiras de LED direccionables WS2815. El audio de la computadora es capturado y transmitido a LedFX, que realiza análisis de audio en tiempo real y genera efectos de iluminación sincronizados con la música. Todo el sistema se comunica por WiFi.',
    tags: ['ESP32', 'WLED', 'LEDFX', 'Electronics'],
    link: '#',
    imageColor: '#0a0a0a',
    logo: '/Pictures/projects/LEDs/schematic.jpeg',
    gallery: [
      {
        src: '/Pictures/projects/LEDs/schematic.jpeg',
        captionEn: 'Wiring schematic',
        captionEs: 'Esquema de cableado',
      },
      {
        src: '/Pictures/projects/LEDs/setup.jpeg',
        captionEn: 'Hardware setup',
        captionEs: 'Configuración del hardware',
      },
      {
        src: '/Pictures/projects/LEDs/menu.jpeg',
        captionEn: 'WLED control menu',
        captionEs: 'Menú de control WLED',
      },
      {
        src: '/Pictures/projects/LEDs/lights.jpeg',
        captionEn: 'LED lights in action',
        captionEs: 'Luces LED en acción',
      },
      {
        src: '/Pictures/projects/LEDs/lights2.jpeg',
        captionEn: 'Ambient lighting effect',
        captionEs: 'Efecto de iluminación ambiental',
      },
      {
        src: '/Pictures/projects/LEDs/lights3.jpeg',
        captionEn: 'Color synchronization',
        captionEs: 'Sincronización de colores',
      },
    ],
    startDate: 'Apr 2025',
    endDate: 'Jul 2025',
    startDateEs: 'Abr 2025',
    endDateEs: 'Jul 2025',
    collaborators: [],
  },
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}
