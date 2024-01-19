import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import QuestionCategory from "./pages/admin/questionCategory";
import QuizCategory from "./pages/admin/quizCategory";
import Quiz from "./pages/admin/quiz";
import Question from "./pages/admin/question";
import Report from "./pages/admin/Report";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import InitialLayout from "./layouts/InitialLayout";
import AddQuizCategory from "./pages/admin/quizCategory/AddQuizCategory";
import AddQuestion from "./pages/admin/question/AddQuestion";
import AddQuestionCategory from "./pages/admin/questionCategory/AddQuestionCategory";
import AddQuiz from "./pages/admin/quiz/AddQuiz";
import EditQuestion from "./pages/admin/question/EditQuestion";

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
                <Route path="add-quiz" element={<AddQuiz />} />
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
                <Route path="edit-question" element={<EditQuestion />} />
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
