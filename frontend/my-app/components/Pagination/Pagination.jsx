import React from 'react'

function Pagination({totalposts,postperpage,setcurrentPage}) {
    const pages=[];
    for(let i=1;i<=Math.ceil(totalposts/postperpage);i++){
        pages.push(i)
    }
  return (
    <div>
    {pages.map((pages)=><button onClick={()=>setcurrentPage(pages)}>{pages}</button>)}
    </div>
  )
}

export default Pagination