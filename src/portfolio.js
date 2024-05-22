const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'STY',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Samantha Ty',
  role: 'Développeuse Fullstack',
  description:
    'Après plusieurs années en tant qu’assistante commerciale, j’ai décidé de me reconvertir dans le développement web de part mon intérêt pour la technologie.\nForte de mes diverses expériences à l’étranger, je cherche à appliquer et apporter mes nouvelles connaissances du développement web.\nJe recherche actuellement une entreprise pour une alternance (2 semaines en entreprise/1 semaine en formation).',
  resume: 'https://drive.google.com/file/d/1uZmLxJo3XUyA-bZSNa470lYGY0MimaOA/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/samantha-ty-johnson/',
    github: 'https://github.com/SamanthaTy',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'MemOrize',
    description:
      'MemOrize est une application de flashcards pour aider à la révision. Elle vous permet de créer des decks de cartes et dy insérer des cartes avec une question au recto et la réponse au verso.',
    stack: ['node.js', 'postgreSQL', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/SamanthaTy/Memorize-Front-v2',
    livePreview: 'https://memorizesty.netlify.app',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Sass',
  'Git',
  'GitHub',
  'Node.js',
  'Express.js',
  'Vite.js',
  'PostgreSQL',
  'Sequelize',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ty.samantha@mail.com',
}

export { header, about, projects, skills, contact }
