import { useParams } from "react-router-dom";

function DetailUser() {
  const {id} = useParams()


  const data = [
    { id: 1, name: "Artikel 1" },
    { id: 2, name: "Artikel 2" }
  ];

 // Konversi id dari useParams menjadi number
 const numericId = parseInt(id, 10);

 // Cari data berdasarkan id
 const user = data.find((item) => item.id === numericId);
 console.log(user);
 console.log(numericId)

 // Render
 return (
   <div>
     {user ? (
       <div>
         <h1>Detail User</h1>
         <p>ID: {user.id}</p>
         <p>Name: {user.name}</p>
       </div>
     ) : (
       <h1>Error: Data dengan ID {id} tidak ditemukan</h1>
     )}
   </div>
 );
}

export default DetailUser;