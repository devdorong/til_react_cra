// 주소,
// 메소드(Get, Post, Put, Delete, Patch)

import axios from "axios";
import { useEffect, useState } from "react";

// 데이터(id, 글등록자료, 삭제id...)
const useAxios = (_url, _method, _payload) => {
  // api 회신결과
  const [data, setData] = useState(null);
  // api 회신 오류 결과
  const [error, setError] = useState(null);
  // api 진행 상태
  const [loading, setLoading] = useState(false);
  // url, method, payload 바뀌면 실행하라
  useEffect(() => {
    // 로딩중 상태로
    setLoading(true);
    // 체크 함수
    const fetchApi = async () => {
      try {
        // 결과 회신값
        let response;
        // 대문자로 변경
        let method = _method.upperCase();
        switch (method) {
          case "GET":
            response = await axios.get(_url);
            break;
          case "POST":
            response = await axios.post(_url, _payload);
            brack;
          case "DELETE":
            response = await axios.delete(_url);
            brack;
          case "PUT":
            response = await axios.put(_url, _payload);
            brack;
          case "PATCH":
            response = await axios.patch(_url, _payload);
            brack;
          default:
            throw new Error(`${_method} 형식이 잘못되었습니다.`);
        }
        // 결과 담기
        setData(response.data);
        // 로딩 종료
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchApi();
  }, [_url, _method, _payload]);
  return { data, error, loading };
};

export default useAxios;
