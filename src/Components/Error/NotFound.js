import React from 'react';
import history from '../../util/history';

function redirect() {
    history.push('/')
}

export default () => (
    <div>
        <button type="submit" className="redirect" onClick={redirect}> RETURN HOME </button>
    </div>
)