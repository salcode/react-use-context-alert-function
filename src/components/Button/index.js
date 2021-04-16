import {useContext} from 'react';
import {AlertContext} from '../../contexts/alert-context';

export default function Button({children}) {
  const sendAlert = useContext(AlertContext);
  return (
    <button onClick={sendAlert}>
      {children}
    </button>
  );
}
