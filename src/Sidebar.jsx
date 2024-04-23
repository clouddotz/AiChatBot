import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import OverviewContent from './OverviewContent'
import TransactionsContent from './TransactionsContent'
import PlansContent from './PlansContent'
import IntegrationContent from './IntegrationContent'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activePage, setActivePage] = useState('Overview')

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  const navigation = [
    {
      href: '/overview',
      name: 'New Chat',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
      )
    },
    {
      href: '/integration',
      name: 'New Chat',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
      )
    },
    {
      href: '/plans',
      name: 'Last Chat ',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z'
          />
        </svg>
      )
    },
    {
      href: '/transactions',
      name: 'Previous Chat',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3'
          />
        </svg>
      )
    }
  ]

  const handleNavigationClick = page => {
    setActivePage(page)
  }

  return (
    <div className='flex h-screen bg-gray-200'>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block w-64 bg-white border-r border-gray-300`}
      >
        <div className='p-4'>
          <nav className='fixed top-0 left-0 w-64 h-full border-r bg-gray-800 space-y-8 sm:w-64'>
            <div class='flex flex-col h-full'>
              <div className='flex-1 flex flex-col h-full overflow-auto mt-14'>
                <ul className='px-4 text-sm font-medium flex-1'>
                  {navigation.map((item, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={item.href}
                        className='flex items-center gap-x-2 px-6 py-4 text-gray-200 p-2 rounded-lg bg-gray-600 mt-4  hover:bg-gray-50 hover:text-gray-500 active:bg-gray-100 duration-150'
                        activeClassName='text-gray-500'
                        onClick={() => handleNavigationClick(item.name)}
                      >
                        <div className=''>{item.icon}</div>
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div>
                  <div className='py-4 px-4 border-t bg-slate-100 rounded-xl m-4'>
                    <div className='flex items-center gap-x-4'>
                      <img
                        src='https://randomuser.me/api/portraits/women/79.jpg'
                        className='w-12 h-12 rounded-full'
                      />
                      <div>
                        <a
                          href='javascript:void(0)'
                          className='block mt-px text-gray-600 hover:text-indigo-600 text-xs'
                        >
                          Welcome back,
                        </a>
                        <span className='block text-gray-700 text-sm font-semibold'>
                          Savigya
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className='flex flex-col flex-1 overflow-hidden'>
        <div className='bg-white border-b h-20 border-gray-300 p-4'>
          <button
            onClick={toggleSidebar}
            className='text-gray-500 focus:outline-none lg:hidden'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
          <div className='fixed top-4 right-4'>
            <div className='flex'>
              <div className='pr-2 py-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 text-red-500'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
                  />
                </svg>
              </div>
              <div className='pr-2 py-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                  />
                </svg>
              </div>
              <div className='hidden ml-4 lg:block'>
                {' '}
                <input
                  type='text'
                  placeholder='Search'
                  className='w-full py-2 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col flex-1 overflow-hidden'>
          <div className='flex-1 p-4 overflow-y-auto'>
            {activePage === 'Overview' && <OverviewContent />}
            {activePage === 'Integration' && <IntegrationContent />}
            {activePage === 'Plans' && <PlansContent />}
            {activePage === 'Transactions' && <TransactionsContent />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
