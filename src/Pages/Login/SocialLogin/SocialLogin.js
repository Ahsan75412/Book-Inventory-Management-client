
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const [signInWithGithub , user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = 
        
            <p  className='text-danger text-center'>Error: {error?.message}</p>
        

    }

    if (user) {
        navigate('/home');
    }






    return (
        <div>
               <div className='d-flex align-items-center'>
                <div style={{ height: '1.5px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1.5px' }} className='bg-primary w-50'></div>
            </div>

            {errorElement}

            <div>
                <button 
                    onClick={() => signInWithGoogle()}

                    className='btn btn-outline-warning w-50 d-block mx-auto my-2'>
                    <FontAwesomeIcon icon="fa-brands fa-google" />
                    <span className='px-2'> Google Sign In</span>
                </button>
            </div>
        
          
            
        
          
        </div>
    );
};

export default SocialLogin;