
const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
      <button onClick={myFunction}> Clique aqui para executar a função vinda do componente pai!</button>
    </div>
  )
}

export default ExecuteFunction