
export const Input = ({ className,placeholder,type,value,onChange,name,id }) => {
  return (
    <input 
    className={ className }
    placeholder={ placeholder } 
    type={ type } 
    value={ value } 
    onChange={onChange }
    name={name} 
    id={id}
    />  
  )
}
