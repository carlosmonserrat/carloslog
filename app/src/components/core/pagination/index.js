import * as React from 'react'
import style from "./style.module.css"

const scrollUpAndGetPage = (page, getNewPages) => {
    window.scrollTo(0, 0);
    getNewPages(page)
}

const Pagination = ({pagination, getNewPages}) => {
    return (
        <div className={style.pagination}>
            {pagination !== {} && pagination.previousPage !== undefined ?
                <button onClick={() => scrollUpAndGetPage(pagination.previousPage, getNewPages)}>Previous
                    Page</button> : <></>}
            {pagination !== {} && pagination.nextPage !== undefined ?
                <button onClick={() => scrollUpAndGetPage(pagination.nextPage, getNewPages)}>Next
                    Page</button> : <></>}
        </div>
    )
}

export default Pagination