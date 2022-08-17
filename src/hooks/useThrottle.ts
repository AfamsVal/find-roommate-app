import { useRef } from "react";

const useThrouttle = function (cb: () => void, limit: number) {
  const lastRun = useRef(Date.now());

  return function () {
    if (Date.now() - lastRun.current >= limit) {
      cb();
      lastRun.current = Date.now();
    }
  };
};

export default useThrouttle;

//below is the implementation when ever we want to use it
//E.G: If we want to click a button to perform aciton only once. No mater how many times we clicked it
//............................................
// ......
// function handleScroll() {
//   setCalls((c = c + 1));
//   setPosition(
//     Math.round(
//       ((document.documentElement.scrollTop + document.body.scrollTop) /
//         (document.documentElement.scrollHeight -
//           document.documentElement.clientHeight)) *
//         100
//     )
//   );
// }

// window.addEventListener("scroll", useThrouttle(handleScroll, 2000));
