import React, { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Picture1 from '../assets/1.jpg';
import Picture2 from '../assets/2.jpg';
import Picture3 from '../assets/3.jpg';

gsap.registerPlugin(ScrollTrigger) 
const word = "Scroll";

const Gsap = () => {
    const container = useRef(null);
    const images = [Picture1, Picture2, Picture3];
    const lettersRef = useRef([])
    const imagesRef = useRef([])
    const title1 = useRef(null);
    useLayoutEffect( () => {
        const context = gsap.context( () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            })
            .to(title1.current, {y: -50}, 0)
            .to(imagesRef.current[1], {y: -150}, 0)
            .to(imagesRef.current[2], {y: -255}, 0)
            lettersRef.current.forEach((letter, i) => {
                tl.to(letter, {
                    top: Math.floor(Math.random() * -75) - 25,
                }, 0)
            })
            
        })
        return () => context.revert();
    }, [])

    return (
        <div ref={container} className="container">
            <div className="body ">
                <h1 className="text-gray-600" ref={title1}>Parallax</h1>
                {/* <h1 className="text-gray-600">Scroll</h1> */}
                <div className="word">
                    <p >
                        {
                            word.split("").map((letter, i) => {
                                return <span className="text-red-500" key={`l_${i}`} ref={el => lettersRef.current[i] = el}>{letter}</span>
                            })
                        }
                    </p>
                </div>
            </div>
            <div className="images">
                {
                    images.map( (image, i) => {
                        return <div key={`i_${i}`} ref={el => imagesRef.current[i] = el} className="imageContainer">
                            <img 
                                src={image}
                                alt="image"
                            />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Gsap;
