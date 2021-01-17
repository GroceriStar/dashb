import React from 'react';
import Steps from 'components/Steps/Steps';
import FirstStep from './Steps/FirstStep';

const steps = [
  {
    title: 'First',
    content: <FirstStep />
  },
  {
    title: 'Second',
    content: 'Second-content'
  },
  {
    title: 'Thirld',
    content: 'Last-content'
  },
  {
    title: 'Forth',
    content: 'Last-content'
  },
  {
    title: 'Fifth',
    content: 'Last-content'
  }
];

const StepsPage = () => {
  return <Steps steps={steps} />;
};

export default StepsPage;
