import React from "react";
import { cn } from "./utils";

const Slider = React.forwardRef(
  (
    { className, value, onValueChange, min = 0, max = 100, step = 1, ...props },
    ref
  ) => {
    const [localValue, setLocalValue] = React.useState(value || [min]);

    const handleChange = (index, newValue) => {
      const updatedValue = [...localValue];
      updatedValue[index] = newValue;
      setLocalValue(updatedValue);
      onValueChange?.(updatedValue);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <div
            className="absolute h-full bg-primary"
            style={{ width: `${((localValue[0] - min) / (max - min)) * 100}%` }}
          />
        </div>
        {localValue.map((val, index) => (
          <input
            key={index}
            type="range"
            min={min}
            max={max}
            step={step}
            value={val}
            onChange={(e) => handleChange(index, Number(e.target.value))}
            className="absolute h-2 w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-background [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:shadow"
          />
        ))}
      </div>
    );
  }
);
Slider.displayName = "Slider";

export { Slider };
