// this is the container component. It contains all the logic of our app
// and renders another component in this case <ImagesRendered/>

import React from "react";
import "./styles.css";
import { ImagesRendered } from "./PresentationalComponent/ImagesRendered";

const GUINEAPATHS = [
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg",
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg",
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg",
  "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg"
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  //This method renders ImagesRendered component and passes it a prop
  // (extra information via the src attribute) this attribute will be called in ImagesRendered as
  //using this.props.attributeName: this.props.src
  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return <ImagesRendered src={src} />;
  }
}

export default App;
