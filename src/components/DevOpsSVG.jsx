import { motion } from 'framer-motion';

const DevOpsSVG = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 300"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background grid pattern */}
        <defs>
          <pattern id="devops-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,191,255,0.1)" strokeWidth="0.5" />
          </pattern>
          
          {/* Glowing effects */}
          <filter id="devopsGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="devopsSoftGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Gradients */}
          <linearGradient id="dockerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2496ED" />
            <stop offset="100%" stopColor="#0DB7ED" />
          </linearGradient>
          
          <linearGradient id="traefikGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#24A1C1" />
            <stop offset="100%" stopColor="#1B7A8C" />
          </linearGradient>
          
          <linearGradient id="hostingerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#673AB7" />
            <stop offset="100%" stopColor="#9C27B0" />
          </linearGradient>
          
          <linearGradient id="sslGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4CAF50" />
            <stop offset="100%" stopColor="#2E7D32" />
          </linearGradient>
          
          <linearGradient id="dnsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9800" />
            <stop offset="100%" stopColor="#F57C00" />
          </linearGradient>

          <linearGradient id="easypanelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00BCD4" />
            <stop offset="100%" stopColor="#0097A7" />
          </linearGradient>
        </defs>

        {/* Background grid */}
        <rect width="100%" height="100%" fill="url(#devops-grid)" opacity="0.3" />

        {/* Central VPS Server Hub */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Main VPS server */}
          <motion.rect
            x="175"
            y="130"
            width="50"
            height="50"
            rx="8"
            fill="url(#hostingerGradient)"
            filter="url(#devopsGlow)"
            animate={{
              boxShadow: [
                "0 0 10px rgba(103, 58, 183, 0.5)",
                "0 0 20px rgba(103, 58, 183, 0.8)",
                "0 0 10px rgba(103, 58, 183, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Server rack details */}
          <rect x="180" y="140" width="40" height="3" rx="1" fill="rgba(255,255,255,0.8)" />
          <rect x="180" y="148" width="35" height="3" rx="1" fill="rgba(255,255,255,0.6)" />
          <rect x="180" y="156" width="40" height="3" rx="1" fill="rgba(255,255,255,0.8)" />
          <rect x="180" y="164" width="30" height="3" rx="1" fill="rgba(255,255,255,0.6)" />
          
          {/* Hostinger logo representation */}
          <motion.circle
            cx="200"
            cy="115"
            r="8"
            fill="url(#hostingerGradient)"
            filter="url(#devopsSoftGlow)"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <text x="200" y="119" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">VPS</text>
        </motion.g>

        {/* Docker Container (top left) */}
        <motion.g
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.rect
            x="60"
            y="60"
            width="50"
            height="35"
            rx="8"
            fill="url(#dockerGradient)"
            filter="url(#devopsGlow)"
            animate={{
              scale: [1, 1.03, 1],
              filter: [
                "url(#devopsGlow) drop-shadow(0 0 5px rgba(36, 150, 237, 0.5))",
                "url(#devopsGlow) drop-shadow(0 0 15px rgba(36, 150, 237, 0.8))",
                "url(#devopsGlow) drop-shadow(0 0 5px rgba(36, 150, 237, 0.5))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Docker whale representation */}
          <motion.path
            d="M 70 75 Q 75 70 85 70 Q 95 70 100 75 Q 100 80 95 85 Q 85 90 75 85 Q 70 80 70 75"
            fill="rgba(255,255,255,0.9)"
            animate={{
              d: [
                "M 70 75 Q 75 70 85 70 Q 95 70 100 75 Q 100 80 95 85 Q 85 90 75 85 Q 70 80 70 75",
                "M 70 76 Q 75 71 85 71 Q 95 71 100 76 Q 100 81 95 86 Q 85 91 75 86 Q 70 81 70 76",
                "M 70 75 Q 75 70 85 70 Q 95 70 100 75 Q 100 80 95 85 Q 85 90 75 85 Q 70 80 70 75"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Container boxes */}
          <rect x="75" y="78" width="8" height="6" rx="1" fill="rgba(255,255,255,0.7)" />
          <rect x="87" y="78" width="8" height="6" rx="1" fill="rgba(255,255,255,0.7)" />
          
          <text x="85" y="92" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Docker</text>
          
          {/* Connecting line to server */}
          <motion.line
            x1="110"
            y1="80"
            x2="175"
            y2="150"
            stroke="rgba(36, 150, 237, 0.6)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
          
          {/* Container deployment particles */}
          <motion.circle
            cx="110"
            cy="80"
            r="2"
            fill="#2496ED"
            animate={{
              cx: [110, 142, 175],
              cy: [80, 115, 150]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.g>

        {/* Traefik Reverse Proxy (top right) */}
        <motion.g
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.polygon
            points="290,60 340,60 350,75 340,90 290,90 280,75"
            fill="url(#traefikGradient)"
            filter="url(#devopsGlow)"
            animate={{
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 0 8px rgba(36, 161, 193, 0.4)",
                "0 0 16px rgba(36, 161, 193, 0.7)",
                "0 0 8px rgba(36, 161, 193, 0.4)"
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          
          {/* Traffic routing arrows */}
          <motion.g
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 1.5, repeat: Infinity, staggerChildren: 0.2 }}
          >
            <path d="M 295 70 L 305 70 L 302 67 M 305 70 L 302 73" stroke="white" strokeWidth="2" fill="none" />
            <path d="M 310 75 L 320 75 L 317 72 M 320 75 L 317 78" stroke="white" strokeWidth="2" fill="none" />
            <path d="M 295 80 L 305 80 L 302 77 M 305 80 L 302 83" stroke="white" strokeWidth="2" fill="none" />
          </motion.g>
          
          <text x="315" y="78" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Traefik</text>
          
          {/* Connecting line to server */}
          <motion.line
            x1="280"
            y1="85"
            x2="225"
            y2="145"
            stroke="rgba(36, 161, 193, 0.6)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
          
          {/* Traffic flow particles */}
          <motion.circle
            cx="280"
            cy="85"
            r="2"
            fill="#24A1C1"
            animate={{
              cx: [280, 252, 225],
              cy: [85, 115, 145]
            }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 1.2 }}
          />
        </motion.g>

        {/* SSL/TLS Certificate (bottom left) */}
        <motion.g
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.rect
            x="60"
            y="200"
            width="45"
            height="35"
            rx="8"
            fill="url(#sslGradient)"
            filter="url(#devopsGlow)"
            animate={{
              scale: [1, 1.03, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* SSL lock icon */}
          <motion.rect
            x="75"
            y="210"
            width="15"
            height="12"
            rx="2"
            fill="rgba(255,255,255,0.9)"
            animate={{
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <circle cx="82.5" cy="206" r="4" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
          
          <text x="82.5" y="235" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">SSL/TLS</text>
          
          {/* Security shield animation */}
          <motion.circle
            cx="82.5"
            cy="217"
            r="20"
            fill="none"
            stroke="rgba(76, 175, 80, 0.3)"
            strokeWidth="1"
            animate={{
              r: [20, 25, 20],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Connecting line to server */}
          <motion.line
            x1="105"
            y1="210"
            x2="175"
            y2="170"
            stroke="rgba(76, 175, 80, 0.6)"
            strokeWidth="2"
            strokeDasharray="3,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </motion.g>

        {/* EasyPanel (middle right) */}
        <motion.g
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.rect
            x="290"
            y="140"
            width="50"
            height="25"
            rx="12"
            fill="url(#easypanelGradient)"
            filter="url(#devopsGlow)"
            animate={{
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 0 10px rgba(0, 188, 212, 0.4)",
                "0 0 18px rgba(0, 188, 212, 0.7)",
                "0 0 10px rgba(0, 188, 212, 0.4)"
              ]
            }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          
          {/* Panel interface elements */}
          <motion.g
            animate={{
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2, repeat: Infinity, staggerChildren: 0.1 }}
          >
            <rect x="295" y="145" width="8" height="3" rx="1" fill="rgba(255,255,255,0.8)" />
            <rect x="305" y="145" width="12" height="3" rx="1" fill="rgba(255,255,255,0.8)" />
            <rect x="320" y="145" width="15" height="3" rx="1" fill="rgba(255,255,255,0.8)" />
            <rect x="295" y="152" width="20" height="3" rx="1" fill="rgba(255,255,255,0.6)" />
            <rect x="318" y="152" width="17" height="3" rx="1" fill="rgba(255,255,255,0.6)" />
            <rect x="295" y="159" width="15" height="3" rx="1" fill="rgba(255,255,255,0.8)" />
          </motion.g>
          
          <text x="315" y="175" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">EasyPanel</text>
          
          {/* Connecting line to server */}
          <motion.line
            x1="290"
            y1="152"
            x2="225"
            y2="155"
            stroke="rgba(0, 188, 212, 0.6)"
            strokeWidth="2"
            strokeDasharray="4,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.4 }}
          />
        </motion.g>

        {/* DNS Management (bottom right) */}
        <motion.g
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.circle
            cx="315"
            cy="220"
            r="25"
            fill="url(#dnsGradient)"
            filter="url(#devopsGlow)"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              scale: { duration: 3, repeat: Infinity },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
          />
          
          {/* DNS network nodes */}
          <motion.g
            animate={{
              rotate: 360
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "315px 220px" }}
          >
            <circle cx="315" cy="200" r="3" fill="rgba(255,255,255,0.9)" />
            <circle cx="335" cy="220" r="3" fill="rgba(255,255,255,0.9)" />
            <circle cx="315" cy="240" r="3" fill="rgba(255,255,255,0.9)" />
            <circle cx="295" cy="220" r="3" fill="rgba(255,255,255,0.9)" />
            
            {/* Connection lines */}
            <line x1="315" y1="200" x2="315" y2="220" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
            <line x1="335" y1="220" x2="315" y2="220" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
            <line x1="315" y1="240" x2="315" y2="220" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
            <line x1="295" y1="220" x2="315" y2="220" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          </motion.g>
          
          <text x="315" y="225" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">DNS</text>
          
          {/* Connecting line to server */}
          <motion.line
            x1="290"
            y1="210"
            x2="225"
            y2="165"
            stroke="rgba(255, 152, 0, 0.6)"
            strokeWidth="2"
            strokeDasharray="4,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.6 }}
          />
          
          {/* DNS resolution particles */}
          <motion.circle
            cx="290"
            cy="210"
            r="2"
            fill="#FF9800"
            animate={{
              cx: [290, 257, 225],
              cy: [210, 187, 165]
            }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 1.8 }}
          />
        </motion.g>

        {/* Central deployment flow visualization */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {/* Pulsing deployment center */}
          <motion.circle
            cx="200"
            cy="155"
            r="6"
            fill="rgba(0, 191, 255, 0.8)"
            animate={{
              r: [6, 10, 6],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Orbiting deployment packets */}
          <motion.circle
            cx="215"
            cy="155"
            r="2"
            fill="#00BFFF"
            animate={{
              rotate: 360
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 155px" }}
          />
          
          <motion.circle
            cx="185"
            cy="155"
            r="2"
            fill="#FF6B35"
            animate={{
              rotate: -360
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 155px" }}
          />
        </motion.g>

        {/* Floating tech labels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.text
            x="50"
            y="40"
            fill="rgba(255, 255, 255, 0.7)"
            fontSize="8"
            animate={{
              y: [40, 35, 40],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Containerization
          </motion.text>
          
          <motion.text
            x="300"
            y="40"
            fill="rgba(255, 255, 255, 0.7)"
            fontSize="8"
            animate={{
              y: [40, 35, 40],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            Load Balancing
          </motion.text>
          
          <motion.text
            x="30"
            y="270"
            fill="rgba(255, 255, 255, 0.7)"
            fontSize="8"
            animate={{
              y: [270, 265, 270],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            Security
          </motion.text>
          
          <motion.text
            x="300"
            y="270"
            fill="rgba(255, 255, 255, 0.7)"
            fontSize="8"
            animate={{
              y: [270, 265, 270],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          >
            Infrastructure
          </motion.text>
        </motion.g>

        {/* Network infrastructure visualization */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          {/* Network pulse rings */}
          <motion.circle
            cx="200"
            cy="155"
            r="35"
            fill="none"
            stroke="rgba(0, 191, 255, 0.3)"
            strokeWidth="1"
            animate={{
              r: [35, 55, 35],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <motion.circle
            cx="200"
            cy="155"
            r="45"
            fill="none"
            stroke="rgba(103, 58, 183, 0.2)"
            strokeWidth="1"
            animate={{
              r: [45, 65, 45],
              opacity: [0.2, 0.05, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default DevOpsSVG;
