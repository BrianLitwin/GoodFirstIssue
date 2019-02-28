import React from "react";

export class SelectDate extends React.Component {
  render() {
    const { value, setDate } = this.props;
    return (
      <div>
        <form>
          <label>Updated After: </label>
          <input
            type="date"
            min="2016-01-01"
            value={value}
            onChange={setDate}
          />
        </form>
      </div>
    );
  }
}
