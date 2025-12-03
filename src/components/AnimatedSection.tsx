import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export const AnimatedSection = ({ id, title, icon: Icon, gradient, children, isExpanded, onToggle }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
    }
  }, [isExpanded]);

  return (
    <div className="mb-6 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.01]">
      <button
        onClick={onToggle}
        className={`w-full px-8 py-6 bg-gradient-to-r ${gradient} text-white flex items-center justify-between transition-all duration-300 hover:shadow-2xl`}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm transform transition-transform duration-300 hover:rotate-12">
            <Icon size={28} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl">{title}</span>
        </div>
        <div className="transform transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <ChevronDown size={28} />
        </div>
      </button>
      
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isExpanded ? '10000px' : '0',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className={`p-8 bg-gradient-to-br from-gray-50 to-white transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};