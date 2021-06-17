import React from 'react';
import TextField from '@material-ui/core/TextField';


const Input = ({ name,placeholder, value,onChange,type,style,error,id}) => {
    return ( 
        <div>
            <Input
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              type={type}
              style={style}
              id={id}
            />
            {error && <div>{error}</div>}
          </div>
     );
}

export default Input;