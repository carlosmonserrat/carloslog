import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {saySomething, saySomethingSucceed} from "../../redux/actions";

const SagaExample = () => {

  const something = useSelector(state => state.saySomething);
  const dispatch = useDispatch();

  const onSayHello = (message) => {
    dispatch(saySomethingSucceed(message))
  }

  const onSayHelloAsync = (message) => {
    dispatch(saySomething(message))
  }

  return (
    <p>
      Hello: {something}.
      <button onClick={() => onSayHello("hola que tal !!!!")}>say something to reducer</button>
      <button onClick={() => onSayHelloAsync("hola que tal async!!!")}>say something to saga</button>
    </p>
  )
}

export default SagaExample;