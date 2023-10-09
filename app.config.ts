import type { CliOptions } from 'dt-app';

const config: CliOptions = {
  environmentUrl: 'https://lwp00649.dev.apps.dynatracelabs.com/',
  app: {
    name: 'first-app',
    version: '0.0.0',
    description: 'A starting project with routing, fetching data, and charting',
    id: 'my.first.app',
    scopes: [{ name: 'storage:logs:read', comment: 'default template' }, { name: 'storage:buckets:read', comment: 'default template' }]
  },
};

module.exports = config;