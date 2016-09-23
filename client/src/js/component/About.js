var React= require('react');

var About=React.createClass({

render: function(){
  return(
    <div>
    <br/><br/><br/><br/><br/>
      About

    {this.props.params.value}
    </div>
  );
}
});

module.exports=About;
