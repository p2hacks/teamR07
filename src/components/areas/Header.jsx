import React from 'react';


const Header = () => {

    return (
        <div id='header'>
            <div >
                <a href={"/home"} >HOME</a>
                <a href={"/anime"} >アニメ</a>
                <a href={"/church"} >教会</a>
                <a href={"/mapC"} >地図</a>
            </div>
        </div >
    )
}

export default Header;
