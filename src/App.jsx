import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from './common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiStar, FiGift } = FiIcons;

function App() {
  const balloons = Array.from({ length: 6 }, (_, i) => i);
  const confetti = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center overflow-hidden relative">
      {/* Floating Confetti */}
      {confetti.map((i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b'][i % 6],
            left: `${Math.random() * 100}%`,
            top: `-10px`,
          }}
          animate={{
            y: [0, window.innerHeight + 100],
            rotate: [0, 360],
            opacity: [1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating Balloons */}
      {balloons.map((i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            bottom: '10%',
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-12 h-16 rounded-full shadow-lg"
            style={{
              backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b'][i],
            }}
          />
          <div className="w-0.5 h-8 bg-gray-400 mx-auto" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="text-center z-10 px-4">
        {/* Happy Birthday Text */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            Happy Birthday
          </h1>
        </motion.div>

        {/* Pankaj Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-yellow-300 drop-shadow-lg">
            Pankaj!
          </h2>
        </motion.div>

        {/* Animated Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center space-x-8 mb-8"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: 0 
            }}
          >
            <SafeIcon icon={FiHeart} className="text-5xl text-red-400" />
          </motion.div>
          
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -10, 10, 0] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: 0.3 
            }}
          >
            <SafeIcon icon={FiGift} className="text-5xl text-green-400" />
          </motion.div>
          
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: 0.6 
            }}
          >
            <SafeIcon icon={FiStar} className="text-5xl text-yellow-400" />
          </motion.div>
        </motion.div>

        {/* Birthday Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-md">
            🎉 Wishing you a day filled with happiness and a year filled with joy! 🎂
          </p>
        </motion.div>

        {/* Celebration Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
          className="mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={() => {
              // Create more confetti on click
              const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b'];
              for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '1000';
                document.body.appendChild(confetti);
                
                const animation = confetti.animate([
                  { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                  { transform: `translateY(${window.innerHeight + 100}px) rotate(720deg)`, opacity: 0 }
                ], {
                  duration: 3000,
                  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                });
                
                animation.onfinish = () => confetti.remove();
              }
            }}
          >
            🎊 Celebrate! 🎊
          </motion.button>
        </motion.div>
      </div>

      {/* Background Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;