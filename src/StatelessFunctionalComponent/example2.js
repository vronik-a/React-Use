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
