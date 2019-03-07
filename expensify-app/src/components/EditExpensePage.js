import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            This is from my EditExpensePage. With ID: {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;