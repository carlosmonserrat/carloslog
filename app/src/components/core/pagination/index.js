import * as React from 'react'
import {pagination} from "./style.css"

const Pagination = ({pagination, getNewPages}) => {
  return (
    <div className={"pagination"}>
      {pagination !== {} && pagination.nextPage !== undefined ?
        <button onClick={() => getNewPages(pagination.nextPage)}>Next Page</button> : <></>}
      {pagination !== {} && pagination.previousPage !== undefined ?
        <button onClick={() => getNewPages(pagination.previousPage)}>Previous Page</button> : <></>}
    </div>
  )
}

export default Pagination