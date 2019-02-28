import React from "react";
import { LanguagePicker, MinStars, MinGoodFirstIssues } from "./formSelect";
import { LabelPicker } from "./labelPicker";
import { SelectDate } from "./selectDate.js";

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
      setMinStars,
      minDate,
      setMinDate
    } = this.props;
    const { label, hidden } = this.state;

    var handleNewLabelChange = e => this.setState({ label: e.target.value });
    var handleNewLabelSubmit = e => {
      e.preventDefault();
      this.props.addLabel(label);
      this.setState({ label: "" });
    };
    const showLabelsPicker = () => this.setState({ hidden: !hidden });

    const firstRow = () => {
      return (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBottom: "10px",
            marginTop: "25px"
          }}
        >
          <LanguagePicker
            handleChange={language => handleLanguageChange(language)}
          />
          <MinGoodFirstIssues handleChange={n => setMinGoodFirstIssues(n)} />
          <MinStars handleChange={n => setMinStars(n)} />
          <SelectDate value={minDate} setDate={setMinDate} />
        </div>
      );
    };

    const secondRow = () => {
      return (
        <div style={{ marginBottom: "15px" }}>
          <button style={{ width: "80px" }} onClick={showLabelsPicker}>
            {this.state.hidden ? "Add labels" : "Hide"}
          </button>
          <LabelPicker
            labels={labels}
            newLabel={label}
            handleChange={handleNewLabelChange}
            handleSubmit={handleNewLabelSubmit}
            hidden={hidden}
            removeLabel={removeLabel}
          />
        </div>
      );
    };

    return (
      <React.Fragment>
        {firstRow()}
        {secondRow()}
      </React.Fragment>
    );
  }
}
