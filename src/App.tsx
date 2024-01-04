import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import InitialLayout from "./layouts/InitialLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialLayout />}>
            <Route path="signin" element={<SignIn />} />
            {/* ----------signup---------- */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
