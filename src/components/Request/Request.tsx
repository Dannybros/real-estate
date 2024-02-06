import './Request.css'
import Modal from '../Modal/Modal'
import { ModalContainerProps } from '../Map/Map'
import { FormEvent, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import axios from 'axios';

interface FormDataType{
    name:string;
    useremail:string;
    contactemail:string;
    phone:string;
}

const formDataInitial={
    name:"",
    useremail:"",
    contactemail:"",
    phone:""
}

function Request({type}:ModalContainerProps) {

    const [isloading, setIsloading] = useState<boolean>(false);
    const {user} = useAppContext();
    const [formData, setFormData] = useState<FormDataType>(formDataInitial);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
    
        // Update the specific field in FormData
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    const handleSubmit=async(e:FormEvent)=>{
        e.preventDefault();
        setIsloading(true);
        
        if(user){

            formData.useremail = user.email;
            setFormData(formData);

            // await axios.post('http://localhost:3000/request/test', formData)
            // .then(res => console.log(res.data))
            // .catch(error => console.error('Error:', error));

    
        }else{
            alert("Please Log in first")
        }

        setIsloading(false);
    }

  return (
    <Modal small title='Request a tour' rightModal={type==="Request"}>
        <form onSubmit={handleSubmit} id="requestFormID">
            <div className='input-box mb-2'>
                <label htmlFor="sign-gname">
                    <strong>Name</strong> 
                </label>
                <input onChange={handleOnChange} className='font-default' type="text" name='name' id='request-name' placeholder='Enter Name'/>
            </div>

            <div className='input-box mb-2'>
                <label htmlFor="sign-gname">
                    <strong>Email</strong> 
                </label>
                <input onChange={handleOnChange} className='font-default' type="text" name='contactemail' id='request-email' placeholder='Enter Email'/>
            </div>

            <div className='input-box mb-2'>
                <label htmlFor="sign-gname">
                    <strong>Phone</strong> 
                </label>
                <input onChange={handleOnChange} className='font-default' type="text" name='phone' id='request-phone' placeholder='Enter phone'/>
            </div>

            <button className='sign-btn font-default mt-2' type='submit' disabled={isloading}>
                {isloading ? "loading" : "Submit"}
            </button>
        </form>

    </Modal>
  )
}

export default Request