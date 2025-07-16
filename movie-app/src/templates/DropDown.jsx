

function DropDown({title,options,setCategory}) {
  return (
    <div className="select">
    <select defaultValue="0" onChange={setCategory} name="format" id="format">
      <option value="0" disabled>
       {title}
      </option>
      {options.map((option,index)=>(
        <option key={index} value={option}>{option.toUpperCase()}</option>
      ))}
    </select>
  </div>  
  )
}

export default DropDown