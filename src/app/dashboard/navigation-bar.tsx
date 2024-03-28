import React, { useState } from 'react';
import './style/navigation-bar.css';
import {
  Avatar,
  Drawer,
  List,
  Stack,
  Toolbar,
  ListItemButton,
  ListItemIcon,
  SvgIcon,
  Collapse,
} from '@mui/material';

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
        variant='permanent'
        sx={{
          width: '15%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '15%',
            boxSizing: 'border-box',
            borderRight: '0px',
            backgroundColor: '#212B37',
          },
        }}
      >
        <List disablePadding>
          <Toolbar
            sx={{
              marginBottom: '20px',
            }}
          >
            <Stack
              sx={{ width: '100%' }}
              direction='row'
              justifyContent='center'
            >
              {/* <Avatar src={} alt={} /> */}
            </Stack>
          </Toolbar>
          {
            <>
              <ListItemButton
                onClick={() => setOpen(!open)}
                sx={{
                  '&: hover': {
                    backgroundColor: '#606D83',
                  },
                  paddingY: '12px',
                  paddingX: '24px',
                }}
              >
                <SvgIcon>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                </SvgIcon>
                <p className='px-5 text-white'>Dashboard</p>
                {open ? (
                  <SvgIcon>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6 text-white'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5'
                      />
                    </svg>
                  </SvgIcon>
                ) : (
                  <SvgIcon>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6 text-white'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m4.5 18.75 7.5-7.5 7.5 7.5'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m4.5 12.75 7.5-7.5 7.5 7.5'
                      />
                    </svg>
                  </SvgIcon>
                )}
              </ListItemButton>
              <Collapse in={open} timeout='auto'>
                <List>
                  <ListItemButton
                    sx={{
                      '&: hover': {
                        backgroundColor: '#606D83',
                      },
                      paddingY: '12px',
                      paddingX: '24px',
                    }}
                  >
                    <p className='px-2 text-white'>Show all requests</p>
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      '&: hover': {
                        backgroundColor: '#606D83',
                      },
                      paddingY: '12px',
                      paddingX: '24px',
                    }}
                  >
                    <p className='px-2 text-white'>My requests</p>
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      '&: hover': {
                        backgroundColor: '#606D83',
                      },
                      paddingY: '12px',
                      paddingX: '24px',
                    }}
                  >
                    <p className='px-2 text-white'>My team's requests</p>
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          }
        </List>
      </Drawer>
    </>
    // <div className='navigation flex flex-col w-64 h-full border-r'>
    //   <div className='flex flex-col justify-start items-center'>
    //     <h1 className='text-base text-center cursor-pointer font-bold border-b border-gray-100 px-5 py-5 w-full'>
    //       Healthcare Management System
    //     </h1>
    //     <div className=''>
    //       <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg  px-5'>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='none'
    //           viewBox='0 0 24 24'
    //           strokeWidth={1.5}
    //           stroke='currentColor'
    //           className='w-6 h-6 group-hover:text-white'
    //         >
    //           <path
    //             strokeLinecap='round'
    //             strokeLinejoin='round'
    //             d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
    //           />
    //         </svg>
    //         <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
    //           Dashboard
    //         </h3>
    //       </div>
    //     </div>
    //     <div className=''>
    //       <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto px-5'>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='none'
    //           viewBox='0 0 24 24'
    //           strokeWidth={1.5}
    //           stroke='currentColor'
    //           className='w-6 h-6 group-hover:text-white'
    //         >
    //           <path
    //             strokeLinecap='round'
    //             strokeLinejoin='round'
    //             d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
    //           />
    //         </svg>
    //         <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
    //           Dashboard
    //         </h3>
    //       </div>
    //     </div>
    //     <div className=''>
    //       <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto px-5'>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='none'
    //           viewBox='0 0 24 24'
    //           strokeWidth={1.5}
    //           stroke='currentColor'
    //           className='w-6 h-6 group-hover:text-white'
    //         >
    //           <path
    //             strokeLinecap='round'
    //             strokeLinejoin='round'
    //             d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
    //           />
    //         </svg>
    //         <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
    //           Dashboard
    //         </h3>
    //       </div>
    //     </div>
    //     <div className=''>
    //       <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto px-5'>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='none'
    //           viewBox='0 0 24 24'
    //           strokeWidth={1.5}
    //           stroke='currentColor'
    //           className='w-6 h-6 group-hover:text-white'
    //         >
    //           <path
    //             strokeLinecap='round'
    //             strokeLinejoin='round'
    //             d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
    //           />
    //         </svg>
    //         <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
    //           Dashboard
    //         </h3>
    //       </div>
    //     </div>
    //     <div className=''>
    //       <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto px-5'>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='none'
    //           viewBox='0 0 24 24'
    //           strokeWidth={1.5}
    //           stroke='currentColor'
    //           className='w-6 h-6 group-hover:text-white'
    //         >
    //           <path
    //             strokeLinecap='round'
    //             strokeLinejoin='round'
    //             d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
    //           />
    //         </svg>
    //         <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
    //           Dashboard
    //         </h3>
    //       </div>
    //     </div>
    //     <div className=''>
    //       <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto px-5'>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='none'
    //           viewBox='0 0 24 24'
    //           strokeWidth={1.5}
    //           stroke='currentColor'
    //           className='w-6 h-6 group-hover:text-white'
    //         >
    //           <path
    //             strokeLinecap='round'
    //             strokeLinejoin='round'
    //             d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
    //           />
    //         </svg>
    //         <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
    //           Dashboard
    //         </h3>
    //       </div>
    //     </div>
    //     <div className=''>
    //       <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto px-5'>
    //         <svg
    //           xmlns='http://www.w3.org/2000/svg'
    //           fill='none'
    //           viewBox='0 0 24 24'
    //           strokeWidth={1.5}
    //           stroke='currentColor'
    //           className='w-6 h-6 group-hover:text-white'
    //         >
    //           <path
    //             strokeLinecap='round'
    //             strokeLinejoin='round'
    //             d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
    //           />
    //         </svg>
    //         <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
    //           Dashboard
    //         </h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
