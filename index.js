fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data.user.name)
         console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        /**
         * Challenge: get a URL for a default background image and set it here
         *
         * 1. Change the query in the URL above back to something real
         * 2. Log the image url to the console (replacing console.log(data) above)
         * 3. Use that URL as the "default" background image to be used if
         *    the promise is ever rejected.
         */
            document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzY4MTQ2NzM&ixlib=rb-4.0.3&q=80&w=1080")`
            document.getElementById("author").textContent = `By: Andrew Coelho`
    })

