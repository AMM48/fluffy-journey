import React from "react";
import Navbar from "./Navbar.jsx";

function About() {
  return (
    <div className="about">
      <Navbar />
      <div id="about">
        <h1>About Us</h1>
        <p>
          Welcome to our weather app! We're passionate about helping you stay
          informed and prepared for all types of weather conditions. Whether
          you're planning your day, your weekend, or your next trip, our app
          provides you with accurate and up-to-date weather information, so you
          can make the most of your time. <br />
          Our team of meteorologists and weather enthusiasts work hard to ensure
          that our app provides you with the most reliable weather forecasts and
          alerts. We use data from trusted sources and cutting-edge technology
          to deliver hyper-local forecasts for your area, so you can plan your
          activities with confidence. <br />
          We understand that weather can have a big impact on your life, from
          travel disruptions to outdoor activities to safety concerns. That's
          why we're committed to providing you with not only the latest weather
          information, but also helpful tips and resources to help you stay safe
          and comfortable in any weather situation. <br />
          Thank you for choosing our weather app to stay informed about the
          weather in your area. We're constantly working to improve our app and
          add new features, so please feel free to share your feedback and
          suggestions with us. Stay safe and enjoy the weather!
        </p>
      </div>
    </div>
  );
}

export default About;
