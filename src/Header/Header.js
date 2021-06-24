import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LanguageIcon from '@material-ui/icons/Language';
import { useHistory } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
import { addGuest } from '../Search/searchSlice'; 



function Header() {
    const history = useHistory(); 
    const dispatch = useDispatch(); 

    function handleClickHome(event){
        dispatch(addGuest(0)); 
        history.push("/"); 
    }

    function handleClickSearch(event){
        dispatch(addGuest(0)); 
        history.push("/search"); 
    }


    return (
        <div className="header">
           
            <img 
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt="airbnb logo"
                className="header__icon"
                onClick={handleClickHome}
            />
 
            <div className="header__center"> 
                <input type="text"/>
                    <div  onClick={handleClickSearch}>
                        <SearchIcon/> 
                    </div>
                    

                
            </div>
            

            <div className="header__right"> 
                    <p>Become a host</p>
                    <LanguageIcon/>
                    <ExpandMoreIcon/>
                    <AccountCircleIcon/>
            </div>
        </div>
    )
}

export default Header

//rfce