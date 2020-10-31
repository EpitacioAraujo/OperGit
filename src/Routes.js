import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/listUsers" exact component={ListUsers} />
    </BrowserRouter>
  );
}
