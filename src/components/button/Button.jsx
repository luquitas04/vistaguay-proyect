export const Button = (
  { 
    className, 
    onClick, 
    textButton,
    style
  }
  ) => {
  return (
    <button 
      style={style}
      className={className} 
      onClick={onClick}
    >
      {textButton}
    </button>
  );
};


