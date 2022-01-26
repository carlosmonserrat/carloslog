import * as React from 'react'
import style from "./style.module.css"

const scrollUpAndGetPage = (page, getNewPages,scrollY) => {
    console.log(scrollY.scrollTop)
    getNewPages(page)
}

const Pagination = ({pagination, getNewPages,scrollY}) => {
    return (
        <div className={style.pagination}>
            {pagination !== {} && pagination.previousPage !== undefined ?
                <button onClick={() => scrollUpAndGetPage(pagination.previousPage, getNewPages,scrollY)}>Previous
                    Page</button> : <></>}
            {pagination !== {} && pagination.nextPage !== undefined ?
                <button onClick={() => scrollUpAndGetPage(pagination.nextPage, getNewPages,scrollY)}>Next
                    Page</button> : <></>}
        </div>
    )
}

export default Pagination