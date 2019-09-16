import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Notes = ({ notes, onCheck, onRemove }) => (
    <TransitionGroup
        component="ul"
        className="list-group"
    >
        {notes.map(note => (
            <CSSTransition
                key={note.id}
                classNames={'note'}
                timeout={800}
            >
                <li className="list-group-item note">
                    <div className={note.completed ? 'completed' : null }>
                        <input 
                            type="checkbox" 
                            onChange={() => onCheck(note)}
                            checked={note.completed}
                        />
                        <strong>{note.title}</strong>
                        <small>{new Date(note.date).toLocaleString()}</small>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => onRemove(note.id)}
                    >
                        &times;
                    </button>
                </li>
            </CSSTransition>
        ))}
    </TransitionGroup>
)