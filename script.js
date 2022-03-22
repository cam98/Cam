/* ******** Menu ******** */
((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", e =>{
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", e => {
        if(!e.target.matches(".menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    })
})(document);

/* ******** About Me ******** */
((d)=> {
    const $btnArrowDown = d.querySelectorAll(".arrow-down"),
    $skillName = d.querySelectorAll(".skill-name"),
    $skillDescription = d.querySelectorAll(".skill-description");

    $btnArrowDown[0].addEventListener("click", e => {
        $skillDescription[0].classList.toggle("active");
        $skillName[0].classList.toggle("shadows");
        $btnArrowDown[0].classList.toggle("active")

    })

    $btnArrowDown[1].addEventListener("click", e => {
        $skillDescription[1].classList.toggle("active");
        $skillName[1].classList.toggle("shadows");
        $btnArrowDown[1].classList.toggle("active")
    })

    console.log($skillName);
})(document);





/* ******** Contact Form ******** */
((d)=> {
    const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

    $form.addEventListener("submit", e => {
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/camilab1998@hotmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
        .then(res => (res.ok ? res.json() : Promise.reject(res)))
        .then(json => {
            console.log(json);
            location.hash = "#thanks";
            $form.reset();
        })
        .catch(err => {
            console.log(err);
            let message = err.statusText || "There's been an error, try again"
            $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            $loader.classList.add("none");
            setTimeout(()=> {
                location.hash = "#close"
            }, 5000);
        });
    });
})(document)
