import { FC, FormEvent, FormEventHandler } from "react";
import React from "react";
import { cn } from "../../lib/utils";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <form
        className={cn(
          "flex flex-col  gap-2     bg-transparent  py-1 text-sm   placeholder:text-muted-foreground   disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </form>
    );
  },
);
Form.displayName = "Form";

export { Form };
