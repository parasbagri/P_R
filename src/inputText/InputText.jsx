function InputText ({type = 'text', label}){
    return(
        <label>
            <span>{label}</span>
            <input type={type} />
        </label>
    )  
    
}  

export default InputText;