import React, { useState, useRef } from "react";
import './Inputs.scss'


export function Input({
    id = "",
    name,
    value,
    onChange,
    onClick,
    type = "text",
    label = "",
    placeholder = "",
    min = "",
    max = "",
    step = "",
    readOnly = false,
    disabled = false,
    required = false,
    children,
    isIcon = false,
    icon,
    error = "",
    height = "30px",
    color = 'black',
    borderRadius = '5px',
    borderWidth = '1px',
    borderColor = 'rgba(128, 128, 128, 0.253)',
    backgroundColor= 'white',
}) {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <div className="input-container-span" style={{ border: `${borderWidth} solid ${borderColor}`, borderRadius : borderRadius, backgroundColor: backgroundColor }}>
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                    step={step}
                    readOnly={readOnly}
                    disabled={disabled}
                    required={required}
                    style={{
                        height: height,
                        color : color,
                        fontSize: '18px',
                        paddingLeft: '8px',
                    }}
                />
                {isIcon && <span
                    className={isIcon &&  "input-container-span-adornment"}
                    onClick={onClick}
                    style={{
                        height: height,
                    }}
                >
                    {isIcon && <span className="input-container-span-adornment-icon">
                      {icon ? icon : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.1 22q-1.888 0-3.543-.713q-1.655-.714-2.893-1.951t-1.95-2.893Q4 14.788 4 12.9q0-2.565 1.32-4.733t3.613-3.313q.396-.2.765.003q.37.203.402.624q.137 2.048.954 3.906q.817 1.857 2.26 3.3q1.442 1.442 3.28 2.25q1.839.807 3.887.944q.457.032.664.408q.207.376.007.778q-1.158 2.289-3.322 3.61Q15.665 22 13.1 22" /></svg>}
                    </span>}
                </span>}

            </div>

            {error && <span>{error}</span>}
        </div>
    );
}


export const RippleButton = ({ text }) => {
  const [ripples, setRipples] = useState([]);

  const animateRipple = (e) => {
    const el = e.currentTarget;
    const pos = el.getBoundingClientRect();
    const newRipple = {
      x: e.clientX - pos.left,
      y: e.clientY - pos.top,
      show: true
    };
    setRipples([...ripples, newRipple]);
  };

  const rippleEnd = (index) => {
    setRipples(ripples.map((ripple, i) => (
      i === index ? { ...ripple, show: false } : ripple
    )));
  };

  return (
    <button className="ti-btn" onClick={animateRipple}>
      {text}
      <div className="ripple-container">
        {ripples.map((ripple, index) =>
          ripple.show && (
            <span
              className="ripple"
              key={index}
              style={{ top: ripple.y + 'px', left: ripple.x + 'px' }}
              onAnimationEnd={() => rippleEnd(index)}
            />
          )
        )}
      </div>
    </button>
  );
};


export function Button({ onClick, testId, disabled = false, text, style = {}, type = "button", icon }) {
    return (
        <button
            className="custom-btn-container"
            style={{
                ...style,
                textTransform: "none",
                cursor: disabled ? "not-allowed" : "pointer", // Setting cursor based on disabled state
            }}
            disabled={disabled}
            onClick={onClick}
            type={type}
            data-testid={testId}
        >
            {text}
            {icon}
        </button>
    );
}
