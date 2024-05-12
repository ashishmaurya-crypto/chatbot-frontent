import React, { useState } from 'react'
import { useLoginMutation } from '../../endpoints/apislice'
import './login.scss';
import { Navigate } from 'react-router-dom';
import { Button, Input } from '../../components/Inputs';


export default function Login() {
  const [loginTrigger] = useLoginMutation();
  // 
  const onhandleLogin = () => {

  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here, for demonstration purposes, let's just log the values
    console.log('Username:', username);
    console.log('Password:', password);

    const payload = {
      "username": username,
      "password": password
    }

    loginTrigger(payload).unwrap()
      .then((res) => {
        console.log('result', res);
        localStorage.setItem("token", res?.token);
        <Navigate to="/chat/dashboard" />

      })
      .catch((err) => {
        console.log('error', err)
      })
  };

  return (
    <div className='login-container'>
      <div className='login-header-container'>
        {/* <div className='login-header-content-container'>
          <div className='login-header-content-logo-container'>
            <h3>“Connect, Converse,</h3>
            <h3>and Create Memories with </h3>
            <h1>Chat Bubble</h1>
            <h3>Your Gateway to Global Conversations!” 😊</h3>
          </div>
        </div> */}
      </div>
      <div className='login-form-container'>
        <div className='login-top-image-container'>
        </div>
        <div className='login-form-content-container'>
          <Input
            id='username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label='Username'
          />
          <Input
            id='username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label='Password'
          />
          <Button
            text={"Login"}
            onClick={handleSubmit}
          />

          <div>
            <span></span>
            <span>You can connect with</span>
            <span></span>
          </div>
          <div>
            <span style={{ marginRight: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" /><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" /><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" /><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" /></svg>
            </span>
            <span style={{ marginRight: '10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/></svg>
            </span>
            <span style={{ marginRight: '10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"/></svg>
            </span>
          </div>
          <div>
            <span>Don't have an account?</span><span>Sign Up here</span>
          </div>

        </div>

      </div>

    </div>
  );
}
