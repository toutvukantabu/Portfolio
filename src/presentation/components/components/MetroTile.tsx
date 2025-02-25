import React from "react";
import {Box} from "lucide-react";

interface MetroTileProps {
  title: string;
  icon?: typeof Box;
  size?: "small" | "large";
  color: string;
  onClick?: () => void;
}
export const MetroTile: React.FC<MetroTileProps> = ({
  title,
  icon: Icon,
  size = "small",
  color,
  onClick
}) => {
  return <div onClick={onClick} className={`
        ${size === "small" ? "w-[150px] h-[150px]" : "w-[310px] h-[150px]"}
        ${color}
        cursor-pointer
        p-4
        transition-transform
        hover:scale-95
        flex
        flex-col
        justify-between
      `}>
      {Icon && <Icon className="w-8 h-8 text-white" />}
      <h3 className="text-white font-semibold">{title}</h3>
    </div>;
};