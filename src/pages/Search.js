import React from 'react'
import Imga from "../image/e.jpg"

function Search() {
    return (
        <div className="search">
            <div className='searchForm'>
                <input type='text' placeholder='Rechercher ...' />
            </div>
            <div className='image'>
                <img src={Imga} />
                <div className='info'>
                    <span className='Nom'> NJATOMIARINTSOA</span><br/>
                    <span className='prenom'> William</span><br/><br/>
                    <span className='dev'> DEVELOPPEUR FullStack</span><br/><br/>
                    <span className='techno'> React JS et Node JS</span>
                </div>
            </div>
        </div>
    );
}
export default Search;