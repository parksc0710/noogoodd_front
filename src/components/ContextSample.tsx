import React, {useContext} from 'react'
import TitleContext from "../contexts/TitleContext";

const childComponentSample = () => {

    const titleFromUseContext = useContext(TitleContext);

    return (
        <>
            <TitleContext.Consumer>
                {text => (
                    <h1>{text}</h1>
                )}
            </TitleContext.Consumer>
            <h2>useContext로도 받아올 수 있음 {titleFromUseContext}</h2>
        </>
    )
}

export default childComponentSample;

