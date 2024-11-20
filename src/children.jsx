function Children(props) {
  return (
    <div className="children">
      <h2>Hello, {props.item.name} Umur saya {props.item.age}</h2>
  
      {props.item.age >= 17 ?
       <h3>Saya sudah dewasa</h3> 
       :
       <h3>Saya masih anak-anak</h3>
       }
    </div>
  );
}

export default Children;
