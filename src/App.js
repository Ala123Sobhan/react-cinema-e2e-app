import logo from "./logo.svg";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/header/Header";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="App">
        <h1>Redux</h1>
      </div>
    </Provider>
  );
};
export default App;
