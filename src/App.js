import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './componants/ChatFeed';
import LoginForm from './componants/LoginForm';
import './App.css';

const projectID = '2a36fd2e-7e30-488e-9763-2678836211aa';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};


export default App;