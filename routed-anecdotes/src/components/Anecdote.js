import React from 'react';

const Anecdote = (props) => {
    const margin = {
      marginBottom: '12px'
    };
  
    return (
      <div>
        <h2> {props.anecdote.content} by {props.anecdote.author} </h2>
        <div style={margin}> has {props.anecdote.votes} votes </div>
        <div style={margin}> 
          for more information see <a href={props.anecdote.info}> {props.anecdote.info} </a> 
        </div>
      </div>
    );
  };

  export default Anecdote;
