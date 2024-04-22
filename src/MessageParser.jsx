class MessageParser{
    constructor(actionProvider){
        this.actionProvider=actionProvider
    }
    parse(message){
        console.log(message)
    }
}

export default MessageParser