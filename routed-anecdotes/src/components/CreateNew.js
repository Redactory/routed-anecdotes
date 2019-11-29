import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNotification } from '../reducers/notificationReducer';

const CreateNew = (props) => {
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [info, setInfo] = useState('');

    const addNew = (anecdote) => {
        anecdote.id = (Math.random() * 10000).toFixed(0);
        props.setAnecdotes(props.anecdotes.concat(anecdote));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addNew({
        content,
        author,
        info,
        votes: 0
      });

      props.history.push('/');
      props.setNotification(`a new anecdote ${content} created!`, 10000);
    };
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div>
            author
            <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            url for more info
            <input name='info' value={info} onChange={(e) => setInfo(e.target.value)} />
          </div>
          <button>create</button>
        </form>
      </div>
    )
  }

  const mapDispatchToProps = {
    setNotification
  }

  const connectCreateNew = connect(null, mapDispatchToProps)(CreateNew);
  export default withRouter(connectCreateNew);
