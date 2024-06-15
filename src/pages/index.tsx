import React from 'react';
import Home from "#components/Home";
import Hello from "#components/Hello";
import Name from "#components/Name";
import ChildTitleComponent from "#components/ChildTitleComponent";


function Index() {
    return (
        <>
            <Home />
            <Hello />
            <Name />
            <ChildTitleComponent title={"컴포넌트 테스트"} index={123} />
        </>
    );
}

export default Index;