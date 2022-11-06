import React from "react";
import ErrorBoundaryComponent from "../Components/ErrorBoundaryComponent";
import { ErrorBoundary } from "../Components/ErrorBoundary";
import { Link } from "react-router-dom";
import '../styles/ErrorBoundary.css'

function ErrorBoundaryDisplay() {
  return (
    <div className="Display-error">
      <h2 className="Display-error-header">List Of SuperHeroes</h2>

      <div>
        <ErrorBoundary>
          <ErrorBoundaryComponent heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <ErrorBoundaryComponent heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <ErrorBoundaryComponent heroName="Joker" />
        </ErrorBoundary>

        <ErrorBoundary>
          <ErrorBoundaryComponent heroName="Wonder-Woman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <ErrorBoundaryComponent heroName="Flash" />
        </ErrorBoundary>

        <div className="button-section">
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundaryDisplay;
