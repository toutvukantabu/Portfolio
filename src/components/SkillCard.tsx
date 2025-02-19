import React from "react";
import { Box } from "lucide-react";
interface SkillCardProps {
  icon: typeof Box;
  title: string;
  desc: string;
}
export const SkillCard: React.FC<SkillCardProps> = ({
  icon: Icon,
  title,
  desc
}) => {
  return <div className="group p-6 border border-green-400/20 rounded-lg 
                    hover:border-green-400/40 transition-all duration-300
                    hover:bg-zinc-800/50 backdrop-blur-sm
                    transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <Icon className="w-8 h-8 text-green-400 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>;
};