import React, { Fragment, useContext, useEffect } from 'react';
import { Form } from '../components/Form';
import { Notes } from '../components/Notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import { Loader } from '../components/Loader';

export const Home = () => {
    const { loading, notes, fetchNotes, toggleNote, removeNote } = useContext(FirebaseContext);

    // componentDidMount
    useEffect(() => {
        fetchNotes();
        //eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Form />

            <hr />

            {loading ? 
                <Loader /> 
            :
                (notes.length > 0 ? 
                    <Notes 
                        notes={notes} 
                        onCheck={toggleNote}
                        onRemove={removeNote} 
                    />
                :
                    <div className="alert alert-info" role="alert">
                        Записи отсутствуют
                    </div>
                )
            }

        </Fragment>
    )
}