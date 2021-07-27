import Modal from 'react-modal'
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './FetchingSearch.css'
const FetchingSearch = (props) => {
    const [page, setPage] = useState(1)
    let perpage = 90;
    const [search, setSearch] = useState("")
    const [searchA, setSearchA] = useState([])
    const [modalImg, setModalImg] = useState("")

    const [modalIsOpen, setModalIsOpen] = useState(false)
    function handleChange(e) {
        setSearch(e.target.value)

    }
    function handleSubmit() {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=716e02262760b235130b0ab8066992cb&tags=${search}&safe_search=&per_page=${perpage}&page=${page}&format=json&nojsoncallback=1`)

            .then(function (res) {
                return (res.data.photos.photo)
            })
            .then(function (sarray) {
                let searchArray = sarray.map(el => {
                    let srcPath = `https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_w.jpg`
                    return (

                        <img onClick={() => handleClick(srcPath)} key={el.id} src={srcPath} alt={el.owner} />

                    )
                })
                setSearchA(searchArray)
            })
    }
    const handleClick = (src) => {
        setModalIsOpen(true)
        setModalImg(src)
    }
    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 5) {
            setTimeout(() => {
                perpage = perpage + 3
                setPage(page => page + 1)
                handleSubmit()

            }, 1000);
        }

    }

    return (
        <>
            <Navbar onChange={handleChange} onClick={handleSubmit} />
            <div className="searchContainer">
                {searchA}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={
                        {
                            overlay: {
                                backgroundColor: 'grey'
                            },
                            content: {
                                backgroundColor:"black",
                                display:'grid',
                                placeItems:'center'



                            }
                        }
                    }>

                    {<img id="modalImg" key={modalImg} src={modalImg} alt={modalImg} />}

                </Modal>

            </div>
        </>
    )
}

export default FetchingSearch