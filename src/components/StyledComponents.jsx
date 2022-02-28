// styled-componentsをインストール
import styled from "styled-components";

export const StyledComponents = () => {
  return (
    // 普通にインポートしたコンテナか、スタイルを当てたコンテナか分かりづらいのが注意
    <SContainer>
      <Stitle>- Styled Components -</Stitle>
      <Sbutton>FIGHT!!</Sbutton>
    </SContainer>
  );
};

// スタイルを当てたコンテナはSをつけることで判別する工夫をしている
const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Stitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

/* sassと同じ記法ができる */
const Sbutton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
