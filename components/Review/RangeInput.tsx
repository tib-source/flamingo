import React from "react";
import styled from "styled-components";
import { Color } from "../../data/Color";
import { flex } from "../Util/flex";
const Container = styled(flex)`
  gap: 1rem;
  p {
    padding: 0;
    margin: 0;
  }
  .progress {
    width: 150px;
    background: ${Color.gray};
    border-radius: 1rem;
  }

  .progress > div {
    background: ${Color.orange};
    width: ${(props) => props && `${props.width}%`};
    height: 15px;
    border-radius: 10px;
  }
`;
const RangeInput = ({ count, value }) => {
  return (
    <Container width={value}>
      <p>{count} star</p>
      <div className="progress">
        <div></div>
      </div>
      <p>{value}%</p>
    </Container>
  );
};

export default RangeInput;
