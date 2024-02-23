import React, { useRef } from "react";
import styles from './Framer.module.css';
import Picture1 from '../assets/4.jpg';
import Picture2 from '../assets/5.jpg';
import Picture3 from '../assets/6.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';

const word = "Scroll";

const FramerMotion = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
        {
            src: Picture1,
            y: 0
        },
        {
            src: Picture2,
            y: lg
        },
        {
            src: Picture3,
            y: md
        }
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <motion.h1 className="text-gray-600" style={{y: sm}}>Parallax</motion.h1>
                {/* <h1 className="text-gray-600">Scroll</h1> */}
                <div className={styles.word}>
                    <p>
                        {
                            word.split("").map((letter, i) => {
                                const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25])
                                return <motion.span className="text-red-500" style={{top: y}} key={`l_${i}`} >{letter}</motion.span>
                            })
                        }
                    </p>
                </div>
            </div>
            <div className={styles.images}>
                {
                    images.map( ({src, y}, i) => {
                        return <motion.div style={{y}} key={`i_${i}`} className={styles.imageContainer}>
                            <img 
                                src={src}
                                alt="image"
                            />
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}

export default FramerMotion;
