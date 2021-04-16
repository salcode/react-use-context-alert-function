import React from 'react';

function sayHello() {
  alert('hello');
}

export default function Body({children}) {

  const childrenWithSendAlert = React.Children.map(
    children,
    (child) => {
      if (! React.isValidElement(child)) {
        return child;
      }
      return React.cloneElement(
        child,
        { sendAlert: sayHello }
      );
    }
  );

  return (
    <div className="my-body">
      {childrenWithSendAlert}
    </div>
  );
}
