import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
<<<<<<< HEAD
<<<<<<< HEAD
import { store, persistor } from "./redux/store/index.ts";
<<<<<<< HEAD
import { PersistGate } from "redux-persist/integration/react";
=======
import { store } from "./redux/store/index.ts";
>>>>>>> 19cf8ac (updated folder structure, fixed some design inconsistency)
=======
import { store, persistor } from "./redux/store/index.ts";
import { PersistGate } from "redux-persist/integration/react";
>>>>>>> 2a0d873 (added persist, removed cookie to manage storage)
=======
import { PersistGate } from "redux-persist/es/integration/react";
>>>>>>> a47ddf0 (made few design changes and added next and select button functionality)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
