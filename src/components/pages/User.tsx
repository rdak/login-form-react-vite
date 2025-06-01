import { jwtDecode } from "jwt-decode";

function User() {
    const user = localStorage.getItem("token");

    const decodedToken = jwtDecode<{ name: string }>(user as string);

    const username = decodedToken?.name || "%username%";

    return (
        <>
            <h1>
                Welcome <b>{username}</b>
            </h1>
            <p>But unfortunately, this is nothing here ;)</p>
        </>
    );
}

export default User;
