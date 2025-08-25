import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import DesktopComputer from "../components/DesktopComputer"
import CanvasLoader from "../components/CanvasLoader"
import Button from "../components/Button"
import { useState } from "react"

const About = () => {

    const[hasCopied,setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("ritik.kaintura007@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
        setHasCopied(false);
    }, 2000);
    }
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi, I'm Ritik</p>
                            <p className="grid-subtext">
                                Proficient in modern web technologies including React.js, Node.js, 3js, and Tailwind CSS,
                                with a strong foundation in building dynamic and visually appealing web applications.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">Specializing in JavaScript, with emphasis on the React, Node.js, and 3.js ecosystems, I excel at creating dynamic, scalable, and interactive web applications.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Canvas>
                                <Suspense fallback={<CanvasLoader />}>
                                    <PerspectiveCamera makeDefault position={[0, 0.3, 1.5]} />
                                    <DesktopComputer 
                                        position={[0, 0, 0]}
                                        scale={[1, 1, 1]}
                                        rotation={[0, 0, 0]}
                                    />
                                    <ambientLight intensity={1.5} />
                                    <directionalLight position={[10, 10, 10]} intensity={1} />
                                    <pointLight position={[0, 5, 5]} intensity={0.5} />
                                    <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
                                </Suspense>
                            </Canvas>
                        </div>
                        <div>
                            <p className="grid-headtext">I can work remotely across most timezones.
                            </p>
                            <p className="grid-subtext">I'm based in Dehradun,India. I'm available for remote work opportunities and can work with teams in any timezone.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My Passion for Coding </p>
                            <p className="grid-subtext">I'm passionate about coding and building interactive web applications that provide value to users. I'm always looking to learn new technologies and improve my skills.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className=" grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ritik.kaintura007@gmail.com</p>

                            </div>
                            </div> 
                    </div>
                    
                </div>
            </div>

        </section>
    )
}

export default About