import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialLayout from "./layouts/InitialLayout";
import "./index.css";
import RegistrationForm from "./pages/Auth/Registration";
import Login from "./pages/Auth/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<InitialLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register">
            <Route index element={<RegistrationForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
