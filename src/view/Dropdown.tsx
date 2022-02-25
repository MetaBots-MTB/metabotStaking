import { useState } from "react";
import { formatDuration } from "utils/formatters";
import chevright from "../img/svg/chevron-right.svg"

function Dropdown({ options, setIndex }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Year");

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <img src={chevright} />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {Object.values(options).map((option: any, ind: number) => (
            <div key={ind}
              onClick={() => {
                setIndex(ind)
                setSelected(`${option.apy / 100}% apy ${formatDuration(option.time.toNumber())} minutes`);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              <p>{option.apy / 100}% apy</p>
              <p>{formatDuration(option.time.toNumber())} minutes</p>
            </div>
          )
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
