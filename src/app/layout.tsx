"use client"

import '../styles/globals.css'

import { Inter } from '@next/font/google';
import Header from '@/components/Header';
import Menu from '@/components/Menu/index';
import * as React from 'react';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';

import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Marcio Junior',
    template: '%s | Marcio Junior'
  },
  robots: {
    index: true,
    follow: true,
  },
  description: "dev Nub",
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const withLink = (to: string, children: React.ReactNode) => <Link href={to}>{children}</Link>;

const actions = [
  { icon: withLink("/Xp", <PermIdentityIcon />), name: "Experiencias" },
  { icon: withLink("/users", <FileCopyIcon />), name: "Users" }
];
  
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-[#232135]">
        <div className="h-screen w-full  flex items-center justify-center p-4">
          <div className=" overflow-hidden border border-[#323232] w-full max-w-[1480px] h-full max-h-[1070px] aspect-video shadow-md shadow-black/80 rounded-lg flex flex-col ">
            <Header />

          <div className="static flex h-full w-full ">
              <div className="flex flex-col items-start px-6 ">
              <Menu />
              </div>

              <div className=" max-w-full w-full">
                {children}
              </div>
           </div>
           </div>
 
          <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
              ariaLabel="SpeedDial controlled open example"
              sx={{ position: 'absolute', bottom: 16, right: 16 }}
              icon={<SpeedDialIcon />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={handleClose}
                />
              ))}
            </SpeedDial>
           </Box>
        </div>
      </body>
    </html>
  )
}
