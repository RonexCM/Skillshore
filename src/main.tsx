import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
<<<<<<< HEAD
import { store, persistor } from "./redux/store/index.ts";
import { PersistGate } from "redux-persist/integration/react";
=======
import { store } from "./redux/store/index.ts";
>>>>>>> 19cf8ac (updated folder structure, fixed some design inconsistency)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
);
