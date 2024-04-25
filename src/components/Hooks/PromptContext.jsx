import { createContext, useState } from "react";
import runChat from "../../config";

export const Context=createContext();

const ContextProvider=(props)=>{
    const [input, setInput]=useState("");
    const [recent, setRecent]=useState("");
    const [prevInputs, setPrevInputs]=useState([]);
    const [loading, setLoading]=useState(false);
    const [display, setDisplay]=useState(false);
    const [displayData, setDisplayData]= useState("")

    const newChat=()=>{
        setLoading(false)
        setDisplay(false)
    }
    const onSend= async (Input)=>{
        setDisplayData("")
        setLoading(true)
        // setDisplay(true)
        setRecent(input)
        setPrevInputs(prev=>[...prev, input])
         const response=await runChat(input)
         const check=response.toLocaleLowerCase()
        //  if (check.includes(ge))
        setDisplayData(response)
        setLoading(false)
        setInput("")
    }

    // onSend("")

    const contextValue={
        onSend,
        input,
        setInput,
        prevInputs,
        setPrevInputs,
        recent,
        setRecent,
        display,
        setDisplay,
        displayData,
        loading,
        newChat

    }

    return(
        <Context.Provider value={contextValue}>

            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider