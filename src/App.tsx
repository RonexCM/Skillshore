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
import { AdminDashboardLayout } from "./layouts";
import EditQuizCategory from "./pages/admin/quizCategory/EditQuizCategory";
import EditQuestionCategory from "./pages/admin/questionCategory/EditQuestionCategory";
import EditQuiz from "./pages/admin/quiz/EditQuiz";
import PageNotFound from "./pages/PageNotFound";
import { ForgotPassword } from "./pages/auth/forgotPassword";
import { ProtectedRoute } from "./routes";
import {
  UserProfile,
  EditProfile,
  CreateProfile,
} from "./pages/student/profile";
import { Home } from "./pages/student/home";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import CommonLayout from "./layouts/CommonLayout";
import ResetPassword from "./pages/auth/forgotPassword/ResetPassword";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout layoutFor="auth" />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />

            <Route path="password-reset/:token" element={<ResetPassword />} />
          </Route>
          {/* ----------user pages goes here as protected route---------- */}
          <Route element={<CommonLayout layoutFor="user" />}>
            <Route path="/home" element={<Home />} />
            <Route
              path="/profile"
              element={<ProtectedRoute>{<UserProfile />}</ProtectedRoute>}
            />
            <Route
              path="/edit-profile"
              element={<ProtectedRoute>{<EditProfile />}</ProtectedRoute>}
            />
            <Route
              path="/create-profile"
              element={<ProtectedRoute>{<CreateProfile />}</ProtectedRoute>}
            />
          </Route>

          <Route
            path="/admin"
            element={<ProtectedRoute>{<AdminLayout />}</ProtectedRoute>}
          >
            <Route element={<AdminDashboardLayout />}>
              <Route index element={<QuizCategory />} />
              <Route path="addQuizCategory" element={<AddQuizCategory />} />
              <Route path="editQuizCategory" element={<EditQuizCategory />} />
              <Route path="quiz">
                <Route index element={<Quiz />} />
                <Route path="addQuiz" element={<AddQuiz />} />
                <Route path="editQuiz" element={<EditQuiz />} />
              </Route>
              <Route path="questionCategory">
                <Route index element={<QuestionCategory />} />
                <Route
                  path="addQuestionCategory"
                  element={<AddQuestionCategory />}
                />
                <Route
                  path="editQuestionCategory"
                  element={<EditQuestionCategory />}
                />
              </Route>
              <Route path="question">
                <Route index element={<Question />} />
                <Route path="addQuestion" element={<AddQuestion />} />
                <Route path="editQuestion/:id" element={<EditQuestion />} />
              </Route>
              <Route path="report" element={<Report />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
