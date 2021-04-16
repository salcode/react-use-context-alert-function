export default function Button({children, sendAlert}) {
  return (
    <button onClick={sendAlert}>
      {children}
    </button>
  );
}
