import "./App.css";
import Layout from "./hoc/layout/Layout";
import Editor from "./containers/editor/Editor";
import { Redirect, Route, Switch } from "react-router-dom";
import Viewer from "./containers/viewer/Viewer";
import ViewAll from "./containers/ViewAll/ViewAll";
import Update from "./containers/update/update";
import Information from "./containers/information/information";
import UpdateContact from "./containers/update-contact/updateContact";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact render={(props) => <Editor/>} />
          <Route path="/viewer" exact render={(props) => <Viewer {...props} />} />
          <Route path="/information" exact render={(props) => <Information {...props} />} />
          <Route path="/view-all" exact render={(props) => <ViewAll {...props} />} />
          <Route path="/update-contact" exact render={(props) => <UpdateContact {...props} />} />
          <Route path="/news/:id" exact  render={(props) => <Viewer {...props} />} />
          <Route path="/update/:id" exact  render={(props) => <Update {...props} />} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
