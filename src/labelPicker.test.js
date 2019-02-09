import React from 'react';
import {shallow} from "enzyme";
import {LabelPicker} from './labelPicker'

require('./testUtil').configureEnzyme()

describe("<LabelPicker />", () => {

  it("renders labels correctly", () => {
    const el = shallow(
      <LabelPicker
        labels={["good first issue", "help wanted"]}
      />
    )
    expect(el.find("li").length).toBe(2)
  })

  it.only("renders the newLabel value passed in by props", () => {

    const el = shallow(
      <LabelPicker
        labels={["good first issue", "help wanted"]}
        newLabel={"new label"}
      />
    )

    expect(el.find('label-input').text()).toBe('new label')
  })

})
