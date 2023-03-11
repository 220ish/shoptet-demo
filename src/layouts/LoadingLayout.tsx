import LoadingDots from "@components/LoadingDots";
import styled from "styled-components";

const ContainerLayout = styled.div`
  background-color: #000;
  display: flex;
  height: 100vh;

  justify-content: center;
  align-items: center;

  background-color: #000;
  color: #FFF;
`

const LoadingLayout = () => {
    return (
      <ContainerLayout>
        <LoadingDots color="white" />
      </ContainerLayout>
    );
};

export default LoadingLayout

