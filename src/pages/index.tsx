import React from 'react';
import Home from "#components/Home";
import Hello from "#components/Hello";
import Name from "#components/Name";
import ChildTitleComponent from "#components/ChildTitleComponent";
import ContextSample from "#components/ContextSample";
import TitleContext from "contexts/TitleContext";
import UseStateSample from "#components/UseStateSample";
import UseReducerSample from "#components/UseReducerSample";
import UseEffectSample from "#components/UseEffectSample";

const title:string = "Hello from Context";

function Index() {
    return (
        <>
            <Home />
            <Hello />
            <Name />
            <ChildTitleComponent title={"컴포넌트 테스트"} index={123} />
            <TitleContext.Provider value={title}>
                <ContextSample></ContextSample>
            </TitleContext.Provider>
            <UseStateSample initValue={0}></UseStateSample>
            <UseReducerSample initValue={0}></UseReducerSample>
            <UseEffectSample></UseEffectSample>
        </>
    );
}

export default Index;

