export default function SearchBar(props) {
   const {onSearch} =  props
   return (
      
      <div>
         <input type='search' placeholder="Rick.."/>
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
