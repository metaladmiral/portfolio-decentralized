import './Left.css'
import myPhoto from '../../assets/my-photo.jpg'
import python from '../../assets/python.png'
import ethereum from '../../assets/ethereum.png'
import js from '../../assets/js.png'
import php from '../../assets/php.png'
import sql from '../../assets/sql.png'
import react from '../../assets/react.svg'

const Left = () => {
    return (
        <>
            <div className="left-wrapper">
                <img src={myPhoto} className='myPhoto' alt="" />
                <br />
                <h1>Hi, I am Prakhar</h1>
                <br />
                <span>I am a Full-Stack Developer</span>
                <br />
                <div className="proficiencies">
                    <img src={ethereum} className='eth' alt="" />
                    <img src={js} alt="" />
                    <img src={php} alt="" />
                    <img src={sql} alt="" />
                    <img src={react} alt="" />
                    <img src={python} alt="" />
                </div>
            </div>
        </>
    )
}

export default Left