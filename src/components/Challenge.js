const Challenge = () => {


    const a = 2;
    const b = 3;
    return (
        <div>
            <div>
            <span>
                valor de a: {a}
            </span>
            </div>
            <div>
            <span>
                valor de b: {b}
            </span>
            </div>
            <div>
                <button onClick={() => console.log(a + b)}>
                    Clique aqui para somar os dois valores
                </button>
            </div>
        </div>
    )
}

export default Challenge;