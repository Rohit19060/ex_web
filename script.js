class Card {
    constructor(url, title, description) {
        this.url = url;
        this.title = title;
        this.description = description;
    }
}

let cardArr = [
    new Card("./pages/10-ways-center.html", "Center Element", "10 Ways to Center element horizontally as well as Vertically"),
    new Card("./pages/accent-color.html", "Accent Color", "Use of the accent color of the page"),
    new Card("./pages/animated-accordion.html", "Animated Accordion", "Accordion with animation"),
    new Card("./pages/animated-background.html", "Animated Background", "Background that changes color continuously"),
    new Card("./pages/animated-counter.html", "Animated Counter", "Footer counter that increments"),
    new Card("./pages/animated-mega-menu.html", "Mega Menu", "Mega Menu with animation from top"),
    new Card("./pages/animated-mouse-scrolling.html", "Animated Mouse Scrolling", "Mouse Scrolling Animation"),
    new Card("./pages/animated-search.html", "Animated Search", "Search Animation"),
    new Card("./pages/animated-text.html", "Animated Text", "Text Animation"),
    new Card("./pages/animation.html", "Animation", "Animation"),
    new Card("./pages/background-overlay.html", "Background Overlay", "Background Overlay"),
    new Card("./pages/block-reveal-effect.html", "Block Reveal Effect", "Block Reveal Effect"),
    new Card("./pages/border-hover-effect.html", "Border Hover Effect", "Border Hover Effect"),
    new Card("./pages/box-animation.html", "Box Animation", "Box Animation"),
    new Card("./pages/bulma.html", "Bulma CSS", "Bulma CSS Tutorial"),
    new Card("./pages/button-hover-effect-2.html", "Button Hover Effect 2", "Button Hover Effect 2"),
    new Card("./pages/button-hover-effect-3.html", "Button Hover Effect 3", "Button Hover Effect 3"),
    new Card("./pages/button-hover-effect.html", "Button Hover Effect", "Button Hover Effect"),
    new Card("./pages/button-sound-effect-audible-code.html", "Button Sound Effect Audible Code", "Button Sound Effect Audible Code"),
    new Card("./pages/buttons-with-hover-effect-3.html", "Buttons with Hover Effect 3", "Buttons with Hover Effect 3"),
    new Card("./pages/cake.html", "Cake", "Cake"),
    new Card("./pages/cake-flip.html", "Cake flip", "Cake flip"),
    new Card("./pages/calculator.html", "Calculator", "Calculator"),
    new Card("./pages/clock.html", "Clock", "Clock"),
    new Card("./pages/color-captcha.html", "Color Captcha", "Color Captcha"),
    new Card("./pages/coming-soon.html", "Coming Soon", "Coming Soon"),
    new Card("./pages/cool-link-effect.html", "Cool Link Effect", "Cool Link Effect"),
    new Card("./pages/css-gradient.html", "Css Gradient", "Css Gradient"),
    new Card("./pages/css-grid-1.html", "Css Grid 1", "Css Grid 1"),
    new Card("./pages/css-grid-2.html", "Css Grid 2", "Css Grid 2"),
    new Card("./pages/css-grid-3.html", "Css Grid 3", "Css Grid 3"),
    new Card("./pages/css-tutorial.html", "Css Tutorial", "Css Tutorial"),
    new Card("./pages/dark-mode.html", "Dark Mode", "Dark Mode"),
    new Card("./pages/dynamic-table.html", "Dynamic Table", "Dynamic Table"),
    new Card("./pages/email-validation.html", "Email Validation", "Email Validation"),
    new Card("./pages/fixed-contact-info.html", "Fixed Contact Info", "Fixed Contact Info"),
    new Card("./pages/flexbox.html", "Flexbox", "Flexbox"),
    new Card("./pages/floating-text-animation.html", "Floating Text Animation", "Floating Text Animation"),
    new Card("./pages/follow-mouse.html", "Follow Mouse", "Follow Mouse"),
    new Card("./pages/form-design-layout.htm", "Form Design Layout", "Form Design Layout"),
    new Card("./pages/form.html", "Form", "Form"),
    new Card("./pages/full-screen-pre-loader.html", "Full Screen Pre Loader", "Full Screen Pre Loader"),
    new Card("./pages/full-screen-responsive-image-slider.html", "Full Screen Responsive Image Slider", "Full Screen Responsive Image Slider"),
    new Card("./pages/game-connect-four.html", "Game Connect Four", "Game Connect Four"),
    new Card("./pages/game-memory.html", "Game Memory", "Game Memory"),
    new Card("./pages/github-api.html", "Github Api", "Github Api"),
    new Card("./pages/glowing-shapes.html", "Glowing Shapes", "Glowing Shapes"),
    new Card("./pages/hamburger-icon-animation.html", "Hamburger Icon Animation", "Hamburger Icon Animation"),
    new Card("./pages/hide-menu-on-scroll.html", "Hide Menu On Scroll", "Hide Menu On Scroll"),
    new Card("./pages/how-to-add-preloader-to-website.html", "How To Add Preloader To Website", "How To Add Preloader To Website"),
    new Card("./pages/image-hover-effect.html", "Image Hover Effect", "Image Hover Effect"),
    new Card("./pages/image-slider.html", "Image Slider", "Image Slider"),
    new Card("./pages/input-type.html", "Input Type", "Input Type"),
    new Card("./pages/landing-page-with-smooth-scroll-effect.html", "Landing Page With Smooth Scroll Effect", "Landing Page With Smooth Scroll Effect"),
    new Card("./pages/landing.html", "Landing", "Landing"),
    new Card("./pages/layout-design.html", "Layout Design", "Layout Design"),
    new Card("./pages/layout-design-2.html", "Layout Design 2", "Layout Design 2"),
    new Card("./pages/layout-design-3.html", "Layout Design 3", "Layout Design 3"),
    new Card("./pages/layout-design-4.html", "Layout Design 4", "Layout Design 4"),
    new Card("./pages/layout-design-5-star-wars.html", "Layout Design 5 Star Wars", "Layout Design 5 Star Wars"),
    new Card("./pages/layout-design-6.html", "Layout Design", "Layout Design 6"),
    new Card("./pages/loading-screen.html", "Loading Screen", "Loading Screen"),
    new Card("./pages/my-calculator.html", "My Calculator", "My Calculator"),
    new Card("./pages/mouse_trail.html", "Mouse Trail", "Mouse Trail"),
    new Card("./pages/netflix.html", "Netflix", "Netflix"),
    new Card("./pages/otp_input.html", "Otp Input", "Otp Input"),
    new Card("./pages/parallax-effect.html", "Parallax Effect", "Parallax Effect"),
    new Card("./pages/parallax-simple.html", "Parallax Simple", "Parallax Simple"),
    new Card("./pages/photo-gallery.html", "Photo Gallery", "Photo Gallery"),
    new Card("./pages/pokemon.html", "Pokemon", "Pokemon"),
    new Card("./pages/pre-loader-bouncing-ball.html", "Pre Loader Bouncing Ball", "Pre Loader Bouncing Ball"),
    new Card("./pages/pre-loader-bubble-effect.html", "Pre Loader Bubble Effect", "Pre Loader Bubble Effect"),
    new Card("./pages/pre-loader-spiner.html", "Pre Loader Spiner", "Pre Loader Spiner"),
    new Card("./pages/random-hex-color-code-generator.html", "Random Hex Color", "Random Hex Color"),
    new Card("./pages/read-mouse-coordinates.html", "Read Mouse Coordinates", "Read Mouse Coordinates"),
    new Card("./pages/remove-all-css.html", "Remove All Css", "Remove All Css"),
    new Card("./pages/responsive-image-gallery.html", "Responsive Image Gallery", "Responsive Image Gallery"),
    new Card("./pages/responsive-navbar.html", "Responsive Navbar", "Responsive Navbar"),
    new Card("./pages/responsive-website.html", "Responsive Website", "Responsive Website"),
    new Card("./pages/scroll-indicator.html", "Scroll Indicator", "Scroll Indicator"),
    new Card("./pages/search.html", "Search", "Search"),
    new Card("./pages/skewed-background.html", "Skewed Background", "Skewed Background"),
    new Card("./pages/slide-out-navigation.html", "Slide Out Navigation", "Slide Out Navigation"),
    new Card("./pages/snake-game.html", "Snake Game", "Snake Game"),
    new Card("./pages/switch.html", "Switch", "Switch"),
    new Card("./pages/text-hover-effect.html", "Text Hover Effect", "Text Hover Effect"),
    new Card("./pages/text-inside-circle.html", "Text Inside Circle", "Text Inside Circle"),
    new Card("./pages/text-portrait-effect-on-mouse-over.html", "Text Portrait Effect On Mouse Over", "Text Portrait Effect On Mouse Over"),
    new Card("./pages/text-shadow.html", "Text Shadow", "Text Shadow"),
    new Card("./pages/text-transform-number-effect.html", "Text Transform Number Effect", "Text Transform Number Effect"),
    new Card("./pages/touch-event.html", "Touch Event", "Touch Event"),
    new Card("./pages/transitions.html", "Transitions", "Transitions"),
    new Card("./pages/transparent-navbar.html", "Transparent Navbar", "Transparent Navbar"),
    new Card("./pages/typewriter-effect.html", "Typewriter Effect", "Typewriter Effect"),
    new Card("./pages/vertical-centering.html", "Vertical Centering", "Vertical Centering"),
    new Card("./pages/world-clock.html", "World Clock", "World Clock"),
    new Card("./pages/zoom.html", "Zoom", "Zoom"),
    new Card("./pages/drag-n-drop/index.html", "Drag N Drop", "Drag N Drop"),
    new Card("./pages/glass-morphism/index.html", "Glass Morphism", "Glass Morphism"),
];



function createCard(card) {
    let cardElement = document.createElement("a");
    cardElement.href = card.url;
    cardElement.className = "card";
    cardElement.title = card.title;
    cardElement.target = "_blank";
    cardElement.innerHTML = `<h3>${card.title}</h3><p>${card.description}</p>`;

    return cardElement;
}

let main = document.createElement("main");
cardArr.forEach(card => {
    main.appendChild(createCard(card));
});
document.body.appendChild(main);

