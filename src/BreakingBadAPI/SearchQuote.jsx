import React,{useState} from 'react'

const SearchQuote = ({getQuery}) => {

const [text, setText] = useState("");

const onChange=(q)=>{
    setText(q)
    getQuery(q)
}

    return (
        <div>
            <form>
                <input 
                    type='text'
                    placeholder="search Quotes"
                    onChange={(e)=>onChange(e.target.value)}
                    value={text}
                    style={{width:'30%',marginLeft:'30%',textAlign:'center'}}
                />
            </form>
        </div>
    )
}

export default SearchQuote;