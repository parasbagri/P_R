function TextInput ({type = 'text', label}){
    return(
        <label>
             <span>{label}</span> {/*label ko eveluvate kiya means uski actual behaviour dikhaya  */}
            <input type={type} />
        </label>
    )  
    
}  

export default TextInput;