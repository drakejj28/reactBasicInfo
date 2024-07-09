import React from 'react';

// MEDIUM CHALLENGE

// class BasicInfo extends React.Component {
//   render() {
//     const { person } = this.props;
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

// HARD CHALLENGE

class BasicInfo extends React.Component {
  render() {
    const { people } = this.props;
    return (
      <div>
        <h1>Basic Information</h1>
        {people.map((person, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <p>Name: {person.name}</p>
            <p>Phone Number: {person.number}</p>
            <p>Date of Birth: {person.dob}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BasicInfo;