// "use client"

import '../../styles/globals.css'
import Input from '@mui/joy/Input';
import { Box, Button } from '@mui/joy';
import TextSeprator from '../common/TextSeprator';
import ContinueWith_Button from '../general/Button'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import CountriesList from '@/constants/CountriesList';
import Autocomplete from '@mui/joy/Autocomplete';
import Checkbox from '@mui/joy/Checkbox';
import Link from 'next/link';

export default function Login() {
  return (
    <div className='mx-auto sm:min-w-full md:max-w-[460px] lg:min-w-[610px] lg:max-w-[660px] sm:border-0 md:border-[1px] border-[var(--border-base-color)] rounded-[16px] sm:p-4 md:p-6'>
      <Box className='w-full py-4'>
        <h3 className='text-primary text-center my-6 font-medium'>Sign up to find work you love</h3>  
        <ContinueWith_Button content="Continue with Apple" BgColor="transparent" />
        <div className='h-2' />
        <ContinueWith_Button content="Continue with Google" BgColor="#4285F4" />
        <TextSeprator content='or'/>
        <div className="w-full flex sm:flex-col md:flex-row gap-4">
            <Input
                size="md"
                placeholder="First Name"
                type="text"
                sx={{
                    minWidth: 'calc(50% - 0.5rem)',
                    maxWidth: '100%',
                    '&:focus-within': {
                        borderColor: '#fe8686',
                    },
                }}  
            />
            <Input
                size="md"
                placeholder="Last Name"
                type="text"
                sx={{
                    minWidth: 'calc(50% - 0.5rem)',
                    maxWidth: '100%'
                }}  
            />
        </div>
        <div className='h-4' />
        <Input
            size="md"
            placeholder="Email"
            type="email"
        />
        <div className='h-4' />
        <Input
            size="md"
            placeholder="Password (8 or more characters)"
            type="password"
        />
        <div className='h-4' />

        {/* <Select placeholder="Country">
            {Object.values(CountriesList).map((countryName, index) => (
                <Option key={index} value={countryName}>
                    {countryName}
                </Option>
            ))}
        </Select> */}

        <Autocomplete
            placeholder="Country"
            options={CountriesList}
        />
        <div className='h-6' />
        <Checkbox label="Send me helpful emails to find rewarding work and job leads." color="success" defaultChecked />
        <div className='h-6' />
        <Checkbox label="Yes, I understand and agree to the Upwork Terms of Service , including the User Agreement and Privacy Policy ." color="success" defaultChecked />
        <div className='h-6' />
        <ContinueWith_Button content="Create my account" BgColor="#108A00" />
        <h6 className='text-center my-6 font-medium'>Already have an account? {' '}
          <Link href={'/login'} className='text-green-700 hover:underline'>Log In</Link>
        </h6>  
      </Box>
    </div>
  )
}
