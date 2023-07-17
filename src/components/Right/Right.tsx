import './Right.css'
import memelok from "../../assets/project/memelok.png"

const Right = () => {
    let year = "2023";
    let title = "MemeLok";
    return (
        <>
            <div className="right-wrapper">
                
                <span style={{fontWeight: "300"}}>{year}</span>
                <br />
                <div className="left"></div>
                <div className="project-details-card">
                    <div className="top">
                        <h2 className='name'><span style={{color:"white"}}>{title}</span></h2>
                    </div>  
                    <br />
                    <div>   
                        <img className='coverImg' src={memelok} alt="" />
                    </div>
                    <br />
                    <div>
                        <span>
                            Memelok is a social media website where you get full copyright to your meme as a memer. 
                            <ol style={{marginLeft:"15px", marginBottom: "25px"}}>
                                <li>The website had features like image optimization, real-time chat system, making friends system etc. built with python, nodejs with websocket and php respectively.</li>
                                <li> It's main feature was of uploading memes and I had to tackle different image resolution and sizes to load the images faster i.e without lag on the website.</li>
                                <li>It had functionalities like Page Suggestions to follow them and home-page content was according to interest of the users</li>
                            </ol>
                        </span>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </>
    )
}


export default Right