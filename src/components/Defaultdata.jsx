import React, { useState } from 'react'
import axios from 'axios'
import './defaultdata.css'
import { useEffect } from 'react/cjs/react.development'
import Modal from 'react-modal'
// import Navbar from './Navbar'
Modal.setAppElement('#root')
const Defaultdata = () => {
    const [img, setImg] = useState([])
    const [modalImg, setModalImg] = useState("")
    const [modalIsOpen, setModalIsOpen] = useState(false)

        useEffect(() => {

        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=7dac89ea8f85859230ab7bd53e97ad60&format=json&nojsoncallback=1`)
            .then(function (res) {
                return (res.data.photos.photo)
            })
            .then(function (result) {
                let picArray = result.map((el) => {
                    let srcPath = `https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_w.jpg`
                    return (<>
                        <img onClick={() => handleClick(srcPath)} key={el.id} src={srcPath} alt={el.owner} />
                        
                        </>
                    )
                })
                setImg(picArray)
            })


    }, [])
    const handleClick = (src) =>{
        setModalIsOpen(true)
        setModalImg(src)
        // console.log(modalImg)
    }


    return (
        <>
        <div className="header">Flickr</div>

        <div className="imgContainer">
            {img}
            <Modal 
            isOpen={modalIsOpen} 
             onRequestClose={() => setModalIsOpen(false)} 
             style={
                 {
                     overlay:{
                         backgroundColor:'grey'
                     },
                     content:{
                         backgroundColor:"black",
                         display:'flex',
                         justifyContent:'center',
                         alignContent:'center'
                        

                     }
                 }
             }>
            
                {<img id="modalImg" key={modalImg} src={modalImg} alt={modalImg}/>}

            </Modal>


        </div>
        </>
    )
}

export default Defaultdata

