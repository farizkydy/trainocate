import { useParams } from "react-router-dom";

function DetailUser() {
  const {id} = useParams()


  const [data, setDataUser] = useParams([
    {
      id: 1,
      name: "Fariz",
      gender: "Male"
    }
  ])

  // todo cari apakah id dari useParams ada atau tidak di dalam state daata
  return (
   
    <h1> User {id}</h1>
  )
}

export default DetailUser;