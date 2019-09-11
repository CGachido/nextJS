import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';


const User = ({ users }) => (
    <div>
        <Head>
            <title>Users</title>
        </Head>
        <ul>
            { users.map(users => (
                <li key={users.id}>{users.login}</li>
            )) }
        </ul>

        <Link href="/">
            <a>Back</a>
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