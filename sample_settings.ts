import Settings from './src/settings';

export default {
  gitlab: {
    url: 'https://git.deckweiss.at',
    token: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
    projectId: xx,
    sessionCookie: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  github: {
    //baseUrl: 'https://github.mycompany.com:123/etc',
    //apiUrl: 'https//api.github.com',
    owner: 'deckweiss-gmbh',
    tokens: [
      {
        value: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        owner: 'alfredbotworth',
      },
      {
        value: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        owner: 'valentinschabschneider',
      },
      {
        value: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        owner: 'alexanderbetz',
      },
      {
        value: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        owner: 'daniellampl',
      },
      {
        value: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        owner: 'valentinjaech',
      },
      {
        value: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        owner: 'simonhell',
      },
      {
        value: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        owner: 'danielsteinkogler',
      },
      {
        value: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
        owner: 'kevin-baumgartner',
      },
    ],
    repo: 'sportogo',
    recreateRepo: false,
  },
  // s3: {
  //   accessKeyId: '{{accessKeyId}}',
  //   secretAccessKey: '{{secretAccessKey}}',
  //   bucket: 'my-gitlab-bucket',
  // },
  usermap: {
    'alexander.betz': 'alexanderbetz',
    Vla: 'valentinjaech',
    kevinbaumgartner: 'kevin-baumgartner',
    TheStoani: 'danielsteinkogler',
  },
  projectmap: {
    'deckweissgroup/frontend-skeleton': 'deckweiss-gmbh/frontend-skeleton',
    'deckweissgroup/sportogo': 'deckweiss-gmbh/sportogo',
  },
  conversion: {
    useLowerCaseLabels: true,
  },
  transfer: {
    description: true,
    milestones: true,
    labels: true,
    issues: true,
    mergeRequests: true,
    releases: true,
  },
  debug: false,
  useIssueImportAPI: false,
  usePlaceholderMilestonesForMissingMilestones: true,
  usePlaceholderIssuesForMissingIssues: true,
  useReplacementIssuesForCreationFails: true,
  useIssuesForAllMergeRequests: false,
  filterByLabel: null,
  skipMergeRequestStates: [],
  skipMatchingComments: [],
  mergeRequests: {
    logFile: './merge-requests.json',
    log: false,
  },
} as Settings;
