'use client';
import React from "react";

function Censored({children}) {
  const [isCensored, setIsCensored] = React.useState(true);
          
  return (
    <button 
      class={isCensored && "censored"}
      onClick={() => setIsCensored(!isCensored)}
    >
      {children}
    </button>
  );
}

export default Censored;
