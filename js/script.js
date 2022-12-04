{
    const toggleTheme = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName")

        body.classList.toggle("lightTheme");
        themeName.innerText = body.classList.contains("lightTheme") ? "Dark" : "Light";
    };

    const init = () => {
        const buttonThemeSwitch = document.querySelector(".section__button");
        buttonThemeSwitch.addEventListener("click", toggleTheme)
    }
    
    init();
    
}