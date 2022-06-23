import 'materialize-css/dist/css/materialize.min.css'

import "./App.scss";
import AmiiboList from "./modules/amiibo-list/amiibo-list";

function App() {
  return <div className="container">
    <AmiiboList />
  </div>;
}

export default App;