import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css'

const App =()=>{

    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
            height="100vh"
            projectID="70c8a517-1e54-42d2-bccd-29efaded546d"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        
        
        />
    )
}

export default App