var React= require('react');
var DisplayMovie=require('./DisplayMovie');


var MyMovies=React.createClass({


  getInitialState:function(){

  return ({ data:[]});
},

  showResult: function(response) {

    this.setState({
      data: response
    });
  },
  //making ajax call to get data from server
  getDataFromServer:function(){
    $.ajax({
      type:"GET",
      dataType:"json",
      url:"http://localhost:8080/movie/moviedisplay",
      success: function(response) {
        this.showResult(response);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

componentDidMount:function(){
  this.getDataFromServer();
},

  render: function(){
    var disp = this.state.data.map(function(comment) {
    return(
      <DisplayMovie title={comment} >
      </DisplayMovie>
    );
  });

  return(
    <div>
    {disp}
    </div>
  )
  }

});

module.exports=MyMovies;
