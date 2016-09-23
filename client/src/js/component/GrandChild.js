var React=require("react");
var GrandChild=React.createClass({

  getInitialState:function(){
    return{data: [],url:'http://localhost:8080/movie/favmovie'};
  },

  handle:function(){
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      type: 'POST',
      data: this.props.title,
      success: function(data) {
        this.setState({data:data});
      }.bind(this),

      error: function(xhr, status, err) {
        this.setState({data:this.props.title });
        console.error(this.props.url, status, err.toString());
      }.bind(this)
      });

  },

  render:function(){
  return(
    <div className="container">
    <div className="content">
       <div className="row" >
            <div className="col-sm-3">

              <div className="thumbnail">
              <img src={this.props.title.Poster} alt="image"/>
               </div>
            </div>

            <div className="col-sm-9">
              <div className="list-group">
                <h2 className="list-group-item-text">Movie Name:<b>{this.props.title.Title}</b></h2>
                <h3 className="list-group-item-text">Year relesed:{this.props.title.Year}</h3>
                <h3 className="list-group-item-text">Type:{this.props.title.Type}</h3>
                <h3 className="list-group-item-text">imdbID:{this.props.title.imdbID}</h3>
              </div>
              <button type="button" className="btn btn-info" onClick={this.handle} > Add to Favourites </button>
           </div>
        </div>
      </div>
      </div>
    );
  }

});


module.exports=GrandChild;
