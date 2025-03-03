import React from "react";

const Btn1 = ({ title, class1}: {title: string, class1: string}) => {
  return (
    <button id="btn1" className={`${class1}`}>
      {title}
    </button>
  );
};

export default Btn1;
