import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

import "./App.css";
import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={Menu} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
