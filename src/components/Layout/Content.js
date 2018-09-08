import React from 'react';

const Content = (props) => {
  return (
    <div className="content">
      <div className="content__wrap wrap">
        {props.children}
      </div>
    </div>
  );
};

export default Content;
