import * as React from "react";
import Loader from "./Loader";

const sleep = (m) => new Promise((r) => setTimeout(r, m));

/* 
    This component is very important, it allows changing the view of other components or pages in an asynchronous way, 
    it makes use of the component load and while it is not available it shows the loader component to simulate the loading of new views


*/

export default function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      await sleep(process.env.NODE_ENV === "development" ? 150 : 200);

      const { default: component } = await importComponent();

      this.setState({
        component: component,
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <Loader />;
    }
  }

  return AsyncComponent;
}
