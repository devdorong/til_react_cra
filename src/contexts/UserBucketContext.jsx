import { createContext, useState } from "react";

export const UserBucketContext = createContext();
export const UserBucketProvider = ({ children }) => {
  const [bucketList, setBucketList] = useState([]);
  /**
   * 장바구니 총금액 예제 추후 사용예정
   */
  //   const [total, setTotal] = useState(0);
  //   useEffect(() => {}, [bucketList]);
  return (
    <UserBucketContext.Provider value={{ bucketList, setBucketList }}>
      {children}
    </UserBucketContext.Provider>
  );
};
