
var React=require('react');
var ReactDOM=require('react-dom');

var DisplayMovie=React.createClass({
getInitialState:function(){
  return ({id:"#"+this.props.title.imdbID});
},

 delete:function()
 {
   $.ajax({
     url: "http://localhost:8080/movie/delete",
     dataType: 'json',
     type: 'DELETE',
     data: this.props.title,
     success: function() {
        console.log('success');
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(this.state.url, status, err.toString());
     }.bind(this)
   });
 },

 update:function()
 {
   var query = ReactDOM.findDOMNode(this.refs.query).value;

   this.props.title.t=query;

   
    $.ajax({
     url:"http://localhost:8080/movie/update",
     dataType: 'json',
     type: 'PUT',
     data: this.props.title,
     success: function() {
       console.log("success");

     }.bind(this),
     error: function(xhr, status, err) {
       console.error(this.state.url, status, err.toString());
     }.bind(this)
   });
 },


render:function(){

 return(
   <div className="content">
   <br/><br/><br/>
   <h2>saiguru</h2>
    <div className="row" >
         <div className="col-sm-3">
           <div className="thumbnail">
           <img src={this.props.title.Poster} alt="image"/>

            </div>
         </div>
         <div className="col-sm-9">
           <div className="list-group">
             <h2 className="list-group-item-text">Movie Title :{this.props.title.Title}</h2>
             <h3 className="list-group-item-text">Year:{this.props.title.Year}</h3>
             <h3 className="list-group-item-text">Id:{this.props.title.imdbID}</h3>

             <button type="submit" className="btn btn-danger" onClick={this.delete}>Delete</button>&nbsp; &nbsp;

             <a href={this.state.id} role="button" className="btn btn-warning" data-toggle="modal">Update</a>

           </div>
        </div>
     </div>
     <div className="modal fade" id={this.props.title.imdbID}>
     <div className="modal-dialog">
     <div className="modal-content">
     <div className="modal-header">
     <button className="close" data-dismiss="modal">&times;</button>

     <h4 className="modal-title">Update</h4>
     </div>
     <div className="modal-body">


     <form className="form-horizontal">
     <div className="form-group">
     <label className="col-lg-2 control-label" for="inputName">Title</label>
     <div className="col-lg-10">
     <input className="form-control" id="inputName" placeholder={this.props.title.Title} type="text" ref="query"/>
     </div>
     </div>
     <div className="form-group">
     <div className="col-lg-12">

     <button className="btn btn-success pull-right" type="submit" onClick={this.update}>Submit</button>
     </div>
     </div>
     </form>
     </div>
     </div>
     </div>
     </div>
   </div>

 )

 }

})
module.exports=DisplayMovie;
