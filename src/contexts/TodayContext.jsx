// 1. 초기값

const { createContext, useReducer, act } = require("react");

// [{id:날짜, text:할일, completed: true}]
const initializeTodos = [];

// 2. 리듀서 함수

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: new Date(), text: action.payload, completed: false },
      ];
    case "toggle":
      // action = {type:"toggle", payload:아이디}
      return state.map(item => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    // action = {type:"delete", payload:아이디}
    case "delete":
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

// 3. 컨텍스트 변수

export const TodayContext = createContext(null);

// 4. Provider 생성 및 적용

export const TodayContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initializeTodos);
  return (
    <TodayContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodayContext.Provider>
  );
};
