import React from 'react';

import './style.scss';

const Pagination = ({ countPages, currentPage, togglePage }) => {
  const pages = new Array(countPages).fill(0).map((item, i) => i += 1);
  return (
    <div className="pagination-container">
        {
            (currentPage !== 1) && (
                <div onClick={() => togglePage(1)} className='pagination-item'>
                    First
                </div>
            )
        }
        {
            pages.filter(item => item <= currentPage + 3 && item >= currentPage - 3).map((page) => {
              return (
                <div onClick={() => togglePage(page)} key={page} className={`pagination-item ${(currentPage === page) && 'current'}`}>
                    {page}
                </div>
              );
            })
        }
        {
            (currentPage !== countPages) && (
                <div onClick={() => togglePage(countPages)} className='pagination-item'>
                    Last
                </div>
            )
        }
    </div>
  );
};

export default Pagination;
