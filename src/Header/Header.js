import React, { useState } from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LanguageIcon from '@material-ui/icons/Language';
import { useHistory } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
import { addGuest } from '../Search/searchSlice'; 
import SearchMin from '../SearchMin/SearchMin'



function Header() {
    const history = useHistory(); 
    const dispatch = useDispatch(); 
    //adding search to header
    const [showSearch, setShowSearch] = useState(false); 

    function handleClickHome(event){
        dispatch(addGuest(0)); 
        history.push("/"); 
    }

    function handleClick(){
        debugger
        setShowSearch(!showSearch);

    }

    const headerBottom = (
        <div className="headerBottom">

            <img 
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt="airbnb logo"
                className="header__icon"
                onClick={handleClickHome}
            />

            <div className="header__centerBottom">
                <LanguageIcon/>
                <p>Become a host</p>
            </div>



            <div className="header__right"> 
                <AccountCircleIcon/>
                <p>Log in</p>
            </div>
        </div>  
    )
 
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            document.querySelector(".headerBottom").style.display = "none";
        } else{
            if(window.innerWidth <= 700){
                document.querySelector(".headerBottom").style.display = "flex";
            }
            
        }
    };



    return (
    <React.Fragment>
        <div className="header">
           
            <img 
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt="airbnb logo"
                className="header__icon"
                onClick={handleClickHome}
            />
 
            <div className="header__center" > 
                <input type="text" placeholder="Start your Search" onClick={() => setShowSearch(!showSearch)}/>
                <div onClick={() => setShowSearch(!showSearch)}>
                    <SearchIcon /> 
                </div>
                {showSearch && <SearchMin onClick={handleClick}/>}
            </div>
            

            <div className="header__right"> 
                    <p>Become a host</p>
                    <LanguageIcon/>
                    <ExpandMoreIcon/>
                    <AccountCircleIcon/>
            </div>
        </div>
        {headerBottom}
        
    </React.Fragment>
    )
}

export default Header

//rfce