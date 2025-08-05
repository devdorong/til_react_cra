import useInput from "../hooks/useInput";

function NickNameForm() {
  //js
  const address = useInput();

  const handleSubmit = () => {
    alert(address.value);
    address.reset();
  };
  //jsx
  return (
    <div>
      <h2>AddressForm</h2>
      <input type="text" placeholder="이름을 입력하세요." {...address} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default NickNameForm;
