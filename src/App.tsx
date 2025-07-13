
import './App.css'
import Card from './component/Card'

import { FaUserPlus ,FaTasks,FaEdit, FaHistory} from 'react-icons/fa';

function App() {
 

  return (
    <>
   <div style={{
  margin: '40px auto',
  display: 'flex',
  justifyContent: 'center',
  gap: '24px',
  flexWrap: 'wrap',
  maxWidth: '1000px'
}}>
 <Card title="Visitor Entry" icon={<FaUserPlus  />} />
  <Card title="Task Assignment" icon={<FaTasks  />} />
<Card title="Officer View & Update" icon={<FaEdit  />} />
<Card title="Visitor History" icon={<FaHistory  />} />
</div>
    </>
  )
}

export default App
