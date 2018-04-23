import React from 'react';
import './styles.css';
import Note from './NoteCard';

export const NoteList = props => {
    return (
        <div className="notes">
            <div className="side">
                <h1>Lambda Notes</h1>
                <div className="links">View Your Notes</div>
                <div className="links">+Create New Note</div>
            </div>
            <div className="center">
                <h4>Your Notes:</h4>
                {props.Notes.map(note => {
                    return <Note title={note.title} body={note.body} />
                })}
            </div>
        </div>
    )
}