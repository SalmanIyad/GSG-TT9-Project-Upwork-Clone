// "use client"

import '../../styles/globals.css'
import Input from '@mui/joy/Input';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Box, Button } from '@mui/joy';
import TextSeprator from '../common/TextSeprator';
import ContinueWith_Button from '../general/Button'
import Link from 'next/link';

export default function Login() {
  return (
    <div className='mx-auto sm:min-w-full lg:min-w-[510px] lg:max-w-[560px] sm:border-0 md:border-[1px] border-[var(--border-base-color)] rounded-[16px] text-center sm:px-4 md:px-6'>
      <Box className='w-full sm:px-4 md:px-20 py-4'>
        <h3 className='text-primary text-center my-6 font-medium'>Log in to Upwork</h3>  
        <Input
          size="md"
          startDecorator={<PersonOutlinedIcon />}
          placeholder="Username or Email"
          type="email"
        />
        <div className='h-8' />
        <ContinueWith_Button content="Continue with Email" />
        <TextSeprator content='or'/>
        <ContinueWith_Button content="Continue with Google" BgColor="#4285F4" />
        <div className='h-4' />
        <ContinueWith_Button content="Continue with Apple" BgColor="transparent" />
        <div className='h-16' />
        <TextSeprator content="Don't have an Upwork account?" />
        <Link href={'/signup'}>
          <Button
            sx={{
              backgroundColor: "transparent", 
              borderRadius: '9999px',
              width: '204px',
              border: '2px #108A00 solid',
              color: '#108A00',
              '&:hover': {
                backgroundColor: "transparent",
              },
              '&:focus': {
                border: '2px ##108A00 solid',
              },
            }}
          >
            Sign Up 
          </Button>
        </Link>
        <div className='h-4' />
      </Box>
    </div>
  )
}
