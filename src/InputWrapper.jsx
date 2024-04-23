import React from 'react'

const InputWrapper = () => {
  return (
    <form className='w-full px-2 mx-auto mt-12'>
      <div className='relative'>
        <div className='absolute top-0 bottom-0 right-3 flex'>
          <div className=''>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-10 h-8 my-4 ml-2 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13'
              />
            </svg>
          </div>
          <div className=''>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-12 h-8 my-4 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z'
              />
            </svg>
          </div>
          <div className=''>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-12 h-8 my-4 mx-2 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
              />
            </svg>
          </div>
        </div>

        <input
          type='text'
          placeholder='Type a new message here'
          className='w-full py-3 h-16 pl-4 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600'
        />
      </div>
    </form>
  )
}

export default InputWrapper
