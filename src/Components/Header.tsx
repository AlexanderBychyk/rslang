import React, { useState } from 'react';
import Menu from './Menu';
import { IMenuItems } from '../Interfaces/menuInterfaces';
import Auth from './Auth';

function Header(): JSX.Element {
  const [menuActive, setMenuActive] = useState(false);
  const [authActive, setAuthActive] = useState(false);
  const menuItems: IMenuItems[] = [
    { value: 'Главная', component: '<Main/>', id: 0 },
    { value: 'Учебник', component: 'Tutorial', id: 1 },
    { value: 'Словарь', component: '<Dictionary/>', id: 2 },
    { value: 'Мини-игры', component: '<Game/>', id: 3 },
    { value: 'Статиска', component: '<Stats/>', id: 4 },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <nav className="navigation">
            <button
              type="button"
              tabIndex={0}
              className={menuActive ? 'burger__btn burger_active ' : 'burger__btn'}
              onClick={() => { setMenuActive(!menuActive); }}
            >
              <span />
            </button>
          </nav>
          <button className="button auth__btn" onClick={() => { setAuthActive(!authActive); }} type="button">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.4145 10.9312C11.1197 10.2331 10.692 9.59891 10.1551 9.06406C9.61983
                8.52767 8.98577 8.10001 8.28791 7.80469C8.28166 7.80156 8.27541 7.8 8.26916
                7.79688C9.24259 7.09375 9.87541 5.94844 9.87541 4.65625C9.87541 2.51562 8.14103
                0.78125 6.00041 0.78125C3.85978 0.78125 2.12541 2.51562 2.12541 4.65625C2.12541
                5.94844 2.75822 7.09375 3.73166 7.79844C3.72541 7.80156 3.71916 7.80312 3.71291
                7.80625C3.01291 8.10156 2.38478 8.525 1.84572 9.06563C1.30933 9.60089 0.881662
                10.235 0.586343 10.9328C0.296221 11.616 0.139752 12.3485 0.125405 13.0906C0.124988
                13.1073 0.127913 13.1239 0.134008 13.1394C0.140103 13.1549 0.149244 13.1691 0.160893
                13.181C0.172543 13.193 0.186464 13.2025 0.201837 13.2089C0.21721 13.2154 0.233724
                13.2188 0.250405 13.2188H1.18791C1.25666 13.2188 1.31134 13.1641 1.31291 13.0969C1.34416
                11.8906 1.82853 10.7609 2.68478 9.90469C3.57072 9.01875 4.74728 8.53125 6.00041
                8.53125C7.25353 8.53125 8.43009 9.01875 9.31603 9.90469C10.1723 10.7609 10.6567
                11.8906 10.6879 13.0969C10.6895 13.1656 10.7442 13.2188 10.8129 13.2188H11.7504C11.7671
                13.2188 11.7836 13.2154 11.799 13.2089C11.8143 13.2025 11.8283 13.193 11.8399
                13.181C11.851613.1691 11.8607 13.1549 11.8668 13.1394C11.8729 13.1239 11.8758
                13.1073 11.8754 13.0906C11.8598 12.3437 11.7051 11.6172 11.4145 10.9312V10.9312ZM6.00041
                7.34375C5.28322 7.34375 4.60822 7.06406 4.10041 6.55625C3.59259 6.04844 3.31291 5.37344
                3.31291 4.65625C3.31291 3.93906 3.59259 3.26406 4.10041 2.75625C4.60822 2.24844 5.28322
                1.96875 6.00041 1.96875C6.71759 1.96875 7.39259 2.24844 7.90041 2.75625C8.40822 3.26406
                8.68791 3.93906 8.68791 4.65625C8.68791 5.37344 8.40822 6.04844 7.90041 6.55625C7.39259
                7.06406 6.71759 7.34375 6.00041 7.34375Z"
                fill="white"
              />
            </svg>
            <span className="auth__span">Sign in</span>
          </button>
        </div>
      </div>
      <Menu active={menuActive} setActive={setMenuActive} header="Меню" items={menuItems} />
      {
        authActive && <Auth active={authActive} setActive={setAuthActive} />
      }
    </header>
  );
}

export default Header;
