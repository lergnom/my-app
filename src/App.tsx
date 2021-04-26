import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import Codewars from "./components/Codewars/Codewars";

function App() {
    return (
        <>
            <Accordion titleValue={"Статья 1"} collapsed={true} />
            <Rating value={3}/>
            <Accordion titleValue={"Статья 2"} collapsed={false}/>
            <Rating value={4}/>
            <Accordion titleValue={"Статья 3"} collapsed={true}/>
            <Rating value={1} />
            <Codewars />
        </>

    )
};



export default App;
