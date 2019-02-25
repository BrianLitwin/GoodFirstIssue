import React from "react";

export class LabelPicker extends React.Component {
  render() {
    const {
      hidden,
      labels,
      handleSubmit,
      newLabel,
      handleChange,
      removeLabel
    } = this.props;

    return (
      <div style={{ backgroundColor: "green", width: "40%" }} hidden={hidden}>
        <form onSubmit={handleSubmit}>
          <input
            className="label-input"
            value={newLabel}
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
        <ul style={{ listStyle: "none" }}>
          {labels.map((label, i) => (
            //TODO: work on this.. don't wrap in div
            <li>
              <button
                style={{ marginRight: "8px" }}
                onClick={() => removeLabel(i)}
              >
                X
              </button>
              <p style={{ display: "inline" }} key={label}>
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
