import React from 'react';

export default function Sidebar({children, sendAlert}) {

  const childrenWithSendAlert = React.Children.map(
    children,
    (child) => {
      if (! React.isValidElement(child)) {
        return child;
      }
      return React.cloneElement(
        child,
        { sendAlert }
      );
    }
  );

  return (
    <div className="my-side">
      {childrenWithSendAlert}
    </div>
  );
}
