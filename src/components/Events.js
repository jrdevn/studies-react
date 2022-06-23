const Events = () => {


    const handleMyEvent = (e) => {
        console.log('epa');
        console.log(e);
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1> Renderizando isso!</h1>
        }
        return <h2> Também posso renderizar isso</h2>
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}> Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('click')}> Clique aqui também!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;