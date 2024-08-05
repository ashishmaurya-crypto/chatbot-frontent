import React from 'react'
import Lottie from 'lottie-react';
import animationData from './../../components/Assets/welocme.json'; // Adjust the path to your animation JSON file
import { useUserDetailQuery } from '../../endpoints/apislice';
import { capitalizeFirstLetter } from '../../services/functions';

const LottieAnimation = () => {
  return (
      <Lottie animationData={animationData} loop={true} style={{ width: '50%', height: '50%' }} />
  );
};

export default function Welcome() {
  const { data: userDetail } = useUserDetailQuery({}, { refetchOnMountOrArgChange: true });
  return (
    <div className='welcome-container'>
        <LottieAnimation />
        <p>{`Welcome ${userDetail?.userName ? capitalizeFirstLetter(userDetail?.userName, 0) : ""} to the Bubble chat app!`}</p>
    </div>
  )
}
