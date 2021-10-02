import * as React from 'react'
import style from "./style.module.css"

const Pagination = ({pagination, getNewPages}) => {
  return (
    <div className={style.pagination}>
      {pagination !== {} && pagination.previousPage !== undefined ?
        <button onClick={() => getNewPages(pagination.previousPage)}>Previous Page</button> : <></>}

      {pagination !== {} && pagination.nextPage !== undefined ?
        <button onClick={() => getNewPages(pagination.nextPage)}>Next Page</button> : <></>}

    </div>
  )
}

export default Pagination