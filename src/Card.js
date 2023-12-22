
function Card(prop){
    return(
        <div
  style={{
    display: "flex",
    flexDirection: "row",
    maxWidth: "60%",
    margin: "auto",
    marginBottom:"10vh",
    color: "#6E6E6D",
    height: "40vh",
    backgroundColor: "#0D0D0C"
  }}
>
  {/* all text appear here */}
  <div style={{ position: "relative" } } >
    {/* thumbnail and text */}
    <div style={{ display: "flex", gap: 25 }}>
      <img src={prop.thumb} style={{ maxWidth: 100 }} />
      <div>
        <p style={{ fontSize: "xx-large", color: "white" }}>{prop.movieName}</p>
        <p style={{ color: "#8DBBE2" }}>{prop.year}</p>
        <div style={{ display: "flex", marginTop: 10, alignItems: "center" }}>
          <p
            style={{
              border: "1px solid white",
              padding: "2px 4px",
              borderRadius: 6
            }}
          >
            {prop.time}
          </p>
          &nbsp;&nbsp;
          <p>{prop.typeOfMove}</p>
        </div>
      </div>
    </div>
    {/* discription */}
    <div>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus enim
        nulla quisquam nisi quam dolorum eaque amet mollitia ratione molestias
        nihil, omnis ipsum laboriosam eum voluptatibus corrupti delectus. 
      </p>
      
    </div>
    {/* share love and comment button */}
    <div
      style={{ position: "absolute", bottom: 10, left: 10, color: "#6E6E6D" }}
    >
      <span className="material-symbols-outlined" style={{ marginRight: 10 }}>
        share
      </span>
      <span className="material-symbols-outlined" style={{ marginRight: 10 }}>
        favorite
      </span>
      <span className="material-symbols-outlined" style={{ marginRight: 10 }}>
        chat_bubble
      </span>
    </div>
  </div>
  {/* the poster appear here */}
  <div className="backImage">
    <img src={prop.poster} alt="" style={{ height: "40vh" }} />
  </div>
  
</div>

    )
}

export default Card;