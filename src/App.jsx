import axios from "axios"
import {useState } from "react";

const App = () => {
  const [quote, setQuote] = useState('Never give up')


  const api = 'https://api.adviceslip.com/advice'

  const fetchQuote = async () => {
    const res = await axios.get(api);
    try {
      setQuote(res.data.slip.advice)
    } catch (error) {
      console.log(error)
    }
  }
 

  return (
    <div className='container'>
      <div className='card'>
        <p>{quote}</p>
        <button onClick={() => fetchQuote()}>Give me Advice</button>
      </div>
    </div>
  )
}

export default App