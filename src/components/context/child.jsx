import { useEffect , useContext } from 'react';
import { count , countDispatch } from "./count";
import Child2 from './child2';

function Child() {
  const countDispatchContext = useContext(countDispatch)
  useEffect(() => {
    setInterval(() => {
      countDispatchContext({ type: 'INCREMENT_500' , payload: { value: 500 } });
    },40);
  },[]);

  return (
    <Child2></Child2>
  );
}
export default Child;
