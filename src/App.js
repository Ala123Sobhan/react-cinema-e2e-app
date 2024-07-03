import logo from "./logo.svg";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/content/details/Details";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/:id/:name/details" element={<Details />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};
export default App;
