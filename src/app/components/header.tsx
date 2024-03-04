export default function Header() {
  return (
    <div className='flex items-center gap-2 w-full h-14 md:px-96 px-5 bg-white shadow border-b-1 z-20'>
      <div className='w-6 h-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 128 128'
          className='text-primary'
          width='24'
          height='24'
        >
          <path
            d='M128,64.2c0,33-25.8,60.9-58.4,63.7C31,131.6-2.8,98.4.2,59.7,1.6,36.1,17.1,14.5,38.8,5.3c41.6-18.2,89.4,13,89.3,58.7v.2Z'
            fill='#AE3AED'
            strokeWidth='0'
          ></path>
          <path
            d='M63.9,45.2c-1-.1-1.7-1.3-2.5-2.1-1.3-1.4-3-2.5-4.8-3.3-11-4.8-22.9,2.9-23.3,15.6-1.4,16.2,16.1,31,25.5,36.3,1.9,1.2,4.3,2.2,6.7,1.6,13-4.8,37.6-27.4,26.2-47.1-3.5-5.7-10.1-8.6-16.6-7.4-4,.6-7.1,2.7-9.2,5.1-.6.6-1.2,1.4-2,1.5h0Z'
            fill='#FFFFFF'
            strokeWidth='0'
          ></path>
        </svg>
      </div>

      <span className='text-2xl font-normal'>HealthSys</span>
    </div>
  );
}
