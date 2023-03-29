import React from 'react';
import DisplayArticle from './DisplayArticle';


function ListArticle(props) {
    const { searchResults } = props;

    return (
        searchResults.map((search, index) => (
            <div>
                <DisplayArticle search={search} index={index} />
            </div>
        ))
    )
}

export default ListArticle;
