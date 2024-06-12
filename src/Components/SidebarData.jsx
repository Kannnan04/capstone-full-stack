/* eslint-disable no-unused-vars */
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { MdClass } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";


export const SidebarData = [
  {
    title: 'Class',
    path: '/home',
    icon: <MdClass />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Task',
    path: '/task',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Capstone',
    path: '/teams',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Requirements',
    path: '/message',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Queries',
    path: '/queries',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
  
  


];