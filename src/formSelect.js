import React from "react";
import { today } from "./util";

export function DateSelect(props) {
  return (
    <form>
      <label style={{ marginRight: "5px" }}>Max Date</label>
      <input
        type="date"
        id="start"
        name="trip-start"
        value={today()}
        min="2018-01-01"
        max="2018-12-31"
      />
    </form>
  );
}

/*
 * Base class used to build selects
 */

function SelectForm(props) {
  function handleChange(e) {
    props.handleChange(e.target.options[e.target.selectedIndex].value);
  }

  return (
    <React.Fragment>
      <form>
        {props.label != undefined ? (
          <label style={{ marginRight: "5px" }}>{props.label}</label>
        ) : (
          <label />
        )}
        <select onChange={handleChange}>
          {props.options.map(option => (
            <option key={option.value} value={option.value}>{option.html}</option>
          ))}
        </select>
      </form>
    </React.Fragment>
  );
}

export function LanguagePicker(props) {
  const options = [
    "ActionScript",
    "C",
    "C#",
    "C++",
    "Clojure",
    "CoffeeScript",
    "CSS",
    "Go",
    "Haskell",
    "HTML",
    "Java",
    "JavaScript",
    "Lua",
    "Matlab",
    "Objective-C",
    "Perl",
    "PHP",
    "Python",
    "R",
    "Ruby",
    "Scala",
    "Shell",
    "Swift",
    "TeX",
    "Vim script"
  ].map(mapOptions);

  options.unshift({ value: "", html: "Choose Language" });
  return <SelectForm options={options} handleChange={props.handleChange} />;
}

export function MinGoodFirstIssues(props) {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(mapOptions);
  return (
    <SelectForm
      label="Min Good First Issues"
      options={options}
      handleChange={props.handleChange}
    />
  );
}

export function MinStars(props) {
  const options = [0, 1, 2, 3, 4, 5, 10, 25, 50, 100, 250, 500, 1000].map(
    mapOptions
  );
  return (
    <SelectForm
      label="Min Stars"
      options={options}
      handleChange={props.handleChange}
    />
  );
}

function mapOptions(x) {
  return { value: x, html: x };
}
