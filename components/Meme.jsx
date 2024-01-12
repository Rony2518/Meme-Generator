import React from "react"

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "Hello 👋",
        bottomText: "Make Meme and Have Fun",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    }) 

    const [allMeme, setAllMeme] = React.useState([])

    React.useEffect(() =>{
        async function getMeme(){
            let response = await fetch("https://api.imgflip.com/get_memes")
            let data = await response.json()
            setAllMeme(data.data.memes)
        }
        getMeme()
        return () =>{
            //clean up code
        }
        // fetch("https://api.imgflip.com/get_memes")
        // .then(res => res.json())
        // .then(data => setAllMeme(data.data.memes))
    },[])

    function getMemeImage(){
        // url = memeArray[rand].url <-- this is incomplete
        const rand = Math.floor(Math.random()*allMeme.length)
        const url = allMeme[rand].url
        setMeme(preState => ({
            ...preState,
            imageUrl: url
        }))
    }

    function hadleChange(event){
        const {name, value} = event.target
        setMeme(preState =>{
            return{
                ...preState,
                [name]:value
            }
        })
    }

    function hadleSubmit(event){
        event.preventDefault()
    }

    return(
        <form onSubmit={hadleSubmit}>
            <section>
                <div className="form" action="">
                    <div className="input">
                        <label className="input_label">Top text</label>
                        <input 
                            type="text" 
                            className="input_value" 
                            placeholder="No Matter"
                            name="topText"
                            value={meme.topText}
                            onChange={hadleChange}
                        />
                    </div>
                    <div className="input">
                        <label className="input_label">Bottom text</label>
                        <input 
                            type="text" 
                            className="input_value" 
                            placeholder="I Will Never Give Up On Anything"
                            name="bottomText"
                            value={meme.bottomText}
                            onChange={hadleChange}
                        />
                    </div>
                    <button className="input_btn" onClick={getMemeImage}>Get your new meme image &#128444;</button>
                </div>
            </section>
            <section className="output_box">
                <h3 className="top_text">{meme.topText}</h3>
                <h3 className="bottom_text">{meme.bottomText}</h3>
                <img src={meme.imageUrl} className="out_img" alt="" />
            </section>
        </form>
    )
}
