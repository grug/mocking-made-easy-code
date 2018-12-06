import * as React from 'react';
import { Shift } from './Entities';
import { Http } from './Http';

export class SomeComponent extends React.Component {
  state = {
    previousShiftSize: 'Small',
    nextShiftSize: undefined
  };

  componentDidMount() {
    Http.get<Shift>('http://localhost:3000/next-shift').then(response => {
      console.log(response);
      this.setState({
        nextShiftSize: response.shiftSize
      });
    });
  }

  render() {
    return (
      <>
        <h1>Dave's shift size thingy</h1>
        <p>Your previous shift size: {this.state.previousShiftSize}</p>
        {this.state.nextShiftSize && (
          <div>
            <p>Your new shift size: {this.state.nextShiftSize}</p>
            <p>Before starting a new shift, don't forget to make sure your contract is signed!</p>
          </div>
        )}
        {this.state.nextShiftSize === 'Large' && (
          <p><strong>Be prepared to put in a mighty big shift!</strong></p>
        )}
      </>
    );
  }
}
