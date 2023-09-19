import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center my-32'>
      <p className='text-8xl text-[#108A00]'>404</p>
      <h3>Page Not Found</h3>
      <p>Could not find requested resource</p>
      <Link className='underline text-[#108A00] hover:text-[#225d13] hover:no-underline transition-all duration-100' href="/">Return Home</Link>
    </div>
  )
}