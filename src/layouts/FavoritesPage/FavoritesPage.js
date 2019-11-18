import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { deleteFavorite } from '../../actions';
import TableItem from '../../components/TableItem';
import LayoutPage from '../LayoutPage';

const FavoritesPage = ({ favorites, deleteFavorite }) => {
  return (
        <LayoutPage>
            <div className="favorites-title">Ваши избранные:</div>
            {
                isEmpty(favorites) && 'Нет избранных'
            }
            <table>
                {
                    favorites.map(item => <TableItem type='favorites' key={item.id} item={item} />)
                }
            </table>
        </LayoutPage>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites.favorites
});

const mapDispatchToProps = dispatch => ({
  deleteFavorite: id => dispatch(deleteFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
