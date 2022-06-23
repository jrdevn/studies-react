const TemplateExpressions = () => {


    const name = "Jhonata";
    const data = {
        age: 23,
        job: "Developer",
    }
    return (
        <div>
            <h1> Olá {name}, tudo bem? </h1>
            <p>Você atua como {data.job} </p>
        </div>
    )
}

export default TemplateExpressions;