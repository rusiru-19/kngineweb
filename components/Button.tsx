
import React from 'react';
import { COLORS } from '@/constants';
import Link from 'next/link';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick, icon }) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 group";
  
  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-blue-700 active:scale-95",
    secondary: "bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] active:scale-95",
    outline: "bg-transparent border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white active:scale-95"
  };

  return (
    <Link href='/register' >
    
    <button className={`${baseStyles} ${variants[variant]} ${className}`} >
      {children}
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </button>
    </ Link>
  );
};

export default Button;
