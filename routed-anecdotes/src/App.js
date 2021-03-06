import React, { useState } from 'react';
import { BrowserRouter as Router,
Route, Link, Redirect } from 'react-router-dom';
import AnecdoteList from './components/AnecdoteList';
import Footer from './components/Footer';
import About from './components/About';
import CreateNew from './components/CreateNew';
import Anecdote from './components/Anecdote';
import Notification from './components/Notification';

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const anecdoteById = (id) => anecdotes.find(a => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    };

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a));
  };

  const padding = {
    paddingRight: 5
  };

  return (
    <div>
      <h1>Software anecdotes</h1>
      <div>
        <Router>
          <div>
            <div>
              <Link style={padding} to="/">anecdotes</Link>
              <Link style={padding} to="/create">create new</Link>
              <Link style={padding} to="/about">about</Link>
            </div>
            <Route exact path="/" render={() => 
              <div>
                <Notification />
                <AnecdoteList anecdotes={anecdotes} />
                <Footer />
              </div>
              } />
            <Route exact path="/create" render={() =>
              <div>
                <CreateNew anecdotes={anecdotes} setAnecdotes={setAnecdotes} />
                <Footer />
              </div>
            } />
            <Route exact path="/about" render={() =>
              <div>
                <About />
                <Footer />
              </div>
            }/>
            <Route exact path="/anecdotes/:id" render={({match}) =>
              <div> 
                <Anecdote anecdote={anecdoteById(match.params.id)} />
                <Footer />
              </div>
            }/>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App;
