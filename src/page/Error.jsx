import React from "react";
import styled from "styled-components";

function Error() {
  return (
    <div className="image">
      <Image
        src="https://www.vizion.com/wp-content/uploads/2018/09/shutterstock_479042983.jpg"
        alt=""
      />
    </div>
  );
}

const Image = styled.img`
  width: 100vw;
  height: 87vh;
  object-fit: cover;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export default Error;
