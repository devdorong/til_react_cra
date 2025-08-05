import useInput from "../hooks/useInput";

function AddressForm() {
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
      <input type="text" placeholder="주소를 입력하세요." {...address} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default AddressForm;
