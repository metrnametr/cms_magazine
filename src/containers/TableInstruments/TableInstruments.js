import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import Loader from '../../components/Loader';
import TableItem from '../../components/TableItem';
import withApi from '../../common/withAPI';
import './style.scss';
import Pagination from '../../components/Pagination';

const TableInstruments = (props) => {
  const {
    loading, items, sortBy, favoritesChecked, toggleSort, togglePage
  } = props;
  if (loading) {
    return <Loader />;
  }
  const checkedsFavorite = groupBy(favoritesChecked, (it) => it.id);
  const { data, last_page, current_page } = items;
  const toggleClass = (type) => sortBy[type] && sortBy[type].sortAsc !== null && (sortBy[type].sortAsc ? 'th-checked-asc' : 'th-checked-desc');
  return (
    <>
    <table>
      <thead>
        <tr>
          <th style={{ width: '150px' }} />
          <th><span>Название</span></th>
          <th className={toggleClass('works_count')} onClick={() => toggleSort('SORT_WORKS')}><span>проекты<div/></span></th>
          <th className={toggleClass('partners_count')} onClick={() => toggleSort('SORT_PARTNERS')}><span>партнеры<div/></span></th>
          <th className={toggleClass('rate')} onClick={() => toggleSort('SORT_RATE')}><span>оценка пользователей<div/></span></th>
          <th><span>Сравнить</span></th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => <TableItem key={item.id} item={item} checked={checkedsFavorite[item.id]} />)
        }
      </tbody>
    </table>
    <Pagination togglePage={togglePage} countPages={last_page} currentPage={current_page } />
    </>
  );
};

const mapStateToProps = (state) => ({
  favoritesChecked: state.favorites.favorites
});

export default connect(mapStateToProps)(withApi(TableInstruments));
