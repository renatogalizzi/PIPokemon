import React from 'react'
import style from "./Pagination.module.css";
const Pagination = ({pagina,setPagina,maximo}) => {
    
    const nextPage = () =>{
        setPagina(pagina + 1)
    }
    const prevPage = () =>{
        setPagina(pagina - 1)
    }
    const redirection = (pag) =>{
        setPagina(pag)
    }
  return (
    <div className={style.pagination}>
  {pagina === 1 ? <a href="#" className={style.inactive}>&laquo;</a> : <a href="#" onClick={prevPage}>&laquo;</a>}
  {pagina === 1 ? <a href="#" value="1" className={style.active} onClick={()=>{redirection(1)}}>1</a>:<a href="#" value="1" onClick={()=>{redirection(1)}}>1</a>}
  {pagina === 2 ? <a href="#" value="2" className={style.active} onClick={()=>{redirection(2)}}>2</a>:<a href="#" value="2" onClick={()=>{redirection(2)}}>2</a>}
  {pagina === 3 ? <a href="#" value="3" className={style.active} onClick={()=>{redirection(3)}}>3</a>:<a href="#" value="3" onClick={()=>{redirection(3)}}>3</a>}
  {pagina === 4 ? <a href="#" value="4" className={style.active} onClick={()=>{redirection(4)}}>4</a>:<a href="#" value="4" onClick={()=>{redirection(4)}}>4</a>}
  {pagina === maximo ? <a href="#" className={style.inactive}>&raquo;</a> : <a href="#" onClick={nextPage}>&raquo;</a>}
</div>
  )
}

export default Pagination;