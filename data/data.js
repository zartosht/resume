// ============================================================
// PORTFOLIO DATA — edit this file to update all site content
// ============================================================
const profile = {
  name:     'Zartosht Sepideman',
  title:    'Senior Backend Developer',
  tagline:  'Building the systems behind the product. Scalable APIs, distributed services, infrastructure that holds under pressure.',
  quote:    "It's better when everything goes according to the plan!",
  picture:  'img/me.jpg',
  email:    'hi@zartosht.dev',
  location: 'Izmir, Turkey',
  birth:        '1989-07-14',
  availability: 'Remote · Contract',  // shown in About details — update as needed
  cvFile:       null,                 // set to 'cv.pdf' (or any path) to enable Download CV buttons

  bio: [
    "I've been programming since <strong>2012</strong>. Started with raw PHP — no frameworks, no patterns, just chaos. Found Laravel and the world started making sense. Built my first real application and never looked back.",
    "Discovered Node.js and fell for <strong>AdonisJS</strong> — Laravel's JavaScript twin. Moved through Express and Fastify, landed in <strong>NestJS + TypeScript</strong> and haven't left. I've been building microservices, REST and gRPC APIs, and distributed systems ever since.",
    "I like the hard problems: systems that handle real load, codebases readable a year later, bugs hiding in plain sight. The stack ranges from databases (<strong>PostgreSQL, MongoDB, Redis</strong>) to messaging (<strong>Kafka, SQS</strong>) to infrastructure (<strong>AWS, Terraform, Docker, Kubernetes</strong>).",
    "Currently at <strong>Sigma Software</strong> building internal developer platforms and data-heavy backend systems for Sigma projects. Previously: Web3/NFT infrastructure at Stage Technology, blockchain fintech at Areatak, VAS at MediaHamrah."
  ],

  social: {
    linkedin:      'https://www.linkedin.com/in/zartoshtsepideman',
    github:        'https://github.com/zartosht',
    twitter:       'https://twitter.com/zartoshtsepid',
    stackoverflow: 'https://stackoverflow.com/users/3632888/zartosht-sepideman',
  },

  skills: [
    { category: 'Languages',             items: ['TypeScript', 'JavaScript', 'PHP', 'Go', 'Python'] },
    { category: 'Frameworks & Runtime',  items: ['NestJS', 'Node.js', 'Express.js', 'Laravel', 'Symfony', 'Django'] },
    { category: 'Databases',             items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Snowflake', 'Neo4j'] },
    { category: 'Infrastructure',        items: ['AWS', 'Docker', 'Terraform', 'Linux', 'Kubernetes', 'CI/CD'] },
    { category: 'APIs & Messaging',      items: ['REST', 'GraphQL', 'gRPC', 'Kafka', 'RabbitMQ', 'SQS', 'SOAP'] },
    { category: 'Observability',         items: ['Datadog', 'Grafana'] },
    { category: 'Blockchain & Web3',     items: ['Solidity', 'Ethereum', 'Web3', 'IPFS', 'HyperLedger Fabric'] },
    { category: 'Practices & Tools',     items: ['Git', 'Jest', 'TDD', 'OOP', 'Microservices'] },
  ],

  experience: [
    {
      company:     'Sigma Software',
      title:       'Senior Backend Developer',
      from:        'Mar 2023',
      to:          'Present',
      location:    'Remote',
      url:         'https://sigma.software',
      stacks:      ['TypeScript', 'NestJS', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Terraform', 'Docker', 'Jest', 'Datadog', 'Grafana', 'Elasticsearch', 'Snowflake', 'BigQuery', 'Looker Studio', 'Python', 'Kafka', 'SQL', 'System Design', 'Microservices'],
      description: 'Senior backend engineer working on Sigma Software projects, focused on scalable backend systems, internal platforms, analytics-heavy services, and custom dashboard architecture. Designing and implementing backend services with NestJS and TypeScript, building and optimizing data pipelines, working with PostgreSQL, MongoDB, Redis, BigQuery, and Snowflake, and supporting infrastructure with AWS, Terraform, and Docker. Hands-on with observability through Datadog and Grafana, testing with Jest, and system design decisions for distributed services, metrics pipelines, and data-intensive product features.'
    },
    {
      company:     'Stage Technology Inc.',
      title:       'Backend Developer',
      from:        'Mar 2021',
      to:          'Mar 2023',
      location:    'Toronto, Canada (Remote)',
      url:         'https://stagemeta.world',
      stacks:      ['NestJS', 'TypeScript', 'AWS Lambda', 'SQS', 'Shopify', 'Solidity', 'Ethereum', 'Web3', 'Terraform', 'PostgreSQL', 'Redis'],
      description: '<strong>Stage Meta</strong>: Web3 application for owning Plaque NFTs. Smart Contracts in Solidity for minting and marketplace sales. <strong>Stage Try</strong>: Social Commerce Marketplace on Shopify. Custom NestJS decorators, TypeScript interface for EasyPost API, AWS Lambda + SQS + Shopify Event Bridge.'
    },
    {
      company:     'SocialTeq',
      title:       'Backend Developer',
      from:        'Jul 2020',
      to:          'Mar 2021',
      location:    'Qatar (Remote)',
      url:         'https://socialteq.co',
      stacks:      ['NestJS', 'TypeScript', 'gRPC', 'Kafka', 'MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Python'],
      description: 'Microservices for a dedicated e-commerce platform. gRPC for inter-service communication, custom NestJS framework extensions, custom Node.js modules. Test-driven development throughout.'
    },
    {
      company:     'Areatak',
      title:       'Lead Backend Developer',
      from:        'Jan 2020',
      to:          'Jul 2020',
      stacks:      ['Node.js', 'NestJS', 'PHP', 'Laravel', 'HyperLedger Fabric', 'MongoDB', 'PostgreSQL', 'Redis', 'Kubernetes', 'Docker'],
      description: 'KYC system for a blockchain platform using HyperLedger Fabric and microservices.'
    },
    {
      company:     'Dana Noyan Shahre Raaz',
      title:       'Lead Backend Developer',
      from:        'Jan 2019',
      to:          'Jan 2020',
      url:         'https://noyanpay.net',
      stacks:      ['PHP', 'CodeIgniter', 'Laravel', 'React', 'React Native', 'MySQL', 'WordPress'],
      description: 'Maintained noyanpay.net, developed CodeIgniter modules, built Envato plugins. Led the <strong>Sekans</strong> VOD project — mobile and TV apps with React Native.'
    },
    {
      company:     'MediaHamrah',
      title:       'Backend Developer',
      from:        'Jun 2018',
      to:          'Jan 2019',
      stacks:      ['PHP', 'Laravel', 'Symfony', 'Node.js', 'MongoDB', 'MySQL', 'Elasticsearch', 'Neo4j'],
      description: 'PHP microservices and REST APIs for Value Added Services with MCI (Hamrah Aval) and MTN. Backend for the Everpics Android app. Automated lottery services for carrier charging workflows.'
    },
    {
      company:     'Fidibo',
      title:       'Full-Stack Developer',
      from:        'Nov 2016',
      to:          'Mar 2017',
      url:         'https://fidibo.com',
      stacks:      ['PHP', 'Phalcon', 'C#', '.NET', 'WPF', 'UWP'],
      description: 'Maintained the Fidibo digital bookstore (Phalcon). Developed the desktop application frontend with C# WPF/UWP.'
    },
    {
      company:     'TAV Company',
      title:       'IT Manager & Full-Stack Developer',
      from:        'Oct 2014',
      to:          'Jun 2016',
      url:         '',
      stacks:      ['PHP', 'WordPress', 'MySQL', 'JavaScript', 'CSS'],
      description: 'Led development at a multi-brand digital company — TavServer (hosting) and TavAds (advertising). WordPress plugins and themes, PHP modules, day-to-day IT management.'
    },
    {
      company:     'Benis Rousta',
      title:       'Web Developer',
      from:        'Mar 2013',
      to:          'Dec 2015',
      url:         '',
      stacks:      ['PHP', 'WordPress', 'MySQL', 'JavaScript'],
      description: 'WordPress theme and plugin development for a construction company. JavaScript development for interactive timeline features (KnightLab tools).'
    },
    {
      company:     'Shukamo',
      title:       'Full-Stack Developer',
      from:        'Jan 2013',
      to:          'Jan 2015',
      url:         'https://shukamo.com',
      stacks:      ['PHP', 'WordPress', 'MySQL'],
      description: 'First professional role. IT management and WordPress development at a confectionery company. Network maintenance, theme development, plugin development.'
    }
  ],

  education: [
    {
      school:       'Tehran Jonoub University',
      degree:       'Bachelor of Engineering',
      fieldOfStudy: 'Civil Engineering',
      from:         '2007',
      to:           '2011'
    }
  ]
};
