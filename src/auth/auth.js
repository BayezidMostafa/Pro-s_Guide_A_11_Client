export const jwtAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    fetch('https://service-review-server-11.vercel.app/jwtAuth', {
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