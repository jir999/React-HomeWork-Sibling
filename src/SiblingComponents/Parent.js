import React, { useState } from "react";
import InputsList from "./InputsList";

// useCallback, useMemo, React.memo

const Parent = () => {
  const [inputValues, setInputValues] = useState(() => [
    [
      { id: 1, value: "", checked: false },
      { id: 2, value: "", checked: false },
      { id: 3, value: "", checked: false },
      { id: 4, value: "", checked: false },
      { id: 5, value: "", checked: false }
    ],
    [
      { id: 6, value: "", checked: false },
      { id: 7, value: "", checked: false },
      { id: 8, value: "", checked: false },
      { id: 9, value: "", checked: false },
      { id: 10, value: "", checked: false }
    ]
  ]);

  const handleRadioBtnClick = (radioBtnId) => {
    const newValues = inputValues.map((arr) => {
      arr.map((item) => {
        if (item.id === radioBtnId) {
          item.checked = !item.checked;
        } else {
          item.checked = false;
        }
        return item;
      });
      return arr;
    });

    console.log(newValues);

    setInputValues(newValues);
  };

  const handleInputChange = (inputValue, inputId) => {
    const newValues = inputValues.map((arr) => {
      return arr.map((item) => {
        if (item.id === inputId) {
          return {
            ...item,
            value: inputValue
          };
        }
        return item;
      });
    });

    setInputValues(newValues);
  };

  const handleSwitchClick = () => {
    // [ [{...}] , [{...}] ]
    const firstArr = [...inputValues[0]];
    const secondArr = [...inputValues[1]];

    //console.log("state", inputValues)

    const newValues = inputValues.map((arr, index) => {
      arr.map((item) => {
        if (item.checked && index === 0) {
          console.log("B");
          firstArr.filter((newItems) => !newItems.checked);
          item.checked = false;
          secondArr.push(item);
          return null;
        } else if (item.checked && index === 1) {
          console.log("how");
          secondArr.filter((newItems) => !newItems.checked);
          item.checked = false;
          firstArr.push(item);
          return null;
        }

        return item;
      });

      // console.log("firstArr", firstArr);
      // console.log("secondArr",secondArr);

      if (index === 0) {
        return firstArr;
      } else {
        return secondArr;
      }
    });

    console.log("newValues", newValues);
    setInputValues(newValues);
  };

  return (
    <div>
      <InputsList
        onRadioBtnClick={handleRadioBtnClick}
        onInputChange={handleInputChange}
        inputValues={inputValues}
      />
      <button onClick={handleSwitchClick}>Switch</button>
    </div>
  );
};

export default Parent;
