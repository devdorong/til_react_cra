import styled from "@emotion/styled";
import React from "react";
//window
const Container = styled.div`
  width: 760px;
  margin: 15px auto;
  padding: 30px;
  background-color: #fbfbfb;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #eaeaea;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  text-align: center;
`;
const SubTitle = styled.h2`
  text-align: center;
`;
const Section = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Form = styled.form`
  position: relative;
`;
const InputWrap = styled.div`
  display: flex;
  gap: 8px;
`;
const Label = styled.label`
  font-size: 13px;
  display: flex;
  align-items: center;
`;
function MindDiary() {
  //js

  //jsx
  return (
    <Container>
      <Title>MindDiary</Title>
      <Section>
        <Form>
          <InputWrap>
            <Label>오늘의 기분</Label>
            <input type="text" name="title" id="" />
          </InputWrap>
          <InputWrap>
            <Label>있었던 일</Label>
            <textarea name="content" />
          </InputWrap>
          <button type="submit">등록</button>
        </Form>
      </Section>
      <SubTitle>수정하기</SubTitle>
      <Section>
        <Form>
          <InputWrap>
            <Label>선택한 기분</Label>
            <input type="text" name="title" />
          </InputWrap>
          <InputWrap>
            <Label>선택한 내용</Label>
            <textarea name="content" id="" />
          </InputWrap>
          <button type="submit">내용 수정</button>
        </Form>
      </Section>
      <SubTitle>목록</SubTitle>
      <Section>
        <Label>몇번째 내용</Label>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </Section>
    </Container>
  );
}

export default MindDiary;
