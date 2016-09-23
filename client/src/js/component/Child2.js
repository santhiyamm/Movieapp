var React=require('react');
var GrandChild=require('./GrandChild');

var Child2=React.createClass({

render:function(){
  var c1 = this.props.data1.map(function(comment) {
  return(
    <GrandChild title={comment} >

    </GrandChild>
  )
});
  return (
    <div>
      {c1}
      
    </div>

  )

}
});

module.exports=Child2;
