import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// 폰트어썸 들고오는법

const Navbar = () => {
    const menulist = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성' ]
    let navigate =useNavigate();
    
  return (
    <div>
        <div>
            <div className="login-button">
                <FontAwesomeIcon icon={faUser} />
                <div onClick={() => navigate('/login')}>로그인</div>
            </div>
        </div>
        <div className="nav-section">
            <img width={100}src="https://static.vecteezy.com/system/resources/previews/023/871/376/original/hm-logo-brand-symbol-white-design-hennes-and-mauritz-clothes-fashion-illustration-with-red-background-free-vector.jpg"/>
        </div>
        <div className="menu-container">        
            <ul className="menu-list">
                {
                // menulist.map(function(menu) {
                //     return (
                //         <li>{menu}</li>
                //     )
                // } )
                // 이걸 축약하면 
                menulist.map((menu) => (
                    <li>{menu}</li>
                ))
                }
            </ul>
            
            <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="search-box-icon"/>
                <input type="text" placeholder="제품검색" className="input-box" />
            </div>
            
            
        </div>
    </div>
  )
}

export default Navbar