import React from 'react';

const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__wrap">
        {props.children}
      </div>
    </aside>
  );
};

export default Sidebar;
