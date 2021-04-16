import React from 'react';
import {AlertContext} from '../../contexts/alert-context';

function sayHello() {
  alert('hello');
}

export default function Body({children}) {
  return (
    <AlertContext.Provider value={sayHello}>
      <div className="my-body">
        {children}
      </div>
    </AlertContext.Provider>
  );
}
