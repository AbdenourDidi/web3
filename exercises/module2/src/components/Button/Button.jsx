const Button = ({ delta, changeCount, text }) => {
  const handleClick = (e) => {
    let nombre = parseInt(e.target.dataset.delta);
    changeCount(nombre);
  };
  return (
    <button data-delta={delta} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
