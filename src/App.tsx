import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import QuestionCategory from "./pages/admin/QuestionCategory";
import QuizCategory from "./pages/admin/QuizCategory";
import Quiz from "./pages/admin/Quiz";
import Question from "./pages/admin/Question";
import Report from "./pages/admin/Report";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<InitialLayout />}> */}
          {/* ------------login form goes here----------- */}
          {/* ----------register form goes here---------- */}
          {/* </Route> */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboardLayout />}>
              <Route index element={<QuizCategory />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="question-category" element={<QuestionCategory />} />
              <Route path="question" element={<Question />} />
              <Route path="report" element={<Report />} />
            </Route>
            {/* <Route path="profile" element={}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
