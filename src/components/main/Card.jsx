import { useState } from "react";
import "./Card.css";
import CardBack from "./CardBack";
import CardFront from "./CardFront";



const Card=(languages)=>{
  const [toggle, setToggle] = useState(true)
  console.log(languages);
  
  const { name, img, options } = languages;

  const handleClick=(e)=>{
      setToggle(!toggle)
      
  }
  return(
            <div className="card" onClick={handleClick} >
              {toggle? <CardFront {...languages} /> :<CardBack {...languages} /> }
            </div>
            )
        }

        
export default Card;
