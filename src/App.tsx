import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SecondPage from "./pages/SecondPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="https://give-me-organic-assignment.netlify.app/"
          element={<LoginPage />}
        />
        <Route
          path="https://give-me-organic-assignment.netlify.app//second-page"
          element={<SecondPage />}
        />
      </Routes>
    </>
  );
};

export default App;
