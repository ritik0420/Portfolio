import { motion } from 'framer-motion'

const Footer = () => {
    const socialLinks = [
      { name: 'GitHub', url: 'https://github.com/ritik0420', icon: '/assets/github.svg' },
      { name: 'Twitter', url: 'https://twitter.com/ritik_kaintura', icon: '/assets/twitter.svg' },
      { name: 'Instagram', url: 'https://instagram.com/ritik_kaintura', icon: '/assets/instagram.svg' }
    ];
    
    return (
      <footer className="relative c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'linear-gradient(90deg, rgba(0,255,255,0.1) 0%, transparent 50%, transparent 100%)',
              'linear-gradient(90deg, transparent 0%, rgba(147,51,234,0.1) 50%, transparent 100%)',
              'linear-gradient(90deg, transparent 0%, transparent 50%, rgba(255,0,128,0.1) 100%)',
              'linear-gradient(90deg, rgba(0,255,255,0.1) 0%, transparent 50%, transparent 100%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${i * 20 + 10}%`,
              top: '50%',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        
        <motion.div 
          className="text-white-500 flex gap-2 relative z-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="hover:text-cyan-400 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Terms & Conditions
          </motion.p>
          <p>|</p>
          <motion.p 
            className="hover:text-cyan-400 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Privacy Policy
          </motion.p>
        </motion.div>
  
        <motion.div 
          className="flex gap-3 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon relative group"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                boxShadow: '0 0 20px rgba(0,255,255,0.5)'
              }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={social.icon} alt={social.name} className="w-1/2 h-1/2" />
              
              {/* Tooltip */}
              <motion.span
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {social.name}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>
  
        <motion.p 
          className="text-white-500 relative z-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            animate={{ 
              textShadow: [
                '0 0 0px rgba(0,255,255,0)',
                '0 0 10px rgba(0,255,255,0.5)',
                '0 0 0px rgba(0,255,255,0)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © 2025 Ritik Kaintura
          </motion.span>
          . All rights reserved.
        </motion.p>
      </footer>
    );
  };
  
  export default Footer;