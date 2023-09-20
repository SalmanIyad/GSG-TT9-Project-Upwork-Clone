import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import ProfileEditableProps from "./ProfileEditableProps";
import { ImPower } from 'react-icons/im'

function ProfileCard() {
  return (
    <div className="min-w-[230px] flex flex-col justify-center items-center mx-auto w-full border-[1px] border-[var(--border-base-color)] rounded-[16px] text-center overflow-hidden">
      {/* Main Profile Card */}
      <div className="w-full flex flex-col items-center hover:bg-gray-200 px-8 transition-3">
        <Image  src="/images/profilePic.jpeg" alt={'Profile Pic.'} width={60} height={60} loading="lazy" quality={100} className="rounded-full my-4"	/>
        <Link href='https://www.github.com/SalmanIyad' target="_blank"><h3 className="!text-lg font-bold underline hover:text-[#108A00] transition-3">Salman Iyad</h3></Link>
        <h3 className="!text-sm font-bold text-gray-800 mb-4">Computer Systems Eng. | Web Dev.</h3>
      </div>
      {/* Profile Completeness */}
      <div className="w-full flex flex-col items-start border-t-[1px] border-[var(--border-base-color)] hover:bg-gray-200 px-8 py-4 transition-3">
        <h3 className="!text-sm font-bold mb-4">Profile Completeness:</h3>
        <div className="w-full flex items-center justify-start gap-2">
          <span className="w-full min-w-[100px] h-1 bg-[#108A00] rounded-full"></span>
          <p className="!text-sm font-bold text-gray-800">100%</p>
        </div>
      </div>  
      {/* Available Connects */}
      <div className="w-full border-t-[1px] border-[var(--border-base-color)] hover:bg-gray-200 px-8 py-4 transition-3">
        <h3 className="!text-sm text-left font-bold text-[#108A00]">120 Available Connects</h3>
      </div>  
      {/* Editable Props */}

      <ProfileEditableProps Title='Availability Badge' SubTitle={
        <div className="flex items-center mt-2 gap-2">
          <p className="w-fit px-3 py-1 border-[1px] border-gray-600 rounded-full text-gray-600 font-bold text-[0.8rem]">
            <ImPower className="inline w-2 scale-y-150 mr-2"/>
            Available now
          </p>
          <p className="font-bold text-[1rem]">off</p>
        </div>
      }/>

      <ProfileEditableProps Title='Hours per week' SubTitle='More than 30 hrs/week'/>
      <ProfileEditableProps Title='Profile Visibility' SubTitle='Upwork Users Only'/>
      <ProfileEditableProps Title='My Categories' SubTitle={
        <ul>
          <Link href="" passHref><h3 className="!text-sm text-left font-bold text-[#108A00]">Web Development</h3></Link>
          <Link href="" passHref><h3 className="!text-sm text-left font-bold text-[#108A00]">Mobile Development</h3></Link>
        </ul>
      }/>

    </div>
  );
}

export default ProfileCard;
