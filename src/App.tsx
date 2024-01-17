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
import AddQuestionCategory from "./pages/admin/questionCategory/AddQuestionCategory";

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
              <Route path="add-quiz-category" element={<AddQuizCategory />} />
              <Route path="quiz">
                <Route index element={<Quiz />} />
                <Route path="add-quiz" element={<AddQuestionCategory />} />
              </Route>
              <Route path="question-category">
                <Route index element={<QuestionCategory />} />
                <Route
                  path="add-question-category"
                  element={<AddQuestionCategory />}
                />
              </Route>
              <Route path="question">
                <Route index element={<Question />} />
                <Route path="add-question" element={<AddQuestion />} />
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
