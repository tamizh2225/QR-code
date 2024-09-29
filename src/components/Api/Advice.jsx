// import { useState } from "react";
// import "./Advice.css";

// export const Advice = () => {
//   const [advice, setAdvice] = useState("Please Click the button to Get Advice");
//   const [count, setCount] = useState(0);

//   async function changeEvent(e) {
//     const res = await fetch("https://api.adviceslip.com/advice");
//     // console.log(res);

//     const data = await res.json();
//     // console.log(data);
//     setAdvice(data.slip.advice);
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h3>{advice}</h3>
//       <button onClick={changeEvent}>Get Advice</button>
//       <p>
//         you have read <b>{count}</b> pieces of advice
//       </p>
//       {/* <a href="https://www.youtube.com/watch?v=5ss1lIpkh1o&list=PL4unWLKFsZffVNM7JwUkNwmcLDMx3fivO&index=8">tamzih</a> */}
//     </div>
//   );
// };
