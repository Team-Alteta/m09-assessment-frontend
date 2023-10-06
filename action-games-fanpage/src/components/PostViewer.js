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
        rows.push(<>
            <Link className='btn btn-outline-primary btn-block d-flex justify-content-center' 
            to='/gamesdisplay' 
            state={{year: year, singleplayer: singleplayer}}>
                Top 10 games of {i}
            </Link>
            <br/>
        </>);
    }

    return (
        <div className='w-100 p-3'>
            {rows}
        </div>
    )
}

export default PostViewer;
