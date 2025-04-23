import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
};

const Button = ({ 
  children, 
  primary = true, 
  onClick, 
  href, 
  className = '' 
}: ButtonProps) => {
  const baseStyles = 'inline-block font-medium text-center py-3 px-8 rounded transition-all duration-300 tracking-wide';
  const primaryStyles = 'bg-yellow-500 text-gray-900 hover:bg-yellow-400 hover:shadow-lg';
  const secondaryStyles = 'bg-transparent border-2 border-yellow-500 text-gray-900 hover:bg-yellow-50';

  const styles = `${baseStyles} ${primary ? primaryStyles : secondaryStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;