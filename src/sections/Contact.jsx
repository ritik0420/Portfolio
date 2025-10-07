import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import ScrollReveal from '../components/ScrollReveal'

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    //service_t3nw2fe
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
           await emailjs.send(
                'service_t3nw2fe',
                'template_xckk9ob',
                {
                    from_name: form.name,
                    to_name: 'Ritik',
                    from_email: form.email,
                    to_email: 'ritik.kaintura007@gmail.com',
                    message: form.message
                },
                'Y5BOFyl-0AAE85x2U'
            )            
        setLoading(false);
        alert('Your message has been sent!')

        setForm({
            name: '',
            email: '',
            message: ''
        })
        }
        catch (error) {
setLoading(false);
console.log(error);
        }
    }


    return (
        <section id='contact' className='c-space my-20'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                {/* Background image with parallax effect */}
                <motion.img 
                    src="/assets/terminal.png" 
                    alt="terminal background" 
                    className="absolute inset-0 min-h-screen object-cover"
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    style={{ willChange: 'transform' }}
                />
                
                {/* Animated overlay gradient */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                />
                
                <ScrollReveal direction="scale" duration={0.6} delay={0.1}>
                    <motion.div 
                        className='contact-container p-10 relative z-10'
                        whileHover={{ 
                            boxShadow: '0 0 50px rgba(0,255,255,0.3)',
                            borderColor: 'rgba(0,255,255,0.3)'
                        }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.h3 
                            className='head-text relative inline-block'
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Contact Me
                            {/* Animated underline */}
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            />
                        </motion.h3>
                        
                        <ScrollReveal direction="fade" delay={0.2}>
                            <p className='text-lg text-white-600 mt-3'>
                                Whether you're looking to build a new website,
                                improve your existing platform, or bring a unique project to life, I'm here to help.
                            </p>
                        </ScrollReveal>
                        
                        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                            <ScrollReveal direction="left" delay={0.25}>
                                <motion.label 
                                    className='space-y-3 group'
                                    whileFocus={{ scale: 1.01 }}
                                >
                                    <span className='field-label'>Full Name</span>
                                    <motion.input
                                        type='text'
                                        name='name'
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className='field-input'
                                        placeholder='Enter Name'
                                        whileFocus={{ 
                                            boxShadow: '0 0 20px rgba(0,255,255,0.3)',
                                            borderColor: 'rgba(0,255,255,0.5)',
                                            transition: { duration: 0.2 }
                                        }}
                                    />
                                </motion.label>
                            </ScrollReveal>
                            
                            <ScrollReveal direction="right" delay={0.3}>
                                <motion.label 
                                    className='space-y-3'
                                    whileFocus={{ scale: 1.01 }}
                                >
                                    <span className='field-label'>Email</span>
                                    <motion.input
                                        type='email'
                                        name='email'
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className='field-input'
                                        placeholder='Enter Email'
                                        whileFocus={{ 
                                            boxShadow: '0 0 20px rgba(0,255,255,0.3)',
                                            borderColor: 'rgba(0,255,255,0.5)',
                                            transition: { duration: 0.2 }
                                        }}
                                    />
                                </motion.label>
                            </ScrollReveal>
                            
                            <ScrollReveal direction="left" delay={0.35}>
                                <motion.label 
                                    className='space-y-3'
                                    whileFocus={{ scale: 1.02 }}
                                >
                                    <span className='field-label'>Your message</span>
                                    <motion.textarea
                                        name='message'
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className='field-input'
                                        placeholder='Enter your message here..'
                                        whileFocus={{ 
                                            boxShadow: '0 0 20px rgba(0,255,255,0.3)',
                                            borderColor: 'rgba(0,255,255,0.5)'
                                        }}
                                    />
                                </motion.label>
                            </ScrollReveal>
                            
                            <ScrollReveal direction="up" delay={0.4}>
                                <motion.button 
                                    className='field-btn relative overflow-hidden group' 
                                    type="submit" 
                                    disabled={loading}
                                    whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,255,255,0.5)' }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {/* Animated background on hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    
                                    <span className="relative z-10">
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </span>
                                    
                                    <motion.img 
                                        src='/assets/arrow-up.png' 
                                        alt='arrow-up' 
                                        className='field-btn_arrow relative z-10'
                                        animate={{ 
                                            y: loading ? 0 : [0, -5, 0],
                                            rotate: loading ? 360 : 0
                                        }}
                                        transition={{ 
                                            y: { duration: 1.5, repeat: Infinity },
                                            rotate: { duration: 1, repeat: loading ? Infinity : 0 }
                                        }}
                                    />
                                </motion.button>
                            </ScrollReveal>
                        </form>
                        
                        {/* Decorative corner elements */}
                        {[
                            { top: '10px', left: '10px' },
                            { top: '10px', right: '10px' },
                            { bottom: '10px', left: '10px' },
                            { bottom: '10px', right: '10px' }
                        ].map((pos, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-6 h-6 border-cyan-400"
                                style={{
                                    ...pos,
                                    borderWidth: pos.top && pos.left ? '2px 0 0 2px' :
                                                pos.top && pos.right ? '2px 2px 0 0' :
                                                pos.bottom && pos.left ? '0 0 2px 2px' :
                                                '0 2px 2px 0'
                                }}
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            />
                        ))}
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    )
}

export default Contact