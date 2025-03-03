import React from "react";

const Btn2 = ({ title, class2}: {title: string, class2: string}) => {
  return (
    <button id="btn2" className={`${class2}`}>
      {title}
    </button>
  );
};

export default Btn2;
