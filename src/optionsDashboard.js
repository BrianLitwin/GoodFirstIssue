import React from "react";
import { LanguagePicker, MinStars, MinGoodFirstIssues } from "./formSelect";
import { LabelPicker } from "./labelPicker";

export class OptionsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: "", hidden: true };
  }

  render() {
    const {
      labels,
      handleLanguageChange,
      removeLabel,
      setMinGoodFirstIssues,
      setMinStars
    } = this.props;
    const { label, hidden } = this.state;

    var handleNewLabelChange = e => this.setState({ label: e.target.value });
    var handleNewLabelSubmit = e => {
      e.preventDefault();
      this.props.addLabel(label);
      this.setState({ label: "" });
    };
    const showLabelsPicker = () => this.setState({ hidden: !hidden });

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginBottom: "10px"
        }}
      >
        <LanguagePicker
          handleChange={language => handleLanguageChange(language)}
        />
        <MinGoodFirstIssues handleChange={n => setMinGoodFirstIssues(n)} />
        <MinStars handleChange={n => setMinStars(n)} />
        <LabelPicker
          labels={labels}
          newLabel={label}
          handleChange={handleNewLabelChange}
          handleSubmit={handleNewLabelSubmit}
          hidden={hidden}
          removeLabel={removeLabel}
        />
        <div>
          <button style={{ width: "80px" }} onClick={showLabelsPicker}>
            {this.state.hidden ? "Add labels" : "Hide"}
          </button>
        </div>
      </div>
    );
  }
}
