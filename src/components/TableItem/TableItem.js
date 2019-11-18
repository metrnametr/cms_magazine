import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addFavorite,
  deleteFavorite
} from '../../actions';
import declOfNum from '../../common/defOfNum';
import './style.scss';


const worksTitles = ['проект', 'проекта', 'проектов'];
const partersTitles = ['партнер', 'партнера', 'партнеров'];

const TableItem = (props) => {
  const {
    item, checked, addFavorite, deleteFavorite, type
  } = props;
  const {
    id,
    image,
    title,
    worksCount,
    partnersCount,
    rate,
    firstLettersOfName,
    shortUrl,
    isSponsor,
    code
  } = item;

  const onChange = (e, item) => {
    const { checked } = e.target;
    (checked) ? addFavorite(item) : deleteFavorite(item.id);
  };

  return (
        <tr>
            <td className="instrument-image">
              { isSponsor && (
                  <div style={{ position: 'absolute', left: type ? '-30%' : '-10%' }}>
                    <i className="fa fa-star" style={{ color: '#cb192e' }}></i>
                  </div>
                ) }
                { image && <img src={image} alt={title} />}
                {!image && <div className="symbol-logo">{firstLettersOfName}</div>}
            </td>
            <td>
                <Link style={{ color: 'black' }} to={`/instrument/${code}`}>{title}</Link> <br/>
                {isSponsor && (<Link to={shortUrl}>{shortUrl}</Link>)}
            </td>
            <td>
                {worksCount} {declOfNum(worksCount, worksTitles)}
            </td>
            <td>
                {partnersCount} {declOfNum(partnersCount, partersTitles)}
            </td>
            <td>
                {rate}
            </td>
            <td style={{ position: 'relative' }}>
            {
                !type ? (
                  <>
                    <div className="page__toggle">
                        <label className="toggle">
                            <input className="toggle__input" onChange={(e) => onChange(e, item)} type="checkbox" checked={checked} />
                            <span className="toggle__label">
                                <span className="toggle__text"></span>
                            </span>
                        </label>
                    </div>
                    { isSponsor && (
                      <div style={{ writingMode: 'vertical-rl', position: 'absolute', top: '15%', left: '70%' }}>
                        Спонсор
                      </div>
                    ) }
                    </>
                )
                  : (
                    <button onClick={() => deleteFavorite(id)} className="delete-favorites">Удалить</button>
                  )
            }
            </td>
        </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  addFavorite: favorite => dispatch(addFavorite(favorite)),
  deleteFavorite: id => dispatch(deleteFavorite(id))
});

export default connect(() => ({}), mapDispatchToProps)(TableItem);
