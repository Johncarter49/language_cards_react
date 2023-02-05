import React, { useState } from "react";


function Language({name, id, context, img}) {
  const [control, isControl] = useState(false);
 


  return (
    <>
      <div className="card" id="card" onClick={() => isControl(!control)} >
        {control === false ? (
          <>
            <img src={img} alt={name} className="card-img" />
            <h2 key={id}>{`${name}`}</h2>
          </>
        ) : (
          <ul>{context.map((contexts,index)=>{return(
              <li>{contexts}</li>
          )})}</ul>
        )}
        {/* {!control && (
                     <>
                       <img
                         src={html}
                         alt={name}
                         className="card-img"
                       />
                       <h2 key={id}>{`${name}`}</h2>
                     </>
                   )}


                    {control && (
                     <p>{context}</p>
                   )} */}
      </div>
    </>
  );
}

export default Language;

// <div>
//         <img className="big-img" src={react} alt="react" />
//         <div className="main-topic">
//           <h1>Languages</h1>
//           <div className="litte-bx">
//             {language.map((languages, id) => {
//               return (
//                 <div className="card" onClick={() => isControl(!control)}>

//                   {!control && (
//                     <>
//                       <img
//                         src={html}
//                         alt={languages.name}
//                         className="card-img"
//                       />
//                       <h2 key={id}>{`${languages.name}`}</h2>
//                     </>
//                   )}

//                    {control && (
//                     <p>{languages.context}</p>
//                   )}

//                 </div>

//               );
//             })}
//           </div>
//         </div>
//       </div>
