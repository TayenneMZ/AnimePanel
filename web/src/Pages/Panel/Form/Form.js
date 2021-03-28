import React from 'react';
import { useParams } from 'react-router-dom';

const PagesPanelForm = () => {
    const { id } = useParams();

    return (
        <div>
            FORM
            {id && <div>id: {id}</div>}
        </div>
    );
}

export default PagesPanelForm;