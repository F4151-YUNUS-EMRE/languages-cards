import "./CardFront.css"

const CardFront=(languages)=>{
    console.log(languages)

    const { name, img } = languages;
    return(
        <div className="front text-center">
              <div className="img">
                <img src= {img} alt=""/>
              </div>
              <div className="title">
                <h4> {name} </h4>
              </div>
        </div>
    )
}

export default CardFront;