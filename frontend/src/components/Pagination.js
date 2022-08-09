import ReactPaginate from 'react-paginate'
import ChevronLeftIcon from "./ChevronLeftIcon";
import ChevronRightIcon from "./ChevronRightIcon";
import "./pagination.css"

const Pagination = ({ pageCount, onPageChange }) => {
    return (
        <ReactPaginate
            pageCount={ pageCount }
            pageRangeDisplayed={ 5 }
            marginPagesDisplayed={ 0 }
            containerClassName="pagination"
            pageLinkClassName="pagination-btn"
            activeLinkClassName="active"
            previousClassName="pagination-arrow"
            previousLabel={ <ChevronLeftIcon /> }
            nextClassName="pagination-arrow"
            nextLabel={ <ChevronRightIcon /> }
            disabledClassName="disabled"
            breakLabel=""
            onPageChange={ page => onPageChange(page.selected) } />
    )
}
export default Pagination