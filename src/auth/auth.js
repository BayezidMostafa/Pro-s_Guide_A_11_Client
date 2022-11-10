export const jwtAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    fetch('http://localhost:5000/jwtAuth', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem("pro's-token", data.token);
        })
}