import styled from "@emotion/styled";

export const Container = styled.div`
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
export const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;
export const SubTitle = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
`;
export const Section = styled.div`
  margin-bottom: 10px;
`;
export const Form = styled.form`
  position: relative;
`;
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;
export const InputButton = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;
export const Label = styled.label`
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;
export const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  resize: vertical;
`;
export const Button = styled.button`
  padding: 5px 10px;
  max-width: 100px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  a {
    color: #fff;
  }
  font-size: 12px;
  &:hover {
    background-color: #0056b3;
  }
`;
export const TodoItem = styled.div`
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TodoContent = styled.div`
  font-size: 12px;
`;
export const TodoButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
export const TodoListMessage = styled.p`
  text-align: center;
  font-size: 11px;
  color: #ff0000;
  padding: 15px;
`;
