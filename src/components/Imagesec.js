import React from "react";
import { Leftside } from "../styled components/App.style";
import undraw from "../Assets/undraw_authentication_re_svpt.svg";
import { Image } from "../styled components/App.style";
import { Leftinner } from "../styled components/App.style";
function Imagesec() {
  return (
    <Leftside>
      <Leftinner>
        <Image src={undraw}></Image>
      </Leftinner>
    </Leftside>
  );
}

export default Imagesec;
