type SignUpFormProps = {
  handleSwitchToSignIn: () => void;
};

export default function SignUpForm({ handleSwitchToSignIn }: SignUpFormProps) {
  return (
    <div className='flex flex-col justify-between w-full h-full bg-[#F1F6FF] px-5 pt-7 md:px-96 md:pt-44'>
      <div className='flex flex-col gap-10 items-center  md:gap-20 md:flex-row'>
        <div className='flex flex-col h-full md:w-3/5 w-full items-center gap-5'>
          <span className='md:text-5xl text-4xl font-semibold w-full'>
            HealthSys is the #1 software management tool used by hospitals
          </span>
          <span className='text-2xl font-medium w-full'>
            Chosen by over 100,000 hospitals worldwide to strategize, monitor,
            deploy, and oversee cutting-edge software solutions
          </span>
        </div>
        <div className='md:w-2/5 w-full h-full'>
          <div className='flex flex-col gap-3 py-7 px-5 w-full bg-white rounded-md border shadow-lg'>
            <input
              placeholder='Email address or phone number'
              className='w-full h-12 border-[#DDDFE2] rounded-md focus:border-[#AE3AED]'
            ></input>
            <input
              placeholder='Password'
              className='w-full h-12 border-[#DDDFE2] rounded-md focus:border-[#AE3AED]'
            ></input>

            <button className='w-full text-lg text-white font-semibold bg-[#AE3AED] hover:bg-[#AE3AED]/90 hover:shadow mt-4 rounded-md py-2'>
              Sign up
            </button>

            <span className='text-sm text-center select-none text-gray-400'>
              Already have an account?{' '}
              <span
                className='text-blue-400 cursor-pointer'
                onClick={() => {
                  handleSwitchToSignIn();
                }}
              >
                Sign in
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
