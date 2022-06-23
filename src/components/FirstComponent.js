import SecondComponent from "./SecondComponent";

// styles
const FirstComponent = () => {

    return (
        <div>
        {/*First component */}
        <h1> My First Component </h1>
            <p className="teste"> My text</p>
            <SecondComponent/>
        </div>
    )
}

export default FirstComponent;