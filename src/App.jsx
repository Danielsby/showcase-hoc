import React from "react";
import {HocComponent} from "./Hoc";
import {Hello} from "./Hello";

const NewComponent = HocComponent(Hello);

const App = () => {
    return (
        <NewComponent />
    )
}

export default App;