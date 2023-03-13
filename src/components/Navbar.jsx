import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo ,menu ,close, mobile} from '../assets'



const Navbar = () => {


  const [active , setActive] = useState('') 
  const [toggle, setToggle] = useState(false)


  return (
    <nav
       className={`${styles.paddingX} w-full  flex items-center py5 fixed top-0 z-20 `}
    >
      <div
       className='w-full flex justify-between items-center max-w-7xl mx-auto h-10' 
      >
        <Link
          to='/'
          className=' flex items-center gap-2'
          onClick={()=>{
            setActive("")
            window.scrollTo(0,0)
          }}
        >
{/* <img src="src\assets\logo.png" alt="" className='w-9 h-9 rounded-full'   /> */}

<p className='text-white font-bold cursor-pointer text-3xl '>
  solution <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 ">AI</span>
</p>

        </Link>
<ul className='list-none hidden sm:flex flex-row gap-10'>
  {navLinks.map((link)=>(
    <Link to ={`/${link.title}`}>
      <li
       key={link.id}
    className='hover:text-white text-gray-400 font-bold tracking-wide'
      >
        {link.title}
      </li>
      </Link>
  ))

  }


</ul>

<div className='sm:hidden flex flex-1 justify-end items-center'>
  <img src={toggle ?close : menu} alt=""
    className='w-[28px] h-[28px] object-contain cursor-pointer'
    onClick={()=>setToggle(!toggle)}
  />
<div className={`${!toggle? "hidden": "flex" } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl` }>
<ul className='list-none flex ju items-start flex-col gap-4'>
  {navLinks.map((link)=>(
    
      <li
       key={link.id}
       className={`${active === link.title? "text-white" :"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
      
      >
     
      </li>
     
  ))

  }


</ul>

</div>
</div>

      </div>

    </nav>
    )
}

export default Navbar