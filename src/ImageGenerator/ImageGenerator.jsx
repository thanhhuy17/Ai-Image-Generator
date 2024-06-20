import React, { useRef, useState } from 'react'
import '../ImageGenerator/ImageGenerator.css'
const ImageGenerator = () => {
    
    let defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhibiy0APbQYRRk62Qy2JJdbhTSa_xXR_zdw&s'
    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null)

    const imageGenerator = async ()=>{
        if(inputRef.current.value===''){
            return 0;
        }
        const response  = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers:{
                    "Content-Type" : "application/json",
                    Authorization:
                    "My Key",
                    "User-Agent":"Chrome",
                },
                body:JSON.stringify({
                    prompt:`${inputRef.current.value}`,
                    n:1,
                    size: "512x512",
                }),
            }

        );
        let data = await response.json();
        console.log(data)
    }
  
    return (
    <div className='ai-image__generator'>
        <div className="header">Ai image
            <span> Generator</span>
        </div>

        <div className="img__loading">
             <div className="image">
                <img src={image_url==="/"?defaultImg:setImage_url} alt="" />
             </div>
        </div>

        <div className="input__generator">
            <input ref={inputRef} type="text" placeholder='Describe What You Want To See. . .' className="input__description" />
            <button onClick={()=>{imageGenerator()}} className="input__generator-btn">Generator</button>
        </div>
    </div>
  )
}

export default ImageGenerator