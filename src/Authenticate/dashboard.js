import {  useEffect } from "react";
import { useState } from "react";
// import { LoginDetails } from "./AuthenContext";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getGreeting = () => {
      const currentHour = new Date().getHours(); // Get the current hour
      if (currentHour < 12) {
        setGreeting("Good Morning!");
      } else if (currentHour >= 12 && currentHour <= 17) {
        setGreeting("Good Afternoon!");
      } else if(currentHour <= 17) {
        setGreeting("Good Evening!");
      }else{
        setGreeting("Good Night!")
      }
    };

    getGreeting(); // Call the function on component mount
  }, []);
  const dashboard = {
    backgroundColor: "#fff",
    // padding:'20px',
    width: "500px",
    textAlign: "center",
    borderRadius: "10px",
    height: "250px",
  };
  const logout_button={
    padding:'10px 20px',
    backgroundColor:'red',
    color:'white',
    borderRadius:'5px',
    width:'250px',
    fontSize:'20px',
    fontWeight:'bolder'
};
  return (
    <div style={dashboard}>
      <h2>{greeting}</h2>
      <h1>Welcome to Dashboard</h1>
      <p>You are the authorized Person</p>
      <Link to="/">
      <button style={logout_button}>logOut</button>
      </Link>
      
    </div>
  );
};

export default Dashboard;
