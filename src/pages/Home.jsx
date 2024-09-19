import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        backgroundColor: "#232323",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project was generated By {"Muhammad.Umer@novelaxissolutions.com"}
        <a
          href="https://www.novelaxissolutions.com"
          style={{ color: "#87CEFA", textDecoration: "none" }}
        >
          Novel Axis Solutions
        </a>
        . Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/home1"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Home1
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/signup"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Signup
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/attendee"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Attendee
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/success"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Success
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/pricing"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Pricing
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/organizer"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Organizer
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/orgsuccess"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Orgsuccess
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/orgsuccessone"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            OrgsuccessOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/articleslearnmore"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Articleslearnmore
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
