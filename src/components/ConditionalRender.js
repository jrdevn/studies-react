import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("Leandro");
    return (
        <div>
            <h1>
                Isso será exibido?
            </h1>
            {/* condicional simples */}
            {x && <p> Se x for true, sim!</p>} 
            {!x && <p> Se x for falso, sim!</p>} 
            {/*if ternário */}
            {name === "Jhow" ? (
                <div>
                    <p> O nome é {name}</p>
                </div>
            ) : (
                <div>
                    <p> Nome não encontrado!</p>
                </div>
            )}
            <button onClick={() => setName("Jhow")}> Clique aqui para mudar o nome</button>
        </div>
    )

}

export default ConditionalRender