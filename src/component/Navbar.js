import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Navbar = ( {authenticate, setAuthenticate} ) => {
    const menulist = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성' ]
    
    let navigate =useNavigate();
    const search = (event) => {
        if(event.key === "Enter"){
            // 입력한 검색어를 읽어와서 url을 바꿔오자
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`)            
        }
    }

    // 로그아웃 버튼 클릭시 authenticate를 false로 변경
    const LoginLogout = () => {
        if (authenticate) {
            setAuthenticate(false);            
        } else {
            navigate('/login');
        }
    } 
  return (
    <div>
        <div>
            <div className="login-button">
                <FontAwesomeIcon icon={faUser} />
                <div onClick={LoginLogout}>{authenticate ? "로그아웃" : "로그인"}</div>
            </div>
        </div>
        <div className="nav-section">
            <img onClick={() => {navigate('/')}}width={100}src="https://static.vecteezy.com/system/resources/previews/023/871/376/original/hm-logo-brand-symbol-white-design-hennes-and-mauritz-clothes-fashion-illustration-with-red-background-free-vector.jpg"/>
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
            {/* input에 엔터를 입력햇을때 이벤트 호출 하는 법 OnKeyPress는 이제 못쓰고 onKeyDown */}
            <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="search-box-icon"/>
                <input type="text" placeholder="제품검색" className="input-box" onKeyDown={ search } />
            </div>
            
            
        </div>
    </div>
  )
}

export default Navbar