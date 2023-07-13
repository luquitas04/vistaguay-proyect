import "./statistics.css"
import { useEffect, useRef, useState } from "react";
import { Button, LineChart } from "../../components";
import { Xmark } from "../../assets";

export const Statistics = ({ isActiveStats, toggleStats }) => {

  const [isVisible, setIsVisible] = useState(isActiveStats);
  const closeStats = () => {
    setIsVisible(false);
    setTimeout(() => toggleStats(), 700);
  };

  const containerRef = useRef(null);
  useEffect(() => {
    if (isActiveStats) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight / 2,
        behavior: "smooth",
      });
    }
  }, [isActiveStats]);

  return (
    <>
      <div className={`main_stats ${isVisible ? 'fadein' : 'fadeout'}`}
        style={{
          display: isActiveStats ? 'flex' : 'none',
          zIndex: isActiveStats ? 990 : -1,
        }}
        ref={containerRef}
        >
        <Button
          className={'btn_close-stats'}
          onClick={closeStats}
          textButton={<Xmark />}
        />
        <div className="grid_stats">

          <div className="stats_title">
            <h1>SiloBolsas</h1>
          </div>

          <div className="graphics">
            <div className="graphic">
              <LineChart />
            </div>
          </div>

          <div className="graphics">
            <div className="graphic">

            </div>
          </div>

          <div className="graphics">
            <div className="graphic">

            </div>
          </div>

          <div className="graphics">
            <div className="graphic">

            </div>
          </div>

        </div>
      </div>
    </>
  )
}
