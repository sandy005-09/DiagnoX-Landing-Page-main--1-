import { motion } from 'framer-motion';
import { useState } from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
  index: number;
}

export function BenefitCard({ title, description, index }: BenefitCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-lg border border-gray-400/40 py-6 backdrop-blur-sm cursor-pointer"
      style={{
        width: '456px',
        paddingLeft: '24px',
        paddingRight: '24px',
        backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.95)' : 'rgba(192, 192, 192, 0.5)',
        boxShadow: isHovered
          ? '0 20px 40px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.5)'
          : '0 10px 25px rgba(0, 0, 0, 0.15)',
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <h3 className="mb-3 font-branding text-[28px] leading-[1.2] text-black text-center">
        {title}
      </h3>
      <p className="text-justify font-body text-[14px] leading-[1.4] text-black">
        {description}
      </p>
    </motion.div>
  );
}
