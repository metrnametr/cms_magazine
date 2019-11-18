import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';


const NavLinkControlFavorites = ({ favorites = [], items, checked }) => {
  return (
        <div className={`nav-link-control ${checked ? 'checked' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', padding: '0' }}>
            <NavLinkControl {...items} />
            <div className="favorites-circle-count">
                { favorites.length }
            </div>
        </div>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites.favorites
});

const NavLinkWithRedux = connect(mapStateToProps)(NavLinkControlFavorites);


const NavLinkControl = ({
 icon, to, children, checked 
}) => (
    <div className={`nav-link-control ${checked ? 'checked' : ''}`}>
        <Link to={to} className='link-control'>
            <div style={{ float: 'left' }}>
                <i style={ { marginRight: '10px' } } className={`fa ${icon}`} aria-hidden="true"></i>
            </div>
            {children}
        </Link>
    </div>
);

export {
  NavLinkControl,
  NavLinkWithRedux
};
