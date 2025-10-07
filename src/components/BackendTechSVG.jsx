import { motion } from 'framer-motion';

const BackendTechSVG = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 300"
        className="absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background grid pattern */}
        <defs>
          <pattern id="backend-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,255,255,0.1)" strokeWidth="0.5" />
          </pattern>
          
          {/* Glowing effects */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Gradients */}
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#68D391" />
            <stop offset="100%" stopColor="#38A169" />
          </linearGradient>
          
          <linearGradient id="expressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBD38D" />
            <stop offset="100%" stopColor="#ED8936" />
          </linearGradient>
          
          <linearGradient id="mongoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#68D391" />
            <stop offset="100%" stopColor="#2F855A" />
          </linearGradient>
          
          <linearGradient id="jwtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9F7AEA" />
            <stop offset="100%" stopColor="#6B46C1" />
          </linearGradient>
          
          <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#63B3ED" />
            <stop offset="100%" stopColor="#3182CE" />
          </linearGradient>
        </defs>

        {/* Background grid */}
        <rect width="100%" height="100%" fill="url(#backend-grid)" opacity="0.3" />

        {/* Central Server/Database Hub */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Main server cylinder */}
          <motion.rect
            x="180"
            y="120"
            width="40"
            height="60"
            rx="8"
            fill="url(#mongoGradient)"
            filter="url(#glow)"
            animate={{
              boxShadow: [
                "0 0 10px rgba(104, 211, 145, 0.5)",
                "0 0 20px rgba(104, 211, 145, 0.8)",
                "0 0 10px rgba(104, 211, 145, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Server details */}
          <rect x="185" y="130" width="30" height="3" rx="1" fill="rgba(255,255,255,0.8)" />
          <rect x="185" y="140" width="25" height="3" rx="1" fill="rgba(255,255,255,0.6)" />
          <rect x="185" y="150" width="30" height="3" rx="1" fill="rgba(255,255,255,0.8)" />
          <rect x="185" y="160" width="20" height="3" rx="1" fill="rgba(255,255,255,0.6)" />
          
          {/* MongoDB logo representation */}
          <motion.circle
            cx="200"
            cy="105"
            r="8"
            fill="url(#mongoGradient)"
            filter="url(#softGlow)"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <text x="200" y="110" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">M</text>
        </motion.g>

        {/* Node.js representation (top left) */}
        <motion.g
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.circle
            cx="80"
            cy="80"
            r="25"
            fill="url(#nodeGradient)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.05, 1],
              filter: [
                "url(#glow) drop-shadow(0 0 5px rgba(104, 211, 145, 0.5))",
                "url(#glow) drop-shadow(0 0 15px rgba(104, 211, 145, 0.8))",
                "url(#glow) drop-shadow(0 0 5px rgba(104, 211, 145, 0.5))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <text x="80" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Node</text>
          
          {/* Connecting line to server */}
          <motion.line
            x1="105"
            y1="80"
            x2="180"
            y2="140"
            stroke="rgba(104, 211, 145, 0.6)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
          
          {/* Data flow particles */}
          <motion.circle
            cx="105"
            cy="80"
            r="2"
            fill="#68D391"
            animate={{
              cx: [105, 142, 180],
              cy: [80, 110, 140]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.g>

        {/* Express.js representation (top right) */}
        <motion.g
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.rect
            x="295"
            y="60"
            width="50"
            height="20"
            rx="10"
            fill="url(#expressGradient)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 0 8px rgba(251, 211, 141, 0.4)",
                "0 0 16px rgba(251, 211, 141, 0.7)",
                "0 0 8px rgba(251, 211, 141, 0.4)"
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <text x="320" y="73" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Express</text>
          
          {/* Connecting line to server */}
          <motion.line
            x1="295"
            y1="80"
            x2="220"
            y2="130"
            stroke="rgba(251, 211, 141, 0.6)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
          
          {/* Data flow particles */}
          <motion.circle
            cx="295"
            cy="80"
            r="2"
            fill="#FBD38D"
            animate={{
              cx: [295, 257, 220],
              cy: [80, 105, 130]
            }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 1.2 }}
          />
        </motion.g>

        {/* JWT Token representation (bottom left) */}
        <motion.g
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.ellipse
            cx="90"
            cy="220"
            rx="35"
            ry="15"
            fill="url(#jwtGradient)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.03, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <text x="90" y="225" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">JWT Auth</text>
          
          {/* Security shield */}
          <motion.path
            d="M 70 210 L 75 200 L 85 200 L 90 195 L 95 200 L 105 200 L 110 210 L 105 225 L 95 235 L 90 240 L 85 235 L 75 225 Z"
            fill="rgba(159, 122, 234, 0.3)"
            stroke="rgba(159, 122, 234, 0.8)"
            strokeWidth="1"
            animate={{
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Connecting line to server */}
          <motion.line
            x1="125"
            y1="215"
            x2="180"
            y2="180"
            stroke="rgba(159, 122, 234, 0.6)"
            strokeWidth="2"
            strokeDasharray="3,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </motion.g>

        {/* REST API representation (bottom right) */}
        <motion.g
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.rect
            x="280"
            y="200"
            width="60"
            height="30"
            rx="15"
            fill="url(#apiGradient)"
            filter="url(#glow)"
            animate={{
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 0 10px rgba(99, 179, 237, 0.4)",
                "0 0 18px rgba(99, 179, 237, 0.7)",
                "0 0 10px rgba(99, 179, 237, 0.4)"
              ]
            }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          <text x="310" y="218" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">REST API</text>
          
          {/* API endpoints visualization */}
          <motion.g
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, staggerChildren: 0.2 }}
          >
            <rect x="285" y="185" width="15" height="3" rx="1" fill="rgba(99, 179, 237, 0.8)" />
            <rect x="305" y="185" width="12" height="3" rx="1" fill="rgba(99, 179, 237, 0.8)" />
            <rect x="322" y="185" width="18" height="3" rx="1" fill="rgba(99, 179, 237, 0.8)" />
          </motion.g>
          
          {/* Connecting line to server */}
          <motion.line
            x1="280"
            y1="200"
            x2="220"
            y2="170"
            stroke="rgba(99, 179, 237, 0.6)"
            strokeWidth="2"
            strokeDasharray="4,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.4 }}
          />
          
          {/* Data flow particles */}
          <motion.circle
            cx="280"
            cy="200"
            r="2"
            fill="#63B3ED"
            animate={{
              cx: [280, 250, 220],
              cy: [200, 185, 170]
            }}
            transition={{ duration: 1.8, repeat: Infinity, delay: 1.6 }}
          />
        </motion.g>

        {/* Central data flow visualization */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {/* Pulsing center */}
          <motion.circle
            cx="200"
            cy="150"
            r="5"
            fill="rgba(0, 255, 255, 0.8)"
            animate={{
              r: [5, 8, 5],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Orbiting data packets */}
          <motion.circle
            cx="200"
            cy="150"
            r="2"
            fill="#00FFFF"
            animate={{
              rotate: 360
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 150px" }}
          />
          
          <motion.circle
            cx="200"
            cy="150"
            r="2"
            fill="#FF0080"
            animate={{
              rotate: -360
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 150px" }}
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
            y="50"
            fill="rgba(255, 255, 255, 0.7)"
            fontSize="8"
            animate={{
              y: [50, 45, 50],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Server-side
          </motion.text>
          
          <motion.text
            x="320"
            y="50"
            fill="rgba(255, 255, 255, 0.7)"
            fontSize="8"
            animate={{
              y: [50, 45, 50],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            Middleware
          </motion.text>
          
          <motion.text
            x="50"
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
            x="320"
            y="270"
            fill="rgba(255, 255, 255, 0.7)"
            fontSize="8"
            animate={{
              y: [270, 265, 270],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          >
            Endpoints
          </motion.text>
        </motion.g>

        {/* Network connection visualization */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          {/* Network pulse rings */}
          <motion.circle
            cx="200"
            cy="150"
            r="30"
            fill="none"
            stroke="rgba(0, 255, 255, 0.3)"
            strokeWidth="1"
            animate={{
              r: [30, 50, 30],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <motion.circle
            cx="200"
            cy="150"
            r="40"
            fill="none"
            stroke="rgba(99, 179, 237, 0.2)"
            strokeWidth="1"
            animate={{
              r: [40, 60, 40],
              opacity: [0.2, 0.05, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default BackendTechSVG;
