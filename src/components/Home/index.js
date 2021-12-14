import React, { useState, useEffect } from "react";

function Home() {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    })

    useEffect(() => {
        const timeout = setInterval(() => {
           if (fadeProp.fade === 'fade-in') {
              setFadeProp({
                   fade: 'fade-out'
              })
           } else {
                setFadeProp({
                   fade: 'fade-in'
                })
           }
        }, 1000);
   return () => clearInterval(timeout)
   }, [fadeProp])

    return (
        <div className="welcome flex-row space-around">
            <h1 className={fadeProp.fade}>Hey!</h1>    
        </div>
    )
}

export default Home;