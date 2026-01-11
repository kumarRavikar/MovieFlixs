import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAiRespoonse } from '../redux/AiSlice';

export const Ai = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const handleAi = ()=>{
        if(!query) return;
        dispatch(fetchAiRespoonse(query));
    }
    const {loading, response,error} = useSelector((state)=>state.ai);
  return (
    <div>
    <input type='text' placeholder='ask form AI...'
     value={query} onChange={(e)=>setQuery(e.target.value)}/>
      <button onClick={handleAi}>{loading ? "Thinking...":"Ask AI"}</button>
      {error && <strong style={{color:"red"}}>{error}</strong>}
      {response && <p>{response}</p>}
    </div>
  )
}
