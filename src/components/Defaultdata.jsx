import React, { useState , useEffect} from 'react'
import axios from 'axios'
import './defaultdata.css'
import Modal from 'react-modal'

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
                        {srcPath}
                        </>
                    )
                })
                setImg(picArray)
            })


    }, [])
    const handleClick = (src,id) =>{
        setModalIsOpen(true)
        setModalImg(src)
        
        
    }


    return (
        <>
        <div className="header">Flickr</div>

        <div className="imgContainer">
            {img.map((el,index)=><img onClick={()=>handleClick(el.props.children)}src={el.props.children} key={index} alt={index}/>)}
            </div>
            <div>
            <Modal 
            isOpen={modalIsOpen} 
             onRequestClose={() => setModalIsOpen(false)}
              style={
              { 
                     overlay:{
                         backgroundColor:'grey',
                         
                     },
                     content:{
                         backgroundColor:"white",
                        display:'grid',
                        placeItems:'center'

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

