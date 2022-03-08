import { useState } from "react";
import { formatDuration } from "utils/formatters";
import chevright from "img/svg/chevron-right.svg"
import { IDropDown } from "callbacks/types";


function Dropdown({ options, setIndex }: IDropDown) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<string>("Select Duration");

  return (
    <div className="dropdown stake-apy">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <img src={chevright} />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options === undefined ? null : <>
            {Object.values(options).map((option: any, ind: number) => (
              <div key={ind}
                onClick={() => {
                  setIndex(ind)
                  setSelected(`${formatDuration(option.time.toNumber())} - ${option.apy / 100}% apy`);
                  setIsActive(false);
                }}
                className="dropdown-item"
              ><div style={{color:'white'}}>{formatDuration(option.time.toNumber())} - {option.apy / 100}% apy</div> 
              </div>
            )
            )}


          </>}

        </div>
      )}
    </div>
  );
}

export default Dropdown;
