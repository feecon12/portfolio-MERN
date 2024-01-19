import { NavLink } from 'react-router-dom'
import {Linkedin, Github, PinInterest, DribbleIcon, Twitter} from './icon'

const Header = () => {
    return (
        <header className='w-full px-32 py-8 font-medium text-dark flex items-center justify-between shadow-sm'>
            {/* Navigation links starts */}
            <nav>
                <ul>
                    <NavLink to={'/home'} className='mr-4'>Home</NavLink>
                    <NavLink to={'/about'} className='mx-4'>About</NavLink>
                    <NavLink to={'/contact'} className='mx-4'>Contact</NavLink>
                    <NavLink to={'/project'} className='ml-4'>Project</NavLink>
                </ul>
            </nav>
            <nav className='flex'>
                <a href="https://github.com/feecon12" className='mr-3 w-6'>
                    <Github/>
                </a>
                <a href="https://www.linkedin.com/in/feecon-behera" className='mx-3 w-6'>
                    <Linkedin/>
                </a>
                <a href="https://www.linkedin.com/in/feecon-behera" className='mx-3 w-6'>
                    <PinInterest/>
                </a>
                <a href="https://www.linkedin.com/in/feecon-behera" className='mx-3 w-6'>
                    <DribbleIcon/>
                </a>
                <a href="https://www.linkedin.com/in/feecon-behera" className='mx-3 w-6'>
                    <Twitter/>
                </a>

                {/* <button type='submit' className='ml-3'>
                    Dark/Light
                </button> */}
            </nav>

        </header>
    )
}

export default Header