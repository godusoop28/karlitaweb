export interface Stat {
  value: string
  label: string
  note?: string
}

export interface Testimony {
  text: string
}

export interface Project {
  slug: string
  title: string
  titleLine2?: string
  subtitle: string
  year: string
  category: string
  shortDescription: string
  description: string
  featured: boolean
  stats?: Stat[]
  testimonies?: Testimony[]
  process?: string
  historicalRef?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: "no-me-chifles",
    title: "No Me",
    titleLine2: "Chifles",
    subtitle: "Acoso Callejero en Morelos",
    year: "2023",
    category: "Arte Documental · Activismo Social",
    shortDescription:
      "Investigación, estadísticas, testimonios e intervención urbana sobre el acoso callejero en Morelos.",
    description:
      "Un proyecto artístico y documental sobre el acoso callejero en Morelos que nació desde la investigación, la escucha y la necesidad de visibilizar una realidad que afecta a millones de mujeres. A través de encuestas, testimonios y una serie de posters diseñados para intervenir el espacio urbano, el proyecto confronta y denuncia.",
    featured: true,
    tags: ["Documental", "Feminismo", "Arte Urbano", "Investigación Social"],
    historicalRef:
      "El primer registro del Tendedero de Denuncia en México data de 1978, cuando la artista y crítica de arte feminista Mónica Mayer inauguró esta metodología el 22 de marzo en el Museo de Arte Moderno de la Ciudad de México.",
    stats: [
      {
        value: "77%",
        label: "Mujeres que han sufrido acoso en su escuela u hogar",
        note: "1",
      },
      {
        value: "90%",
        label: "Mujeres que han recibido comentarios sobre su vestimenta como culpable del acoso",
        note: "2",
      },
      {
        value: "62%",
        label: "Mujeres que han sufrido acoso por parte de algún familiar, amigo o conocido",
        note: "3",
      },
      {
        value: "32%",
        label: "Mujeres que han recibido ayuda o apoyo de alguien mientras son acosadas",
        note: "4",
      },
      {
        value: "71%",
        label: "Mujeres que han sufrido acoso a partir de los 13-15 años",
        note: "5",
      },
      {
        value: "29%",
        label: "Mujeres que empezaron a sufrir acoso antes de los 13 años",
        note: "6",
      },
    ],
    testimonies: [
      {
        text: "Una vez fui a comprar cosas para un pastel y de regreso un idiota me tocó mis pompis. Fue tan rápido que no pude reaccionar y al llegar a mi casa solo lloré.",
      },
      {
        text: "Mi maestro de ética enfrente de toda la clase dijo que quería tener sexo conmigo y con una amiga.",
      },
      {
        text: "Mi mejor amigo me invitó a tener relaciones sexuales con él aunque en repetidas ocasiones le dije que no. También hizo comentarios sobre mi cuerpo y me besó sin mi consentimiento.",
      },
      {
        text: "Tenía como 7 años, iba para casa de mi hermana a jugar. Se detuvo un carro, era un señor como de 40 años, cuando me acerqué me di cuenta que se estaba masturbando.",
      },
    ],
    process:
      "Con base en la investigación y recopilación de datos, nació la idea de crear una serie de posters (75x60cm) para pegar por la calle en puntos específicos donde el acoso sea frecuente. Los primeros bocetos comenzaron a definir una estética directa, perturbadora y necesaria.",
  },
  {
    slug: "8-de-marzo",
    title: "8 de",
    titleLine2: "Marzo",
    subtitle: "Registro Documental",
    year: "2021 — 2023",
    category: "Fotografía Documental",
    shortDescription:
      "Registro visual de las marchas del Día Internacional de la Mujer en Morelos durante tres años consecutivos.",
    description:
      "Documentación fotográfica de las manifestaciones del 8 de marzo en Cuernavaca, Morelos. Un registro de voces, cuerpos y presencias que exigen justicia, igualdad y el fin de la violencia de género. Tres años de marchar, documentar y recordar.",
    featured: true,
    tags: ["Documental", "Feminismo", "Movimiento Social"],
    process: "",
  },
  {
    slug: "despenalizacion-aborto",
    title: "Por la",
    titleLine2: "Despenalización",
    subtitle: "Día por la Despenalización del Aborto",
    year: "2022 — 2024",
    category: "Fotografía Documental",
    shortDescription:
      "Registro fotográfico de las movilizaciones por la despenalización del aborto en Morelos.",
    description:
      "Documentación de las manifestaciones y actos culturales en torno al Día por la Despenalización del Aborto en Morelos. Un proyecto sobre el derecho a decidir, sobre los cuerpos y sus historias.",
    featured: false,
    tags: ["Documental", "Activismo", "Derechos Reproductivos"],
    process: "",
  },
  {
    slug: "joe-t-hodo",
    title: "Joe T.",
    titleLine2: "Hodo",
    subtitle: "Proyecto de Comedia Política",
    year: "2024 — 2025",
    category: "Fotografía de Eventos · Redes Sociales",
    shortDescription:
      "Creación de contenido, fotografía y cobertura visual del proyecto de comedia política Joe T. Hodo.",
    description:
      "Colaboración con el proyecto de comedia política Joe T. Hodo, documentando sus eventos, Gas Fest 2025, y creando contenido para redes sociales. Un ejercicio donde la fotografía de evento se convierte en narrativa cultural.",
    featured: false,
    tags: ["Eventos", "Cultura", "Contenido Digital"],
    process: "",
  },
  {
    slug: "mexico-en-ti",
    title: "México",
    titleLine2: "en Ti",
    subtitle: "Fotografía de Producto",
    year: "2024 — Actualidad",
    category: "Fotografía Creativa · Redes Sociales",
    shortDescription:
      "Fotografía y video de producto para redes sociales, edición y publicación.",
    description:
      "Toma de fotografía y video de producto para redes sociales del proyecto México en Ti. Edición, publicación y desarrollo de contenido visual.",
    featured: false,
    tags: ["Producto", "Redes Sociales", "Fotografía Creativa"],
    process: "",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
