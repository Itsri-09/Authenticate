import "./App.css";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthenContext, { LoginDetails } from "./Authenticate/AuthenContext";
import Dashboard from "./Authenticate/dashboard";
import LoginForm from "./Authenticate/login";
import Navbar from "./Authenticate/navbar";
import Particle from "./Authenticate/particle";

const AutheAllow = ({ children }) => {
  const { authen } = useContext(LoginDetails);
  if (authen) {
    return children;
  } else {
    <Navigate to="/" />;
  }
};

function App() {
  return (
    <div className="section">
      <Particle className="particles" />
      <div className="sec">
        <div className="auth">
          <AuthenContext>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route
                  path="/dashboard"
                  element={
                    <AutheAllow>
                      <Dashboard />
                    </AutheAllow>
                  }
                />
              </Routes>
            </Router>
          </AuthenContext>
        </div>
      </div>
    </div>
  );
}

export default App;
