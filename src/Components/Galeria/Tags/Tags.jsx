import styled from "styled-components";
import tags from "./TagsArray.jsx";


const TagContainer = styled.div`
  display: flex;
  margin-top: 57px;
`;

const TagsParagrafo = styled.p`
  font-size: 24px;
  font-family: Gandhi Sans;
  font-weight: 400;
  line-height: 28.8px;
  color: #d9d9d9;
  opacity: 0.8;
`;

const ButtonTag = styled.button`
  padding: 10px 8px 10px 8px;
  height: 49px;
  background-color: #D9D9D94D;
  border-radius: 10px;
  cursor: pointer;
  color: #ffffff;
  font-size: 24px;
  font-family: Gandhi Sans;
  font-weight: 400;
  line-height: 28.8px;
  border: none;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #C98CF1;
    background-color: #ffffff82;
  }
`;

const TagSection = styled.div`
  margin-left: 80px;
  display: flex;
  gap: 20px;
`;

const Tags = ({setTag}) => {
  return (
    <TagContainer>
      <TagsParagrafo>Busque por tags:</TagsParagrafo>
      <TagSection>
        {tags.map((tag) => (
          <ButtonTag key={tag.id} onClick={() => setTag(tag.id)}>{tag.titulo}</ButtonTag>
        ))}
      </TagSection>
    </TagContainer>
  );
};

export default Tags;
