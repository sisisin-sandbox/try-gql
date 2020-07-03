import React from 'react';

export const Sample: React.FC = () => {
  React.useEffect(() => {
    fetch('http://localhost:3000/sample')
      .then((r) => r.text())
      .then((r) => {
        console.log(r);
      });
  });
  return <div>ok</div>;
};
