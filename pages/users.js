import React from 'react';
import axios from 'axios';

import Link from 'next/link';

const User = ({ users }) => (
    <div>
        <ul>
            { users.map(users => (
                <li key={users.id}>{users.login}</li>
            )) }
        </ul>

        <Link href="/">
            <a>Voltar</a>
        </Link>
    </div>
)

User.getInitialProps = async () => {
    const response = await axios.get(
        'https://api.github.com/orgs/rocketseat/members'
    )
    
    return { users: response.data }
}

export default User;