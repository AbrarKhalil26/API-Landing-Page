import React, { useEffect, useState } from 'react'
import './LinkResult.css'
import axios from 'axios';

import {CopyToClipboard} from 'react-copy-to-clipboard';





const LinkResult = ({valueInput , handleSubmit}) => {

    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [Links, setLinks] = useState([]);




    const fetchData  = async () => {
        try{
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${valueInput}`);
            setShortenLink(res.data.result.full_short_link);
        
        }catch(err){
            setError(err);

        }finally{
            setLoading(false);
        }
    }


    useEffect(() => {
        if(valueInput.length){
            fetchData();
        }
    }, [valueInput]);


    
    
    // Timer 
    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);
        
        return () => clearTimeout(timer)
        
    },[copied])
    

    if(loading){
        return <p className='noData'>Loading...</p>
    }
    if(error){
        return <p className='noData'>Something wne t wrong.</p>
    }

    
    return (
        <>

            {shortenLink && handleSubmit && (
                <div className="ShortenLink">
                    <div className='origin-link'>
                        <p>{valueInput}</p>
                    </div>
                    <div className="shorten">
                        <p>{shortenLink}</p>

                        <CopyToClipboard
                            text={shortenLink}
                            onCopy={() => setCopied(true)}
                        >
                            <button
                            className={`${copied ? "copied" : ""} btn General-btn px-4`}
                            >
                            Copy
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
            )}
        </>
    );
}

export default LinkResult
