import Pagination from '@material-ui/lab/Pagination';

export const CustomPagination = ({setPage, numOfPages=10}) => {

  const handlePageChange = (page)=> {
    setPage(page);
    window.scroll(0, 0)
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop:10,
        
      }}  
    >
      <Pagination
      color= "primary"
      count={numOfPages}
      onChange={(e)=> handlePageChange(e.target.textContent)}/>
    </div>
  )
}
