import React, {useState} from 'react';
import '../Styles/Subscribe.css';
import {db} from '../Firebase';

const Subscribe = ({
    placeholder,
    buttonText
}) => {

    const [state, setState] = useState ({
        email: '',
        
    });
    
    
    
    const handleChange = e => {
        setState({ email: e.target.value.trim() });
    };

    const handleSubmit = e => {
        e.preventDefault();
        

        db.collection('contact')
        .add({
            email: state
        })
        .then(() => {
            alert("We recieved you Email Id. Will Contact you Soon !! Cheers !! ");
            
        })
        .catch((error) => {
            alert(error.message);
            
        })
        setState({email:''});

        
        
    }
     
        

        return (
            <form className='subscribe' onSubmit={handleSubmit}>
                <input 
                    className="subscribe-email" name='email' type='email' placeholder={placeholder} onChange={handleChange}
                    value={state.email}
                />
                <button  
                    className='subscribe-button'> {buttonText}
                </button>
            </form>
        )
    
}


export default Subscribe;

