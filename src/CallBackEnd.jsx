import React,{useState,useEffect,Component} from 'react'
import https from './Services/httpServer';
import config from './Services/config.json';
import { toast } from 'react-toastify';

class CallBackEnd extends Component {
    state = { 
        posts:[]
     }
    
async componentDidMount() {
    const {data:posts} = await https.get(config.api);
    this.setState({ posts });
}    

handleAdd= async() => {
    toast.success('SuccessFully Added the Element');
    const obj = {id:101,title:'self Made with self Taught'};
    const {data:post} = await https.post(config.api,obj)

    const posts = [post,...this.state.posts];
    this.setState({ posts });
}

handleUpdate = async post =>{

    post.title = 'Upated state';
    await https.put(config.api + '/' + post.id,post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = {...post}
    this.setState({posts});
}



handleDelete=async post=>{
    toast.error('error display boooooom') 
    const originalPost = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
    // making the function at first and calling the api at last can make the function faster.
    // the delete button is removed within a milisecond...does not take a second.
    try{
        https.delete(config.api + '/' + post.id );
    }
    catch(e){
    if (e.response && e.response.status === 404)      
    // Expected errors
    alert('this post is deleted already')
    else{
        console.log('logging the error',e);
        alert('An unexpected error occured');
    }
    // Unexpected Errors
      this.setState({posts:originalPost});
    }
};

    render() { 
        return ( 
            <div>
            <button onClick={this.handleAdd}>Add</button>
            <br/>
        {this.state.posts.map((i)=>{
            return(
                <div key={i.id}>
                <span>{i.id}</span>
                <p>{i.title}</p>
            <button style={{background:'red'}} onClick={this.handleDelete}>Delete</button>
                </div>
            )
        })}
            </div>
         );
    }
}

export default CallBackEnd;