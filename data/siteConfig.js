module.exports = {
  siteTitle: "Hi, I'm Kyle!",
  siteDescription: `Personal website for Kyle Jones`,
  keyWords: ['gatsbyjs', 'react', 'cv', 'portfolio', 'blog'],
  authorName: 'Kyle Jones',
  twitterUsername: 'kerldev',
  githubUsername: 'kerl1310',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Passionate backend software engineer with significant experience in several programming languages such as <strong>C#</strong>, <strong>C++</strong> and <strong>Python</strong>. I have worked with a variety of tools including <strong>Amazon Web Services</strong> and <strong>Docker</strong>, as well as with established frameworks such as <strong>Serverless</strong> and <strong>Terraform</strong>.<br>When I'm not coding, you can find me reading (especially science fiction novels), going for walks or runs and playing video games.`,
  skills: [
    {
      name: 'Amazon Web Services',
      level: 70
    },
    {
      name: 'C#',
      level: 70
    },
    {
      name: 'C++',
      level: 60
    },
    {
      name: 'Docker',
      level: 50
    },
    {
      name: 'Git',
      level: 70
    },
    {
      name: 'Java',
      level: 40
    },
    {
      name: 'Python',
      level: 60
    },
    {
      name: 'Terraform',
      level: 40
    }
  ],
  jobs: [
    {
      company: 'AMPLYFI',
      begin: {
        month: 'may',
        year: '2019',
      },
      url: 'https://www.amplyfi.com/',
      duration: null,
      occupation: 'Senior Software Engineer',
      description:
        'Supporting the design, commercialisation and continuous improvement of AMPLYFI’s suite of AI powered business intelligence products including DataVoyant Analyse and DataVoyant Companies.',
    },
    {
      company: 'AMPLYFI',
      begin: {
        month: 'may',
        year: '2017',
      },
      duration: '2 years',
      url: 'https://www.amplyfi.com/',
      occupation: 'Software Engineer',
      description:
        'Supporting the design, commercialisation and continuous improvement of AMPLYFI’s suite of AI powered business intelligence products including DataVoyant Analyse and DataVoyant Companies.',
    },
    {
      company: 'Sapiens',
      begin: {
        month: 'apr',
        year: '2016',
      },
      url: 'https://www.sapiens.com/',
      duration: '1 year',
      occupation: 'Graduate Developer',
      description:
        "Assisted the development of Sapiens' flagship product - ALIS, a software suite enabling the creation and management of annuities, life and pension insurance quotes and policies.",
    },
    {
      company: 'Siderise Group',
      begin: {
        month: 'jun',
        year: '2015',
      },
      url: 'https://www.siderise.com/',
      duration: '1 year',
      occupation: 'Application Developer',
      description:
        'Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool.',
    },
  ],
  social: {
    twitter: 'https://twitter.com/kerldev/',
    linkedin: 'https://www.linkedin.com/in/kylejones1310/',
    github: 'https://github.com/kerl1310/',
    medium: 'https://medium.com/@KerlDev',
    stackOverflow: 'https://stackoverflow.com/story/kylejones',
    dev: 'https://dev.to/kerldev',
    email: 'kylejones1310@outlook.com',
  },
  siteUrl: 'https://kylejones.io/',
  pathPrefix: 'https://kylejones.io', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Kyle Jones',
      url: '/',
    },
  ],
}