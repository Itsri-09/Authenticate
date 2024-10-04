import { useContext, useState } from "react";
import { LoginDetails } from "./AuthenContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const { login } = useContext(LoginDetails);
  // const [inputuser, setInputuser] = useState(false);
  // const [inputpass, setInputpass] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const dummy = { username: "hari", password: "1234" };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setInputuser(true);
    // setInputpass(true);
    if (user.username === dummy.username && user.password === dummy.password) {
      const dummyToken = "fake";
      login(dummyToken);
      navigate("/dashboard");
    }
    else {
      alert("Invalid Credentials ,Please Try Again");
    }
  };
  return (
    <div className="log">
      
    <div className="login_page">
      <p className="h1">LoginForm</p>
      <form onSubmit={handleSubmit}>
        <div className="input_field">
          <input
            type="text"
            name="username"
            required
            onChange={handleChange}
          />

          <label className="label">Username</label>
          {/* {inputuser ? <p style={input_err}>Incorrect Username</p> : ""} */}
        </div>
        <div className="input_field">
          <input
            type="password"
            // placeholder="Enter your password"
            name="password"
            required
            onChange={handleChange}
          />
          <label className="label">Password</label>
          {/* {inputpass ? <p style={input_err}>Incorrect password</p> : ""} */}

        </div>
        <button className="sub_button" type="submit">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
