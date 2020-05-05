// if a component has to have state, make calculations based on props,
//or manage any other complex logic, then that component shouldn’t also have
//to render HTML-like JSX.

//this page renders HTML-like JSX components only
import React from "react";

export class ImagesRendered extends React.Component {
  render() {
    const src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} alt="text" />
      </div>
    );
  }
}
