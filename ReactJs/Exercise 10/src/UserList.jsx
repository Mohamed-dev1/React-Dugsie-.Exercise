const UserList = ({ users }) => {
    return(
        <div>
            <h2>userlist</h2>
            {
                users.length >0 ?(
                    <ul>
                        {
                            users.map(user=>(
                                <li key={user.id}>{user.id} ({user.name}) ({user.email})</li>
                            ))
                        }
                    </ul>
                ):(<p>no user fund</p>)
            }
        </div>
    )
}

export default UserList