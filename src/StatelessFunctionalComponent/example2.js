import React from "react";

// Normal way to display a prop:
export class MyComponentClass extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

// Stateless functional component way to display a prop:
export const MyComponentClass1 = props => {
  return <h1>{props.title}</h1>;
};

// Normal way to display a prop using a variable:
export class MyComponentClass2 extends React.component {
  render() {
    let title = this.props.title;
    return <h1>{title}</h1>;
  }
}

// Stateless functional component way to display a prop using a variable:
export const MyComponentClass3 = props => {
  let title = props.title;
  return <h1>{title}</h1>;
};

// More complex example: the commented sections are where the changes are made
// in the stateless functional component
export class GuineaPigs extends React.Component {
  render() {
    // let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        {/* <img src={src} /> */}
      </div>
    );
  }
}
// unlike a class a function does not have .this

export const GuineaPigs1 = props => {
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={props.src} alt="im" />
    </div>
  );
};
