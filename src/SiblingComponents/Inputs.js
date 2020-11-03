import React, { useEffect } from "react";

const Inputs = ({ check, id, value, onChange, onRadioBtnClick, name }) => {
  const onLocalChange = (event) => {
    onChange(event.target.value, Number(event.target.id));
  };

  const handleRadioBtnClick = () => {
    // console.log("inputID", id);
    onRadioBtnClick(id);
  };

  useEffect(() => {
    console.log("mount");
    return () => console.log("unmount");
  }, []);

  return (
    <div>
      <input
        type="radio"
        defaultChecked={check}
        name={name}
        onChange={handleRadioBtnClick}
      />
      <input value={value} id={id} onChange={(e) => onLocalChange(e)} />
    </div>
  );
};

export default Inputs;
