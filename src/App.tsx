import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import QuestionCategory from "./pages/admin/questionCategory/QuestionCategory";
import QuizCategory from "./pages/admin/quizCategory/QuizCategory";
import Quiz from "./pages/admin/quiz/Quiz";
import Question from "./pages/admin/question/Question";
import Report from "./pages/admin/Report";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import InitialLayout from "./layouts/InitialLayout";
import AddQuizCategory from "./pages/admin/quizCategory/AddQuizCategory";
import AddQuestion from "./pages/admin/question/AddQuestion";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialLayout />}>
            {/* ------------login form goes here----------- */}
            {/* ----------register form goes here---------- */}
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route element={<AdminDashboardLayout />}>
              <Route index element={<QuizCategory />} />
              <Route path="addquizcategory" element={<AddQuizCategory />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="question-category" element={<QuestionCategory />} />
              <Route path="question">
                <Route index element={<Question />} />
                <Route path="addquestion" element={<AddQuestion />} />
              </Route>
              <Route path="report" element={<Report />} />
            </Route>
            {/* <Route path="profile" element={<} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
