import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border border-white/10 bg-black/40 backdrop-blur-md p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <Tab href="/#apps" setPosition={setPosition}>Apps</Tab>
      <Tab href="/#features" setPosition={setPosition}>Features</Tab>
      <Tab href="/#about" setPosition={setPosition}>About</Tab>
      <Tab href="mailto:atul1995og@gmail.com" setPosition={setPosition}>Contact</Tab>

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({ children, setPosition, href }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-4 py-2 text-sm uppercase text-white mix-blend-difference font-semibold tracking-wide"
    >
      <a href={href} className="block w-full h-full">{children}</a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-[36px] rounded-full bg-white top-1 pointer-events-none"
    />
  );
};

export default NavHeader;
