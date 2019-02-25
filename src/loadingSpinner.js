import React from "react";
import "./loadingSpinner.css";

export class LoadingSpinner extends React.Component {
  render() {
    const { loadingMessage } = this.props;
    return (
      <div className="spinner-container">
        <div className="spinner" />
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          {loadingMessage}
        </div>
      </div>
    );
  }
}
