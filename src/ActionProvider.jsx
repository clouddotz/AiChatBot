class ActionProvider{
    constructor(createChatBotMessage, setStateFnc){
        this.createChatBotMessage= createChatBotMessage;
        this.setState=setStateFnc
    }
}

export default ActionProvider