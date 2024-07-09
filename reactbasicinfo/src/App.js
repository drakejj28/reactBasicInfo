import React from 'react';
import BasicInfo from './basicInfo';

// VERY EASY CHALLENGE

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Basic Information</h1>
//         <p>Name: Kung Fu Kenny</p>
//         <p>Number: 310-616-1234</p>
//         <p>Date of Birth: June 17, 1987</p>
//       </div>
//     );
//   }
// }

// EASY CHALLENGE

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {}
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Basic Information</h1>
//         <p>Name: Kung Fu Kenny</p>
//         <p>Number: 310-616-1234</p>
//         <p>Date of Birth: June 17, 1987</p>
//       </div>
//     );
//   }
// }

// MEDIUM CHALLENGE 

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: 'Kung Fu Kenny',
//         number: '310-616-1234',
//         dob: 'June 17, 1987'
//       }
//     };
//   }

//   render() {
//     return (
//       <BasicInfo person={this.state.person} />
//     );
//   }
// }

// HARD CHALLENGE

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Kung Fu Kenny',
          number: '310-616-1234',
          dob: 'June 17, 1987'
        },
        {
          name: 'J. Cole',
          number: '910-123-2014',
          dob: 'January 28, 1985'
        },
        {
          name: 'Aubrey Drake Graham',
          number: '416-123-4567',
          dob: 'October 24, 1986'
        },
        {
          name: 'Ye',
          number: '123-456-7890',
          dob: 'June 8, 1977'
        }
      ]
    };
  }

  render() {
    return (
      <BasicInfo people={this.state.people} />
    );
  }
}

export default App;
