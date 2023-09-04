import React, { useEffect, useRef, useState } from 'react';
import './Shortener.css';


const getLocalStorage = () => {
  let links = localStorage.getItem("links")

  if (links) {
    return JSON.parse(localStorage.getItem('links'))
  } else {
    return []
  }
}




const Shortener = () => {

  const [valueInput, setValueInput] = useState('');
  const [links, setLinks] = useState(getLocalStorage());
  const [copied, setCopied] = useState("Copy");
  const copyRef = useRef(null);

  // Error
  const [InputEmpty, setInputEmpty] = useState('');
  const [redInpurt, setRedInput] = useState('');

  const [linkList, setLinkList] = useState([]);


  // get to value of input
  const handleChange = (e) =>{
    setValueInput(e.target.value);
    setInputEmpty('')
    setRedInput('')
  }




  // get to link when submit form
  const handleSubmit = (e) => {
    if(!valueInput){
      setInputEmpty('Please add a link')
      setRedInput('RedInput')
    }
    else{
      // Chech for if it's a valid link
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${valueInput}`);
        const data = await res.json(); // extracts the JSON data
        console.log(data)
        setLinks(data.result)
        setValueInput("")
        // setInputEmpty('')
      }
      shortenLink()
    }

    e.preventDefault();
  }




  // to copy the value of the valueInput variable to the clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setCopied('Copied!');
  }

  // Timer 
  useEffect(() => {
    const timer = setTimeout(() => {
      copyRef.current.blur();
      setCopied('Copy');
    }, 2000);
    
    return () => clearTimeout(timer);
},[])



  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links))
  },[links])


  return (
    <div className="Links_component">
      <div className="container-fluid container-md position-relative">
        <form className="box-link" onSubmit={handleSubmit}>
          <div className="input-link">
            <input
              type="url"
              placeholder="Sharten a link here..."
              value={valueInput}
              onChange={handleChange}
              required
              className={redInpurt}
            />
            <button
              type="submit"
              className="btn General-btn"
              onClick={handleSubmit}
            >
              Sharten it!
            </button>
          </div>
          <span>{InputEmpty}</span>
          {/* <span id="error">Please add a link</span> */}
        </form>


        
        <div className="Link-Result">
          <div className="ShortenLink">
            <div className="origin-link">
              <p>{links.original_link}</p>
            </div>
            <div className="shorten">
              <p>{links.full_short_link}</p>
              <button
                className={`btn General-btn px-4`}
                onClick={handleCopy}
                ref={copyRef}
              >
                {copied}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shortener
