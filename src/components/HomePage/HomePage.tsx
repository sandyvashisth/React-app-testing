import React from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <h3>My App</h3>
      <Link to="/newperson">
        Add new person
      </Link>
    </>
  );
}
