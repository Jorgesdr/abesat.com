import { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  isButton?: boolean;
}

const Skeleton = ({ className, isButton = false, ...props }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded-md ${
        isButton ? "cursor-progress" : ""
      } ${className}`}
      role="status"
      aria-label="Cargando contenido..."
      {...props}
    >
      {/* Espacio vacío para mantener la altura */}
      <span className="invisible">&#8203;</span>
    </div>
  );
};

export default Skeleton;