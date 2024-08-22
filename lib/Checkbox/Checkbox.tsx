import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, className }) => {
  return (
    <div className={className}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
