module.exports = {
  siteTitle: "Hi, I'm Kyle!",
  siteDescription: `Personal website for Kyle Jones`,
  keyWords: ['gatsbyjs', 'spotify', 'goodreads', 'github', 'software engineering', 'react', 'graphql', 'cv', 'portfolio', 'blog'],
  authorName: 'Kyle Jones',
  twitterUsername: 'kerldev',
  githubUsername: 'kerl1310',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Passionate backend software engineer with significant experience in several programming languages such as <strong>C#</strong>, <strong>C++</strong> and <strong>Python</strong>. I have worked with a variety of tools including <strong>Amazon Web Services</strong> and <strong>Docker</strong>, as well as with established frameworks such as <strong>Serverless</strong> and <strong>Terraform</strong>.<br>When I'm not coding, you can find me reading (especially science fiction novels), going for walks or runs and playing video games.`,
  now: {
    watching: "The Mandalorian",
    learning: "Kubernetes, React, Ruby and TypeScript.",
    working_on: "This website and more blog posts.",
  },
  futureSpeaking: [
    // {
    //   talkTitle: 'Building Greener Software',
    //   eventName: 'Cloud With Chris',
    //   date: '??/08/2021',
    //   url: 'https://www.cloudwithchris.com/',
    // },
    {
      talkTitle: 'Building Greener Software',
      eventName: 'All Things Open 2021',
      date: '19/10/2021',
      url: 'https://2021.allthingsopen.org/',
    },
  ],
  pastSpeaking: [
    {
      talkTitle: 'Building Greener Software',
      eventName: 'GitLab Commit Virtual 2021',
      date: '04/08/2021',
      url: 'https://www.youtube.com/watch?v=4dj5dhyakj0',
    },],
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
      level: 60
    },
    {
      name: 'Python',
      level: 60
    },
    {
      name: 'React',
      level: 40
    },
    {
      name: 'Serverless',
      level: 60
    },
    {
      name: 'Terraform',
      level: 40
    },
    {
      name: 'TypeScript',
      level: 50
    }
  ],
  jobs: [
    {
      company: 'Made Tech',
      begin: {
        month: 'oct',
        year: '2020',
      },
      url: 'https://www.madetech.com/',
      duration: null,
      occupation: 'Software Engineer 2',
      description:
        'Helping public sector leaders to modernise legacy applications and working practices.',
    },
    {
      company: 'AMPLYFI',
      begin: {
        month: 'may',
        year: '2019',
      },
      url: 'https://www.amplyfi.com/',
      duration: '18 months',
      occupation: 'Senior Software Engineer',
      description:
        'Leading the design, commercialisation and continuous improvement of AMPLYFI’s suite of AI powered business intelligence products including DataVoyant Analyse and DataVoyant Companies.',
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
        "Contributed to the design, customisation and extension of Siderise's various IT systems. Duties consisted of gathering requirements before researching and implementing potential solutions using C#.",
    },
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/kylejones1310/',
    github: 'https://github.com/kerl1310/',
    medium: 'https://kyle-jones.medium.com/',
    stackOverflow: 'https://stackoverflow.com/story/kylejones',
    polywork: 'https://www.polywork.com/kerl1310',
    dev: 'https://dev.to/kerldev',
    email: 'kylejones1310@outlook.com',
  },
  siteUrl: 'https://kylejones.io/',
  pathPrefix: 'https://kylejones.io', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'static/images/favicon-32x32.png',
  headerLinks: [
    {
      label: 'Kyle Jones',
      url: '/',
    },
    {
      label: 'nowTitle',
      url: '/now',
    },
    {
      label: 'blogTitle',
      url: '/blog'
    }
  ],
}