import './Card.css';

// Demonstration of using parent components 
// This is to group some common CSS properties applied to multiple components 

const Card = (props)=> {
  const classes = 'card ' + props.className;  
  return <div className={classes}>{props.children}</div>;
}

export default Card;