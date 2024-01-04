import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import InitialLayout from "./layouts/InitialLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialLayout />}>
            <Route path="login" element={<Login />} />
            {/* ----------register form goes here---------- */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
