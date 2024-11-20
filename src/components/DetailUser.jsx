import { useParams } from "react-router-dom";

function DetailUser() {
  const {id} = useParams()


  // const data = [
  //   { id: 1, name: "Artikel 1" },
  //   { id: 2, name: "Artikel 2" }
  // ];


  // todo cari apakah id dari useParams ada atau tidak di dalam state daata
  return (
   
    <h1> User {id}</h1>
  )
}

export default DetailUser;