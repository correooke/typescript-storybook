import { configure } from '@storybook/react';
import '@storybook/addon-console';

const req = require.context('../src/components', true, /\.stories\.js$|\.stories\.tsx$/ );

function loadStories() {
  // require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
