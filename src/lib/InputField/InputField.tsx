import React, { useState } from 'react';
import './InputField.css';

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  variant?: 'outlined' | 'filled' | 'minimal';
  status?: 'default' | 'error' | 'success';
  helperText?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  variant = 'outlined',
  status = 'default',
  helperText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputFieldClass = `input-field input-field--${variant} ${isFocused ? 'is-focused' : ''} ${value ? 'has-value' : ''} status--${status}`;

  return (
    <div className={inputFieldClass}>
      <div className="input-container">
        {icon && <div className="input-icon">{icon}</div>}
        <div className="input-wrapper">
          <input
            type={type}
            placeholder={isFocused ? placeholder : ''}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={icon ? 'with-icon' : ''}
          />
         <label className={`floating-label ${icon ? 'left-space' : ''}`}>{label}</label>

        </div>
      </div>
      {helperText && <div className="helper-text">{helperText}</div>}
    </div>
  );
};


