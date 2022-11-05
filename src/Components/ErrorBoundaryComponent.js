import React from "react";
import '../styles/ErrorBoundary.css'

function ErrorBoundaryComponent({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a hero!");
  }

  return (
    <div className="Hero">
      <p>{heroName}</p>
    </div>
  )

}

export default ErrorBoundaryComponent;
