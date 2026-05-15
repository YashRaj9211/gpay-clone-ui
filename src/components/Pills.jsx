import React from "react";
function Pills({ children, icon }) {
  return (
    <div className="flex items-center gap-2 border border-border-main rounded-full p-2 whitespace-nowrap">
      <div className="w-10 h-10 rounded-full  flex items-center justify-center">
        <img src={icon} alt="Tap & Pay" className="w-8 h-8" />
      </div>
      <span className="text-sm mr-2 ">
        {children}
      </span>
    </div>
  );
}

export default Pills;
