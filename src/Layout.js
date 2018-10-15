import React from 'react';
import Header from './Header';

const componentWithLayout = PrevComponent => {
  const newComponent = () => (
    <div>
      <Header title="Introducción a React" />
      <PrevComponent />
      <div>Footer</div>
    </div>
  );

  return newComponent;
};

export default componentWithLayout;
