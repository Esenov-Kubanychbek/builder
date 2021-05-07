import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu"

import "./App.css";
import { Route, Switch } from "react-router";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={Menu} exact/>
          <Route path="/checkout" component={Checkout}/>
          <Orders path="/checkout" component={Checkout}/>

        </Switch>
      </Layout>
    </div>
  );
}

export default App;
