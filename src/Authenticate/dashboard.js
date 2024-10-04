import {  useEffect } from "react";
import { useState } from "react";
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
   
  };
  
  return (
    <div className="dashboard">
      <h2>{greeting}</h2>
      <h1>Welcome to Dashboard</h1>
      <p>You are the authorized Person</p>
    </div>
  );
};

export default Dashboard;
