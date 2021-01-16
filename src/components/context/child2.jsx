import { useContext , useEffect } from "react";

import { count , countDispatch } from "./count";
function Child2() {
  const countContext = useContext(count);
  const countDispatchContext = useContext(countDispatch)
  useEffect(() => {
    setInterval(() => {
      countDispatchContext({ type: 'INCREMENT' });
    },40);
  },[]);

  return <div>child - 2</div>;
}
export default Child2;
