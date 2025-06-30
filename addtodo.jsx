 function Addtodo(){
    return(
        <>
      <div className="row kg-row">
       <div className="col-6">
        <input type="text" placeholder='enter todo here'/>
       </div>
       <div className="col-4">
        <input type="DAte" placeholder='Date'/>
       </div>
       <div className="col-2">
        <button type="button" class="btn btn-success kg1-button">Add</button>
       </div>
    </div>

 
     
 </>
    );
 }
 export default Addtodo;