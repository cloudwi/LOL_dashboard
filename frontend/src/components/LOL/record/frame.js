import styled from 'styled-components';

const Frame = ({ width, height, children }) => {
  return (
    <StyledFrame width={width} height={height}>
      {children}
    </StyledFrame>
  );
};

const StyledFrame = styled.div`
  width: ${(props) => props.width || '300px'};
  heigth: ${(props) => props.height || '460px'};
  min-height: ${(props) => props.height || '400px'};
  color: red;
`;

export default Frame;
