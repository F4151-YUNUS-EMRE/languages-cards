import "./CardBack.css";

const CardBack = (language) => {
  return (
    <div className="back">
      <ul>
        {language.options.map((item)=>{
          return <li key={item}> {item} </li>
        })}
      </ul>
    </div>
  );
};

export default CardBack;