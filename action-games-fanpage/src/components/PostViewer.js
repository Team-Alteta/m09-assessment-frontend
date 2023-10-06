import React from 'react';
import { Link } from 'react-router-dom';

function PostViewer({ category }) {
    const singleplayer = category === 'singleplayer';

    //Need a list of top 10 for every year until 2010
    //Display each year as "Top 10 video games of {year}"
    const date = new Date();
    const year = date.getFullYear();

    const rows = [];
    for(let i = 2010; i <= year; i++){
        rows.unshift(<>
            <Link className='btn btn-outline-primary btn-block btn-large d-flex justify-content-center p-3' 
            to='/gamesdisplay' 
            state={{year: i, singleplayer: singleplayer}}>
                <b>Top 10 games of {i}</b>
            </Link>
            <br/>
        </>);
    }

    return (
        <>
            <div>
                <h1>Top {singleplayer ? 'Singleplayer' : 'Multiplayer'} Games</h1>
                <div className='w-100 p-3'>
                    {rows}
                </div>
            </div>
        </>

    )
}

export default PostViewer;
