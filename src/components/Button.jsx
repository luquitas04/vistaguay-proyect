
export const Button = ({className,onClick,textButton}) => {
  return (
    <button 
    className={ className }
    onClick={ onClick }
    >
        { textButton }
    </button>
  )
}
