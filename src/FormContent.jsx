import React,{useState} from 'react'

function UseinputValue (initialState){
    const [value, setvalue] = useState(initialState);

    return{
        value,
        onChange:e=>setvalue(e.target.value),
        resetValue:()=>setvalue("")
    };
};

const FormContent = ({onSubmit}) => {

    const{resetValue , ...text} = UseinputValue("");
    return (
        <form 
        style={{justifyContent:'center'}}
        onSubmit={e =>{
            e.preventDefault();
            onSubmit(text.value);
            resetValue();
        }}
        >
            <input {...text}/>
        </form>
    )
}

export default FormContent
