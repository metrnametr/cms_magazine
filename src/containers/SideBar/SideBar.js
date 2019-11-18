import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../../components/Logo';
import NavLink from '../../components/NavLink';
import { NavLinkControl, NavLinkControlFavorites } from '../../components/NavLinkControl';
import './style.scss';

const navLink = [
  {
    to: '/magazine',
    text: 'журнал',
  },
  {
    to: '/agents',
    text: 'агенства',
  },
  {
    to: '/instruments',
    text: 'инструменты',
  },
];

const navLinkControl = [
  {
    to: '/favorites',
    text: 'Избранное',
    icon: 'fa-star-o',
  },
  {
    to: '/search',
    text: 'Поиск',
    icon: 'fa-search',
  },
  {
    to: '/cabinet',
    text: 'Кабинет агенств',
    icon: 'fa-sign-in',
  },
];
const SideBar = ({ location: { pathname } }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="sidebar-container">
    <Logo />
    <div className="navlink-container">
      {
                navLink.map(({ to, text }) => <NavLink checked={pathname === to} to={to} key={text}>{text}</NavLink>)
            }
    </div>
    <div className="navlink-control-container">
      {
                navLinkControl.map(({ to, text, icon }) => ((to === '/favorites')
                  ? (
                    <NavLinkControlFavorites
                      items={{ to, icon, children: text }}
                      checked={pathname === to}
                      key={text}
                    />
                  )
                  : (
                    <NavLinkControl
                      checked={pathname === to}
                      to={to}
                      key={text}
                      icon={icon}
                    >
                      {text}
                    </NavLinkControl>
                  )))
            }
    </div>
  </div>
);
export default withRouter(SideBar);
