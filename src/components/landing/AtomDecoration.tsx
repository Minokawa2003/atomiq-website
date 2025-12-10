import { cn } from "@/lib/utils";

interface AtomDecorationProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "orange" | "green" | "yellow" | "purple" | "pink";
}

const AtomDecoration = ({ className, size = "md", color = "blue" }: AtomDecorationProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const colorClasses = {
    blue: "text-atomic-blue",
    orange: "text-atomic-orange",
    green: "text-atomic-green",
    yellow: "text-atomic-yellow",
    purple: "text-atomic-purple",
    pink: "text-atomic-pink",
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {/* Nucleus */}
      <div className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-glow",
        size === "sm" ? "w-4 h-4" : size === "md" ? "w-6 h-6" : "w-8 h-8",
        colorClasses[color]
      )} style={{ backgroundColor: "currentColor" }} />
      
      {/* Electron orbits */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className={cn(
          "absolute top-0 left-1/2 -translate-x-1/2 rounded-full",
          size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : "w-4 h-4",
          colorClasses[color]
        )} style={{ backgroundColor: "currentColor" }} />
      </div>
      
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }}>
        <div className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full",
          size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : "w-4 h-4",
          colorClasses[color]
        )} style={{ backgroundColor: "currentColor" }} />
      </div>
      
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "25s" }}>
        <div className={cn(
          "absolute top-1/2 right-0 -translate-y-1/2 rounded-full",
          size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : "w-4 h-4",
          colorClasses[color]
        )} style={{ backgroundColor: "currentColor" }} />
      </div>
      
      {/* Orbit rings */}
      <div className="absolute inset-0 border-2 rounded-full opacity-30 animate-spin-slow" style={{ borderColor: "currentColor" }} />
      <div className="absolute inset-2 border-2 rounded-full opacity-20 animate-spin-slow" style={{ borderColor: "currentColor", animationDirection: "reverse" }} />
    </div>
  );
};

export default AtomDecoration;
