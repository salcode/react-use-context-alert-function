import React from 'react';

function sayHello() {
  alert('hello');
}

export default function Body({children}) {
  return (
      <div className="my-body">
        {children}
      </div>
  );
}
