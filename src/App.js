import { Provider } from "react-redux";
import store from "./redux/store";
import CardExchange from "./CardExchange";
import "./App.sass";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <CardExchange />
      </div>
    </Provider>
  );
}

export default App;
