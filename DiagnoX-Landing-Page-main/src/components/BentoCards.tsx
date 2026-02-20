import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

interface BentoCardProps {
  title: string;
  description: string;
  index: number;
  width: number;
  height: number;
  x: number;
  y: number;
}

function BentoCard({ title, description, index, width, height, x, y }: BentoCardProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [pulseIntensity, setPulseIntensity] = useState(0);

  useEffect(() => {
    if (isHovered) {
      let frame = 0;
      const interval = setInterval(() => {
        frame += 0.02;
        // Create a smooth breathing/pulsing effect
        const intensity = (Math.sin(frame) + 1) / 2; // Oscillates between 0 and 1
        setPulseIntensity(intensity);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Format title with line breaks
  const formatTitle = (text: string) => {
    if (text === "Vehicle Health Monitoring") {
      return (
        <>
          Vehicle Health<br />
          Monitoring
        </>
      );
    }
    if (text === "Real-Time GPS Tracking") {
      return (
        <>
          Real-Time<br />
          GPS<br />
          Tracking
        </>
      );
    }
    if (text === "Cloud-Linked Trip History Backup") {
      return (
        <>
          Cloud Linked<br />
          Trip History Backup
        </>
      );
    }
    if (text === "Anti-Theft & Anti-Tow Alerts") {
      return (
        <>
          Anti Theft &<br />
          Anti-Tow Alerts
        </>
      );
    }
    if (text === "Driving Behavior Analytics") {
      return (
        <>
          Driving Behavior<br />
          Analytics
        </>
      );
    }
    return text;
  };

  // Format description with line breaks
  const formatDescription = (text: string) => {
    if (text.startsWith("Displays diagnostic trouble codes")) {
      return (
        <>
          Displays diagnostic trouble codes (DTCs),<br />
          warning lights, and component status<br />
          directly to the app dashboard.
        </>
      );
    }
    if (text.startsWith("Sends instant notifications if the car is being towed")) {
      return (
        <>
          Sends instant notifications<br />
          if the car is being<br />
          towed, moved without<br />
          authorization, or if the<br />
          device is tampered with.
        </>
      );
    }
    if (text.startsWith("Warns users before potential breakdowns")) {
      return (
        <>
          Warns users before<br />
          potential breakdowns<br />
          by detecting abnormal<br />
          data patterns from<br />
          the vehicle's sensors.
        </>
      );
    }
    if (text.startsWith("Uses sensor data to detect impacts")) {
      return (
        <>
          Uses sensor data to detect impacts and trigger<br />
          immediate SOS alerts with live location.
        </>
      );
    }
    if (text.startsWith("Allows users to create custom boundaries")) {
      return (
        <>
          Allows users to create<br />
          custom boundaries; sends<br />
          alerts when the vehicle<br />
          enters or exits zones<br />
          during prohibited hours.
        </>
      );
    }
    if (text.startsWith("Gives detailed reports on over-speeding")) {
      return (
        <>
          Gives detailed reports on<br />
          over-speeding, harsh braking, &<br />
          mileage efficiency, promoting safer<br />
          & more economical driving habits.
        </>
      );
    }
    return text;
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group absolute flex items-center justify-center overflow-hidden transition-all duration-400 cursor-pointer"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        padding: '20px',
        border: isHovered
          ? theme === 'dark'
            ? `1.5px solid rgba(255, 255, 255, 0.6)`
            : `1.5px solid rgba(0, 0, 0, 0.5)`
          : `1px solid ${theme === 'dark' ? 'rgba(192, 192, 192, 0.8)' : 'rgba(0, 0, 0, 0.1)'}`,
        borderRadius: '8px',
        background: isHovered
          ? theme === 'dark'
            ? `linear-gradient(345deg, 
                rgba(192, 192, 192, ${0.88 + pulseIntensity * 0.04}) 0%, 
                rgba(200, 200, 200, ${0.90 + pulseIntensity * 0.04}) 5%, 
                rgba(210, 210, 210, ${0.91 + pulseIntensity * 0.04}) 10%, 
                rgba(220, 220, 220, ${0.92 + pulseIntensity * 0.04}) 15%, 
                rgba(230, 230, 230, ${0.93 + pulseIntensity * 0.03}) 20%, 
                rgba(238, 238, 238, ${0.94 + pulseIntensity * 0.03}) 25%, 
                rgba(244, 244, 244, ${0.95 + pulseIntensity * 0.03}) 30%, 
                rgba(248, 248, 248, ${0.955 + pulseIntensity * 0.025}) 35%, 
                rgba(252, 252, 252, ${0.96 + pulseIntensity * 0.025}) 40%, 
                rgba(254, 254, 254, ${0.965 + pulseIntensity * 0.02}) 50%, 
                rgba(255, 255, 255, ${0.97 + pulseIntensity * 0.02}) 60%, 
                rgba(255, 255, 255, ${0.975 + pulseIntensity * 0.015}) 70%, 
                rgba(255, 255, 255, ${0.98 + pulseIntensity * 0.015}) 80%, 
                rgba(255, 255, 255, ${0.985 + pulseIntensity * 0.01}) 90%, 
                rgba(255, 255, 255, ${0.99 + pulseIntensity * 0.01}) 100%)`
            : `linear-gradient(345deg, 
                rgba(173, 216, 230, ${0.42 + pulseIntensity * 0.22}) 0%, 
                rgba(180, 220, 233, ${0.44 + pulseIntensity * 0.20}) 5%, 
                rgba(188, 224, 237, ${0.46 + pulseIntensity * 0.18}) 10%, 
                rgba(196, 228, 240, ${0.48 + pulseIntensity * 0.16}) 15%, 
                rgba(205, 232, 243, ${0.49 + pulseIntensity * 0.14}) 20%, 
                rgba(215, 237, 246, ${0.48 + pulseIntensity * 0.12}) 25%, 
                rgba(225, 242, 249, ${0.44 + pulseIntensity * 0.10}) 30%, 
                rgba(233, 246, 251, ${0.38 + pulseIntensity * 0.08}) 35%, 
                rgba(240, 249, 252, ${0.30 + pulseIntensity * 0.06}) 40%, 
                rgba(245, 251, 254, ${0.22 + pulseIntensity * 0.05}) 50%, 
                rgba(250, 253, 255, ${0.14 + pulseIntensity * 0.03}) 60%, 
                rgba(252, 254, 255, ${0.08 + pulseIntensity * 0.02}) 70%, 
                rgba(254, 255, 255, ${0.04 + pulseIntensity * 0.015}) 80%, 
                rgba(255, 255, 255, ${0.02 + pulseIntensity * 0.01}) 90%, 
                rgba(255, 255, 255, ${0.00 + pulseIntensity * 0.005}) 100%)`
          : theme === 'dark'
            ? 'linear-gradient(180deg, rgba(13, 13, 13, 0.45) 0%, rgba(10, 13, 32, 0.60) 100%)'
            : 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
        boxShadow: isHovered
          ? theme === 'dark'
            ? '0 8px 20px rgba(255, 255, 255, 0.15), 0 0 15px rgba(255, 255, 255, 0.25)'
            : '0 8px 20px rgba(173, 216, 230, 0.3), 0 0 15px rgba(173, 216, 230, 0.2)'
          : theme === 'dark'
            ? '0px 4px 16px rgba(0, 0, 0, 0.4)'
            : '0px 4px 16px rgba(0, 0, 0, 0.08)',
        transform: isHovered ? 'scale(0.98)' : 'scale(1)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.h3
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="text-center font-branding"
            style={{
              paddingLeft: '5px',
              paddingRight: '5px',
              fontSize: '40px',
              lineHeight: '100%',
              letterSpacing: '-2.5%',
              fontWeight: 400,
              color: theme === 'dark' ? '#C0C0C0' : '#000000',
              whiteSpace: 'pre-line',
            }}
          >
            {formatTitle(title)}
          </motion.h3>
        ) : (
          <motion.p
            key="description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="font-body font-semibold"
            style={{
              paddingLeft: '5px',
              paddingRight: '5px',
              fontSize: '16px',
              lineHeight: '130%',
              letterSpacing: '-0.02em',
              wordSpacing: '0.02em',
              color: '#000000',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            {formatDescription(description)}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function BentoGrid() {
  // Equal gap between cards
  const gap = 20;

  // Calculate positions with equal spacing
  const cards = [
    {
      text: "Vehicle Health Monitoring",
      description: "Displays diagnostic trouble codes (DTCs), warning lights, and component status directly to the app dashboard.",
      x: 0,
      y: 0,
      width: 456,
      height: 216
    },
    {
      text: "Anti-Theft & Anti-Tow Alerts",
      description: "Sends instant notifications if the car is being towed, moved without authorization, or if the device is tampered with.",
      x: 456 + gap,
      y: 0,
      width: 296,
      height: 216
    },
    {
      text: "Cloud-Linked Trip History Backup",
      description: "This feature automatically saves every trip's data — including route, distance, duration, and driving behavior — to a secure cloud system. Users can later access this history through the app for insights, performance tracking, or insurance verification.",
      x: 456 + gap + 296 + gap,
      y: 0,
      width: 407,
      height: 216 + gap + 100
    },
    {
      text: "Predictive Maintenance Alerts",
      description: "Warns users before potential breakdowns by detecting abnormal data patterns from the vehicle's sensors.",
      x: 0,
      y: 216 + gap,
      width: 264,
      height: 100 + gap + 220
    },
    {
      text: "SOS Response",
      description: "Uses sensor data to detect impacts and trigger immediate SOS alerts with live location.",
      x: 264 + gap,
      y: 216 + gap,
      width: 488,
      height: 100
    },
    {
      text: "Geo & Time Fencing",
      description: "Allows users to create custom boundaries; sends alerts when the vehicle enters or exits zones during prohibited hours.",
      x: 264 + gap,
      y: 216 + gap + 100 + gap,
      width: 268,
      height: 220
    },
    {
      text: "Driving Behavior Analytics",
      description: "Gives detailed reports on over-speeding, harsh braking, & mileage efficiency, promoting safer & more economical driving habits.",
      x: 264 + gap + 268 + gap,
      y: 216 + gap + 100 + gap,
      width: 407,
      height: 220
    },
    {
      text: "Real-Time GPS Tracking",
      description: "Enables 24/7 vehicle location monitoring with live route history and trip playback.",
      x: 264 + gap + 268 + gap + 407 + gap,
      y: 216 + gap + 100 + gap,
      width: 200,
      height: 220
    }
  ];

  // Calculate total width and height
  const totalWidth = 264 + gap + 268 + gap + 407 + gap + 200;
  const totalHeight = 216 + gap + 100 + gap + 220;

  // Dynamic layout styles - must be inline for calculated dimensions
  const containerStyle: React.CSSProperties = {
    width: `${totalWidth}px`,
    height: `${totalHeight}px`,
  };

  return (
    <div
      className="relative mx-auto"
      style={containerStyle}
    >
      {cards.map((card, index) => (
        <BentoCard
          key={index}
          index={index}
          title={card.text}
          description={card.description}
          x={card.x}
          y={card.y}
          width={card.width}
          height={card.height}
        />
      ))}
    </div>
  );
}
