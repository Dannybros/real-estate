import { useState, useEffect } from 'react'
import { ModalContainerProps } from '../../components/Map/Map'
import {jwtDecode} from 'jwt-decode'
import Modal from '../../components/Modal/Modal'
import './Sign.css'
import { UserType, useAppContext } from '../../context/AppContext'

function SignIn({type}:ModalContainerProps) {
    const [loginTab, setloginTab] = useState<boolean>(true);
    const {setUser, modalType, toggleModal} = useAppContext();

    const handleCallBackResponse = async(response:any) =>{
        const userObject = jwtDecode(response.credential);

        // google login
        // must upload the profile to db
        
        
        setUser(userObject as UserType);
        toggleModal(modalType);
        // sub will be id of user logged to google account
    }   

    useEffect(() => {
        // golbal google
        google.accounts.id.initialize({
            client_id:"786983690774-1vktlohj5aaqhshv82np74btrad5vuag.apps.googleusercontent.com",
            callback: handleCallBackResponse
        });

        const googleLoginDiv = document.getElementById("googleSignInDiv")!;

        google.accounts.id.renderButton(googleLoginDiv, {
            theme:'outline',
            size:"large",
            width:400,
            type:"standard",
        });

    }, [])
    

    const toggleTab = ()=>{
        setloginTab((tab)=>!tab);
    }

  return (
    <Modal small title='Welcome to Zion' rightModal={type==="SignIn"}>
        <ul className='sign-tabs'>
            <li className={`${loginTab && 'active'}`} onClick={toggleTab}>Sign In</li>
            <li className={`${!loginTab && 'active'}`} onClick={toggleTab}>New Account</li>
        </ul>
        <form action="" className='sign-form'>
            <div className={`sign-wrapper ${loginTab && 'hide'}`}>
                <div className='input-box'>
                    <label htmlFor="sign-fname">
                        <strong>Family Name</strong> 
                    </label>
                    <input className='font-default' type="text" name='sign-fname' id='sign-fname' placeholder='Enter Family Name'/>
                </div>
            </div>
            <div className={`sign-wrapper ${loginTab && 'hide'}`}>
                <div className='input-box'>
                    <label htmlFor="sign-gname">
                        <strong>Given Name</strong> 
                    </label>
                    <input className='font-default' type="text" name='sign-gname' id='sign-gname' placeholder='Enter Name'/>
                </div>
            </div>
            <div className='input-box'>
                <label htmlFor="sign-email">
                    <strong>Email</strong> 
                </label>
                <input className='font-default' type="text" name='sign-email' id='sign-email' placeholder='Enter email'/>
            </div>
            <div className='input-box'>
                <label htmlFor="sign-pw">
                    <strong>Password</strong> 
                </label>
                <input className='font-default' type="text" name="sign-pw" id='sign-pw' placeholder='Create password'/>
                {!loginTab &&
                    <ul className='font-small'>
                        <li> At least 8 characters</li>
                        <li> Mix of letters and numbers</li>
                    </ul>
                }
            </div>
            <button className='sign-btn font-default'>
                {loginTab ? "Sign In" : "Submit"}
            </button>
        </form>
        {loginTab &&
            <p className='forget-pw'> Forgot Password ?</p>
        }

        <div className='divider'></div>
        <div className='google-sign-box'>
            <div id='googleSignInDiv'></div>
        </div>

    </Modal>
  )
}

export default SignIn