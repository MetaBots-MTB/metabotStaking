import { useState } from "react";
import { formatDuration } from "utils/formatters";
import chevright from "img/svg/chevron-right.svg"
import { IDropDown } from "callbacks/types";


function Dropdown({ options, setIndex }: IDropDown) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<string>("Select Duration");

  console.log('asdf', options)

  return (
    <div className="dropdown stake-apy">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <img src={chevright} />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options === undefined ? console.log('Test') : null}
          {Object.values(options).map((option: any, ind: number) => (
            <div key={ind}
              onClick={() => {
                setIndex(ind)
                setSelected(`${option.apy / 100}% apy ${formatDuration(option.time.toNumber())} minutes`);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              <p>{option.apy / 100}% apy -
                {formatDuration(option.time.toNumber())} minutes </p>
            </div>
          )
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
