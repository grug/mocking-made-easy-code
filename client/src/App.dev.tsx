// Step 1 - copy our "prod" App component
// Step 2 - import injectMocks from 'data-mocks'
// Step 3 - define our mocks
// Step 4 - inject our mocks
// Step 5 - add scenarios (if any)
// Step 6 - sit back and laugh at everyone who isn't using data-mocks
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectMocks, extractScenarioFromLocation } from 'data-mocks';
import { mocks } from './Mocks';
import { SomeComponent } from './SomeComponent';

injectMocks(mocks, 'medium');

ReactDOM.render(<SomeComponent />, document.getElementById('app'));
