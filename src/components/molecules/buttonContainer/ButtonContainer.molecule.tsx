import React from "react";
import { Button } from "../../atoms";

function ButtonContainer() {
  return (
    <div className="flex gap-28 mt-10">
      <Button btnText="Previous" />

      <Button btnText="Next" />
    </div>
  );
}

export default ButtonContainer;
