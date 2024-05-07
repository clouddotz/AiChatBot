import { createContext, useEffect, useState } from "react";
import runChat from "../../config";
import Cookies from "js-cookie";
import swal from "sweetalert";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([
    {
      userInput: "",
      aiResponse: "",
    },
  ]);

  const [sidebarData, setsidebarData] = useState([
    {
      userInput: "",
      aiResponse: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const [showPrev, setShowPrev] = useState([{}]);
  const [prevToggle, setPrevToggle] = useState(false);

  const newChat = () => {
    setLoading(false);
    setDisplay(false);
  };
  const onSend = async (Input) => {
    console.log(data);
    setLoading(true);
    setDisplay(true);
    // setPrevInputs(prev=>[...prev, input])
    const botResponse = await runChat(input);
    //  setResponse(botResponse)
    //  if (check.includes(ge))
    let botResonseArray = botResponse.split("**");
    let bot_Response;
    for (let i = 0; i < botResonseArray.length; i++) {
      if (i === 0 || i % 2 == 0) {
        bot_Response += botResonseArray[i];
      } else {
        bot_Response += `<b>` + botResonseArray[i] + `</b>`;
      }
    }
    setData((prev) => [...prev, { userInput: input, aiResponse: botResponse }]);
    setsidebarData((prev) => [
      ...prev,
      { userInput: input, aiResponse: botResponse },
    ]);
    // for (let i=0; i<data.length; i++){
    //     console.log(data[i].botResonse);
    // }
    setLoading(false);
    setInput("");
  };

  // onSend("")

  // User state
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect....");
    // Check for valid token
    const token = Cookies.get("authorized");
    console.log(`token: `, token);
    if (!token) {
      setError("Session expired, login again");
    }
    setUser(token);
  }, []);

  console.log(`USER@: `, user);

  // Handle Login

  const contextValue = {
    onSend,
    data,
    input,
    setInput,
    display,
    setDisplay,
    loading,
    newChat,
    prevToggle,
    setPrevToggle,
    sidebarData,
    showPrev,
    setData,
    setShowPrev,
    user,
    setUser,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
