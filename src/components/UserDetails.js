
const UserDetails = ({user}) => {
  return (
    <div>
        <ul>
            <li> Nome: {user.nome}</li>
            <li> Idade: {user.idade}</li>
            <li> Profissao: {user.profissao}</li>
            {user.idade >= 18 ? (<p> Está apto para tirar a habilitação! </p>) : (<p> Menor de idade!</p>)}
            {/* {user.idade >= 18 && (<p> Está apto para tirar a habilitação! </p>)}  */}
        </ul>
    </div>
  )
}

export default UserDetails