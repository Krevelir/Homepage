{
    const toggleBodyClass = () => {
        const body = document.querySelector(".body");
        body.classList.toggle("lightTheme");
    }

    const toggleThemeName = () => {
        const themeName = document.querySelector(".themeName");
        themeName.innerText = body.classList.contains("lightTheme") ? "Dark" : "Light";
    }

    const toggleTheme = () => {
        toggleBodyClass();
        toggleThemeName();

    };

    const init = () => {
        const buttonThemeSwitch = document.querySelector(".section__button");
        buttonThemeSwitch.addEventListener("click", toggleTheme)
    }

    init();

}