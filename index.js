

//let headE1 = React.createElement("h1",{},"Welcome to React")
//If  Div element available.
//let headE1 = React.createElement("div", {}, React.createElement("div", {}, React.createElement("div",{},React.createElement("h1",{},"Welcome to React Class"))))
// const headE1 = 
// <div>
// <h1>Welcome to React WD</h1>
// <p>I like web developement</p>
// </div>

  // const Heading=()=>{
  //    return(
  //    <div>
  //     <h1> Welcome to React - I like it </h1>
  //    </div>
  //    )
  // }

//    const Heading=()=>{
//        return(
//        <div>
//         <h1>Welcome to HTML</h1>
//        </div>
//        )
//    }

// let a =10;

//   const App=()=>{
//    return(
//     <div>
//    <h1>Welcome to React Application</h1>
//    <Heading/>
//    {console.log("Hello")}
//    {Heading()}
//    {a}
//    <Heading></Heading>
//     </div>
//    )
//   }

// root.render(<App/>)



     

  // Resturant card with manually input data ---- Direct data passing 
        // const ResturantCard=()=>{
        //   return(
        //   <div className="restu-card">
        //   <img  className="rest-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/d0caf075899a1a86a2f4d96ea8dbb668"/>
        //   <p>MTR</p>
        //   <p>4.5* ratings</p>
        //   <p>South Indian</p>
        //   <p>45 Mins</p>
        //   <p>Bannerugatta</p>
        //   </div>
        //   )
        // }


///Using PROPS --- 1st Model --- Props passing as argument in resturant functional component.
          //   const ResturantCard=(probs)=>{
          //    console.log(probs)
          //    return(
          //   <div className="restu-card"> 
          //   <img className="rest-img" src={probs.image} />
          //    <p>{probs.name}</p>
          //    <p>{probs.rating}* rating</p>
          //    <p>{probs.cuisine}</p>
          //    <p>{probs.location}</p>
          //   </div>
          //  )
          // }

// //2nd model           

//           const ResturantCard=(probs)=>{
//                   const {image,name,rating,cuisine,location}=probs

//                console.log(probs)
//                return(
//               <div className="restu-card"> 
//               <img className="rest-img" src={image} />
//                <p>{name}</p>
//                <p>{rating}* rating</p>
//                <p>{cuisine}</p>
//                <p>{location}</p>
//               </div>
//                )
//               }

//3rd model

              //   const ResturantCard=({image,name,rating,cuisine,location})=>{
              //  return(
              // <div className="restu-card"> 
              // <img className="rest-img" src={image} />
              //  <p><strong>{name}</strong></p>
              //  <p>{rating}* rating</p>
              //  <p>{cuisine}</p>
              //  <p>{location}</p>
              // </div>
              //  )
              // }


// Taking resList array of data passing dynamically into resturant card.
  
  
    