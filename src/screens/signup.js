import ABInput from '../components/ABInput';
import ABButton from '../components/ABButton';
import { useState } from 'react';
import { fbSignUp } from '../config/firebasemethod';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [model, setModel] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
  });

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  const signUpUser = () => {
    console.log(model);
    fbSignUp(model)
      .then((res) => {
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex justify-center items-center ">
        <div className='border border-black rounded-lg p-7 w-[25%]  text-center'>
          <div className='p-3'>
            <p className='text-5xl font-bold'>Sign Up</p>
          </div>
          <div className='my-4'>
            <ABInput label='Full Name'
              value={model.fullName}
              onChange={(e) => { fillModel('fullName', e.target.value) }} />
          </div>
          <div className='my-4'>
            <ABInput label='User Name'
              value={model.userName}
              onChange={(e) => { fillModel('userName', e.target.value) }} />
          </div>
          <div className='my-4'>
            <ABInput label='Email'
              value={model.email}
              onChange={(e) => { fillModel('email', e.target.value) }} />
          </div>
          <div className='my-4'>
            <ABInput label='Password'
              type='password'
              value={model.password}
              onChange={(e) => { fillModel('password', e.target.value) }} />
          </div>
          <div className='my-4 '>
            <ABButton onClick={signUpUser} className='bg-gradient-to-r from-sky-400 to-blue-900 hover:from-lime-300 hover:to-green-800' label='Sign Up' />
          </div>
          <div>
            <p className='py-3'>Already Have An Account?</p>
            <Link className='font-bold text-lg' to={'/login'}>  Log in</Link>
          </div>
        </div>
      </div>
    </>
  );
}
