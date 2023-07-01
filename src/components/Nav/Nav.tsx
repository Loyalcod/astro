import { motion } from "framer-motion";
import { useState } from "react";
import profile from '/profile.jpg'

const navMotion ={
    visible: {
        opacity: 1,

        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
    hidden: {
        opacity:0,
    },
}

const itemMotion ={
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: -100},
}

export default function Nav() {
  const [toggoled, setToggoled] = useState(false);
  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        width="250"
        height={4}
        viewBox="0 0 250 4"
        xmlns="http://www.w3.org/200/svg"
        fill="none"
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      >
        <path
          d="M2 2L428 2"
          stroke="#282828"
          strokeLinecap="round"
          strokeWidth={2}
        />
      </svg>

      <div className="w-[50px] h-[50px] bg-slate-500 rounded-full overflow-hidden">
        <img src={profile} alt="profile of hau's" className="w-full h-full"/>
      </div>

      {/* this is gonna be our title */}
      <h1 className="text-lg font-bold">
        <a href="/">Hua.</a>
      </h1>

      <div className="hidden gap-12 xl:flex">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>

      <div
        className=" space-y-1 cursor-pointer xl:hidden z-50 "
        onClick={() => setToggoled((prevState) => !prevState)}
      >
        <motion.span animate={{rotateZ: toggoled ? 45 : 0, y: toggoled ? 8 : 0}} className="block h-0.5 w-8 bg-black"></motion.span>
        <motion.span animate={{width: toggoled ? 0 : 24}} className="block h-0.5 w-6 bg-black"></motion.span>
        <motion.span animate={{rotateZ: toggoled ? -45 : 0, y: toggoled ? -8 : 0, width: toggoled ? 32 : 16}} className="block h-0.5 w-4 bg-black"></motion.span>
      </div>

      {toggoled && (
        <motion.div
        animate={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 25}}
        className="xl:hidden fixed w-full bottom-0 left-0 h-screen flex justify-center items-center z-10 bg-white">
        <motion.div variants={navMotion} animate='visible' initial='hidden' className="flex flex-col gap-24 text-lg">
        <motion.a variants={itemMotion} href="/">Home</motion.a>
        <motion.a variants={itemMotion} href="/services">Services</motion.a>
        <motion.a variants={itemMotion} href="/contact">Contact</motion.a>
        </motion.div>
      </motion.div>
      )}
    </nav>
  );
}
