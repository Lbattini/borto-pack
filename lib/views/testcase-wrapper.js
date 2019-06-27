/** @babel */
/** @jsx etch.dom */

import etch from 'etch';
import Expandable from './expandable';
import TestcaseBox from './testcase-box';

export default class TestcaseWrapper {
  constructor(properties) {
    this.properties = properties;
    etch.initialize(this);
  }

  async destroy() {
    await etch.destroy(this);
  }

  render() {
    let { title, input, output } = this.properties;
    if (input.length >= 512) {
      input = input.slice(0, 512).concat('...');
    }
    if (output.length >= 512) {
      output = output.slice(0, 512).concat('...');
    }
    return (
      <Expandable title={title}>
        <TestcaseBox>{input}</TestcaseBox>
        <TestcaseBox>{output}</TestcaseBox>
      </Expandable>
    );
  }

  update(properties) {
    this.properties = properties;
    return etch.update(this);
  }
}