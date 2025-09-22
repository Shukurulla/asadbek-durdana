import React from "react";
import { cn } from "./utils";

const TooltipProvider = ({ children, delayDuration = 700, ...props }) => {
  return <div {...props}>{children}</div>;
};

const Tooltip = ({ children, ...props }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { open, setOpen })
      )}
    </div>
  );
};

const TooltipTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("cursor-pointer", className)} {...props}>
      {children}
    </div>
  )
);
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef(
  (
    { className, sideOffset = 4, children, open, side = "top", ...props },
    ref
  ) => {
    if (!open) return null;

    const sideClasses = {
      top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
      left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
      right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "absolute z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
          "animate-in fade-in-0 zoom-in-95",
          sideClasses[side],
          className
        )}
        style={{ marginTop: side === "bottom" ? sideOffset : undefined }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
