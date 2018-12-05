import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectMocks, extractScenarioFromLocation } from 'data-mocks';
import { mocks } from './Mocks';
import { SomeComponent } from './SomeComponent';

injectMocks(mocks, extractScenarioFromLocation(window.location));

ReactDOM.render(<SomeComponent />, document.getElementById('app'));
