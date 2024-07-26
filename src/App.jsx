import { useState } from 'react'
import axios from 'axios';


function App() {
  const [value,setValue] = useState('');
  const [response,setResponse] = useState(null)
 
  async function handleClick(){
const result = await axios.post('https://app.shubhamkarmyal95.workers.dev/short',{
  "URL":value,
},{
  headers: {
      'Content-Type': 'application/json',
  }});
setResponse(result.data)
  }
  function handleCopy(){
    navigator.clipboard.writeText(response.shortURL);
    alert('URL Copied Successfully!')
  }
  return (
    <div className='h-screen flex flex-col pt-24 bg-dark-blue gap-12'>

      <div className='flex mx-auto  text-center'>
        <h1 className='text-3xl text-white font-bold '>Convert your Long Url into Short</h1>
      </div>
      <div className='flex flex-col   gap-6 mx-auto'>
        <div className='gap-6 flex'>
        <input 
        type='text' 
        value={value} 
        onChange={e=>setValue(e.target.value)}
        className=' outline-none w-[540px] p-3 h-14 rounded-lg' />
        <button 
        onClick={handleClick}
        className='bg-light-blue text-white text-xl p-3 rounded-lg'>Shorten URL</button>
        </div>
       
        {response?<div className='w-[680px] flex flex-start gap-[350px] p-3 h-14 rounded-lg bg-white'>
          <div className='p-1'>{JSON.stringify(response.shortURL)}</div>
          <button className='bg-slate-700 text-xs font-serif text-white rounded-lg p-2'
          onClick={handleCopy}>COPY</button>
            
        </div>:null}
      </div>
    </div>
  )
}

export default App
