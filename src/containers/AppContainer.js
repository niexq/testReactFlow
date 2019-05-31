//@flow

import React, { Component } from 'react';
import {fun1} from '../../common/test';

export default class AppContainer extends Component<{}> {
  constructor(props: Object) {
    super(props);
    fun1('1');
  }
  render() {
    return (
      <div style={{ background: 'red', width: '100%', height: '100%' }}>
        测试内容
      </div>
    );
  }
}
