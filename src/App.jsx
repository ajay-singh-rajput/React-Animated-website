import React, { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Courser } from './components/Cursor'
import MultiLayerParallax from './components/MultiLayerParallax'
import Gsap from './components/Gsap'
import FramerMotion from './components/FramerMotion'

const App = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [hoverOnDribble, setHoverOnDribble] = useState(false)
  const [hoverOnLogo, setHoverOnLogo] = useState(false)
  const [hoverOnInsta, setHoverOnInsta] = useState(false)
  const [hoverOnYT, setHoverOnYT] = useState(false)
  const [hoverOnIN, setHoverOnIN] = useState(false)


  const logoContainerRef = useRef(null);
  const dribbleContainerRef = useRef(null);
  const instaContainerRef = useRef(null);
  const YTContainerRef = useRef(null);
  const INContainerRef = useRef(null);
  // const [size, setsize] = useState(40)
  const size = isHovered ? 400 : 0


  // # mouse move 
  let cursorSize = isHovered ? 0 : hoverOnLogo ? 60 : 40;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }
  // cursorSize = hoverOnLogo ? 60 :40

  const smoothOption = { damping: 50, stiffness: 300, mass: 0.4 }
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOption),
    y: useSpring(mouse.y, smoothOption)
  }



  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    if (!hoverOnLogo && !hoverOnDribble && !hoverOnYT && !hoverOnIN && !hoverOnInsta) {
      mouse.x.set(clientX - cursorSize / 2)
      mouse.y.set(clientY - cursorSize / 2)
      setMousePosition({ x: (clientX - size / 2), y: (clientY - size / 2) })
    } else {

    }

  }
  const manageMouseOver = (e) => {
    setIsHovered(true);
  }
  const manageMouseLeave = (e) => {
    setIsHovered(false);

  }
  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove)
    }
  })


  useEffect(() => {
    if (logoContainerRef.current) {
      const { x, y } = logoContainerRef.current.getBoundingClientRect();
      // console.log(x, y)
      mouse.x.set(x + 30)
      mouse.y.set(y + 30)
    }


  }, [hoverOnLogo]);

  useEffect(() => {
    if (dribbleContainerRef.current) {
      const { x, y } = dribbleContainerRef.current.getBoundingClientRect();
      // console.log(x, y)
      mouse.x.set(x - 10)
      mouse.y.set(y + 10)
    }
  }, [hoverOnDribble]);
  useEffect(() => {
    if (instaContainerRef.current) {
      const { x, y } = instaContainerRef.current.getBoundingClientRect();
      // console.log(x, y)
      mouse.x.set(x + 20)
      mouse.y.set(y + 20)
    }
  }, [hoverOnInsta]);
  useEffect(() => {
    if (YTContainerRef.current) {
      const { x, y } = YTContainerRef.current.getBoundingClientRect();
      // console.log(x, y)
      mouse.x.set(x + 20)
      mouse.y.set(y + 20)
    }
  }, [hoverOnYT]);
  useEffect(() => {
    if (INContainerRef.current) {
      const { x, y } = INContainerRef.current.getBoundingClientRect();
      // console.log(x, y)
      mouse.x.set(x + 20)
      mouse.y.set(y + 20)
    }
  }, [hoverOnIN]);




  return (
    <>
      <nav>
        <div className='fixed top-3 left-0 z-20'>
          <div
            onMouseEnter={() => setHoverOnLogo(true)}
            onMouseLeave={() => setHoverOnLogo(false)}
            ref={logoContainerRef}
            className='logoContainer w-[120px] h-[120px] flex items-center justify-center'>
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" viewbox_="0 0 NaN NaN">
              <path fillRule="evenodd" clipRule="evenodd" d="M53.4123 56.0001C59.9131 50.12 64 41.602 64 32.1258C64 14.3832 49.6731 0 32 0C14.3269 0 0 14.3832 0 32.1258C0 41.2108 3.75642 49.4151 9.79504 55.2585L21.5957 13.0511L27.5053 25.8028H31.5H35.4947L41.4043 13.0511L53.4123 56.0001Z" fill={hoverOnLogo ? '#000000' : '#B7AB98'}></path>
              <ellipse cx="26.1333" cy="37.4132" rx="2.13333" ry="2.14172" fill={hoverOnLogo ? '#000000' : '#B7AB98'}></ellipse>
              <ellipse cx="37.1333" cy="37.4132" rx="2.13333" ry="2.14172" fill={hoverOnLogo ? '#000000' : '#B7AB98'}></ellipse>
            </svg>
          </div>
        </div>
      </nav>
      <div className=''>

        {/* <div onMouseEnter={() => setHoverOnDribble(true)}
          onMouseLeave={() => setHoverOnDribble(false)}
          ref={dribbleContainerRef}
          className='fixed bottom-[20px] left-0 border-2 w-[80px] h-[80px] flex items-center justify-center z-10'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  viewbox_="0 0 NaN NaN">
            <path d="M16.5781 12.5693C16.6822 14.7607 17.625 16.7336 19.1013 18.1693C20.415 16.6534 21.2417 14.7057 21.3334 12.5693H16.5781Z" fill={hoverOnDribble ? '#000000' : '#B7AB98'}></path>
            <path d="M12.5703 11.7719H15.7707C15.8748 9.35122 16.9216 7.17217 18.5523 5.59053C16.989 4.07429 14.8905 3.1084 12.5703 3.0083V11.7719Z" fill={hoverOnDribble ? '#000000' : '#B7AB98'}></path>
            <path d="M3.00879 12.5693C3.10091 14.7057 3.92723 16.6534 5.24087 18.1693C6.71723 16.734 7.66 14.7607 7.76408 12.5693H3.00879Z" fill={hoverOnDribble ? '#000000' : '#B7AB98'}></path>
            <path d="M16.5781 11.7723H21.3334C21.2413 9.63594 20.415 7.6882 19.1013 6.17236C17.625 7.60804 16.6818 9.58091 16.5781 11.7723Z" fill={hoverOnDribble ? '#000000' : '#B7AB98'}></path>
            <path d="M8.57167 11.7719H11.772V3.0083C9.45182 3.1084 7.35334 4.07429 5.79004 5.59053C7.42073 7.17217 8.46758 9.35122 8.57167 11.7719Z" fill={hoverOnDribble ? '#000000' : '#B7AB98'}></path>
            <path d="M15.7707 12.5693H12.5703V21.333C14.8905 21.2333 16.989 20.267 18.5523 18.7507C16.9216 17.1691 15.8748 14.9901 15.7707 12.5693Z" fill={hoverOnDribble ? '#000000' : '#B7AB98'}></path>
            <path d="M7.76408 11.7723C7.66 9.58091 6.71723 7.60804 5.24087 6.17236C3.92723 7.6882 3.10091 9.63594 3.00879 11.7723H7.76408Z" fill={hoverOnDribble ? '#000000' : '#B7AB98'}></path>
            <path d="M11.772 12.5693H8.57167C8.46758 14.9901 7.42073 17.1691 5.79004 18.7507C7.35334 20.267 9.45182 21.2329 11.772 21.333V12.5693Z" fill={hoverOnDribble ? '#000000' : '#B7AB98'}></path>
          </svg>
        </div > */}
        <div onMouseEnter={() => setHoverOnInsta(true)}
          onMouseLeave={() => setHoverOnInsta(false)}
          ref={instaContainerRef}
          className='fixed bottom-[110px] left-0  w-[80px] h-[80px] flex items-center justify-center z-10'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  viewbox_="0 0 NaN NaN">
            <path d="M17.0912 2.6665H6.90942C6.35229 2.6665 5.80063 2.77624 5.28591 2.98944C4.7712 3.20264 4.30351 3.51514 3.90957 3.90908C3.11396 4.70469 2.66699 5.78377 2.66699 6.90893V17.0907C2.66699 17.6479 2.77673 18.1995 2.98993 18.7143C3.20313 19.229 3.51562 19.6966 3.90957 20.0906C4.70518 20.8862 5.78426 21.3332 6.90942 21.3332H17.0912C17.6484 21.3332 18.2 21.2234 18.7147 21.0102C19.2295 20.797 19.6971 20.4845 20.0911 20.0906C20.485 19.6966 20.7975 19.229 21.0107 18.7143C21.2239 18.1995 21.3337 17.6479 21.3337 17.0907V6.90893C21.3337 6.3518 21.2239 5.80014 21.0107 5.28542C20.7975 4.77071 20.485 4.30303 20.0911 3.90908C19.6971 3.51514 19.2295 3.20264 18.7147 2.98944C18.2 2.77624 17.6484 2.6665 17.0912 2.6665ZM6.06093 6.90893C5.89312 6.90893 5.72907 6.85917 5.58954 6.76593C5.45001 6.6727 5.34125 6.54018 5.27703 6.38514C5.21281 6.2301 5.19601 6.0595 5.22875 5.89491C5.26149 5.73032 5.3423 5.57914 5.46096 5.46047C5.57962 5.34181 5.73081 5.261 5.8954 5.22826C6.05999 5.19552 6.23059 5.21233 6.38563 5.27655C6.54067 5.34076 6.67319 5.44952 6.76642 5.58905C6.85965 5.72858 6.90942 5.89263 6.90942 6.06044C6.90942 6.28548 6.82002 6.50129 6.6609 6.66041C6.50178 6.81953 6.28596 6.90893 6.06093 6.90893ZM12.0003 17.0907C10.9934 17.0907 10.0092 16.7922 9.17197 16.2328C8.33477 15.6734 7.68226 14.8783 7.29694 13.948C6.91162 13.0178 6.8108 11.9942 7.00724 11.0066C7.20367 10.0191 7.68853 9.112 8.40051 8.40002C9.11249 7.68804 10.0196 7.20318 11.0071 7.00675C11.9947 6.81031 13.0183 6.91113 13.9485 7.29645C14.8788 7.68177 15.6739 8.33428 16.2333 9.17148C16.7927 10.0087 17.0912 10.993 17.0912 11.9998C17.0912 13.35 16.5549 14.6449 15.6001 15.5997C14.6454 16.5544 13.3505 17.0907 12.0003 17.0907Z" fill={hoverOnInsta ? '#000000' : '#B7AB98'}></path>
          </svg>
        </div >
        <div onMouseEnter={() => setHoverOnYT(true)}
          onMouseLeave={() => setHoverOnYT(false)}
          ref={YTContainerRef}
          className='fixed bottom-[200px] left-0  w-[80px] h-[80px] flex items-center justify-center z-10'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  viewbox_="0 0 NaN NaN">
            <path d="M19.2611 11.3279L6.57538 3.39932C6.45536 3.32431 6.31745 3.2828 6.17597 3.27908C6.03449 3.27537 5.8946 3.30959 5.77081 3.3782C5.64702 3.44681 5.54386 3.5473 5.47202 3.66924C5.40019 3.79119 5.3623 3.93014 5.3623 4.07167V19.9288C5.3623 20.0703 5.40019 20.2093 5.47202 20.3312C5.54386 20.4532 5.64702 20.5536 5.77081 20.6223C5.8946 20.6909 6.03449 20.7251 6.17597 20.7214C6.31745 20.7177 6.45536 20.6761 6.57538 20.6011L19.2611 12.6726C19.3758 12.6015 19.4705 12.5022 19.5361 12.3843C19.6018 12.2664 19.6363 12.1336 19.6363 11.9986C19.6363 11.8637 19.6018 11.7309 19.5361 11.613C19.4705 11.495 19.3758 11.3958 19.2611 11.3247V11.3279Z" fill={hoverOnYT ? '#000000' : '#B7AB98'}></path>
          </svg>
        </div >
        <div onMouseEnter={() => setHoverOnIN(true)}
          onMouseLeave={() => setHoverOnIN(false)}
          ref={INContainerRef}
          className='fixed bottom-[290px] left-0  w-[80px] h-[80px] flex items-center justify-center z-10'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  viewbox_="0 0 NaN NaN">
            <path d="M7.02814 19.8291H3.44995V8.07215H7.13038V19.8291H7.02814ZM5.18793 6.43641C4.06336 6.43641 3.04102 5.5163 3.04102 4.28949C3.04102 3.16492 3.96112 2.14258 5.18793 2.14258C6.31251 2.14258 7.33485 3.06268 7.33485 4.28949C7.33485 5.5163 6.41474 6.43641 5.18793 6.43641ZM20.7275 19.8291H17.0471V14.104C17.0471 12.7749 17.0471 11.0369 15.2069 11.0369C13.2644 11.0369 13.06 12.4682 13.06 14.0017V19.8291H9.37953V8.07215H12.8555V9.7079C13.3667 8.78779 14.4912 7.86769 16.3314 7.86769C20.0119 7.86769 20.7275 10.3213 20.7275 13.4906V19.8291Z" fill={hoverOnIN ? '#000000' : '#B7AB98'}></path>
          </svg>
        </div >

      </div>
      <div className=' '>

        <div className='absolute flex items-center justify-center text-[#afa18f] flex-col text-7xl cursor-default font-bold leading-tight text-center gap-28'>

          <div className='w-full h-screen flex items-center justify-center relative'>
            <h1 className='absolute flex flex-col text-center text-9xl'>
              <span>MAKING</span>
              <span className='text-red-500'>GOOD</span>
              <span className='text-red-500'>SHIT</span>
              <span>SINCE</span>
              <span>2009</span>
            </h1>

          </div>
          <div className='w-full min-h-screen flex items-center justify-center md:text-6xl text-5xl md:px-12'>

            <h1  >I'm a <span className='text-red-500'>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</h1>
          </div>
        </div>

        {/* //#mask div */}
        <div className='   w-full  flex items-center justify-center text-[#afa18f] flex-col  cursor-default font-bold leading-tight  text-center gap-28'
        >

          <motion.div className='maskImageDiv  w-full h-screen flex items-center justify-center'
            animate={{
              WebkitMaskPosition: `${mousePosition.x}px ${mousePosition.y
                }px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: 'just', ease: 'backOut' }}>

            <h1 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='flex flex-col text-center text-9xl'>
              <span>HIDING</span>
              <span>BAD</span>
              <span>SHIT</span>
              <span>SINCE</span>
              <span>2009</span>
            </h1>
          </motion.div>

          <motion.div className=' maskImageDiv w-full min-h-screen flex items-center justify-center md:text-6xl text-5xl md:px-12'
            animate={{
              WebkitMaskPosition: `${smoothMouse.x.current - size / 2}px ${smoothMouse.y.current - size / 2
                }px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: 'just', ease: 'backOut' }}>
            <h1 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good
            </h1>
          </motion.div>
        </div>
      </div>
      <div >
        <div>

        </div>
        <main >
      <MultiLayerParallax />
      <div className="w-full bg-[#06141D]">
      <div className='main'>
        <Gsap/>
        <FramerMotion/>
      </div>
      </div>
    </main>

      </div>
     

      <motion.div
        style={{ left: smoothMouse.x, top: smoothMouse.y }}
        animate={{ width: cursorSize, height: cursorSize }}
        className='w-6 h-6 border-1 bg-[#ec4e39]  fixed rounded-full pointer-events-none'>

      </motion.div>
    </>
  )
}

export default App