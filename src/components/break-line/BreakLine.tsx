import { Fragment } from "react";

const BreakLine = ({ str, newLine }: { str: string; newLine: boolean }) => {
  return (
    <>
      {str.split("\\n").map(
        (item, index) =>
          newLine === true ? (
            <span key={index}>
              {item}
              <br />
            </span>
          ) : (
            <span key={index}>
              {item} {"  "}
            </span>
          )
        // index === 0 ? item : [<br key={index} />, item]
      )}
    </>
  );
};

export default BreakLine;
