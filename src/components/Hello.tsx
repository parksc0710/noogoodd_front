const Hello = () => {

    const onclick = () => {
        alert("hello");
    }

    const text = "Hello! World";

    return (
        <div className={"onclick_class"} onClick={onclick}>
            {text}
        </div>
    );
}

export default Hello;
