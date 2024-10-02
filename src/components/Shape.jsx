import { useEffect } from "react"
import "../styles/shape.css"

function Shape({closeShape}) {
    useEffect(() => {
      document.documentElement.classList.add('block-scroll');
      document.body.classList.add('block-scroll');
      
      return () => {
        document.documentElement.classList.remove('block-scroll');
        document.body.classList.remove('block-scroll');

      };
      }, []);

    return (
        <div className="shape" onClick={closeShape}></div>
    )
}

export default Shape

