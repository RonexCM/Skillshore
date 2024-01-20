import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLayout } from "./layouts";
import {
  QuestionCategory,
  AddQuestionCategory,
} from "./pages/admin/questionCategory";
import { QuizCategory, AddQuizCategory } from "./pages/admin/quizCategory";
import { Quiz, AddQuiz } from "./pages/admin/quiz";
import { Question, AddQuestion, EditQuestion } from "./pages/admin/question";
import { Report } from "./pages/admin/report";
import { AdminDashboardLayout, AuthLayout } from "./layouts";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
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
