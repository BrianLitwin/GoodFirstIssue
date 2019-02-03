import React from 'react';
import {shallow} from "enzyme";
import {LabelPicker} from './labelPicker'
require("./testUtil").configureEnzyme();

describe('<LabelPicker />', () => {
  it('renders correctly', () => {
    const el = shallow(
      <LabelPicker
        labels={
          [
            { active: true, label: 'good first issue' },
            { active: true, label: 'help wanted' }
        ]
      }
      />
    )

    const select = el.find('select')
  })
})
