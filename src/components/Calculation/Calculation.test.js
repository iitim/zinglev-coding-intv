import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Calculation from './Calculation';

describe('Calculation', () => {
  let props;
  let shallowCalculation;
  let renderedCalculation;
  let mountedCalculation;

  const shallowTestComponent = () => {
    if (!shallowCalculation) {
      shallowCalculation = shallow(<Calculation {...props} />);
    }
    return shallowCalculation;
  };

  const renderTestComponent = () => {
    if (!renderedCalculation) {
      renderedCalculation = render(<Calculation {...props} />);
    }
    return renderedCalculation;
  };

  const mountTestComponent = () => {
    if (!mountedCalculation) {
      mountedCalculation = mount(<Calculation {...props} />);
    }
    return mountedCalculation;
  };  

  beforeEach(() => {
    props = {};
    shallowCalculation = undefined;
    renderedCalculation = undefined;
    mountedCalculation = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
