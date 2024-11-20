tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Primary Colors
                LimeGreen: 'hsl(163, 72%, 41%)',
                BrightRed: 'hsl(356, 69%, 56%)',
                Facebook: 'hsl(208, 92%, 53%)',
                Twitter: 'hsl(203, 89%, 53%)',
                YouTube: 'hsl(348, 97%, 39%)',
                ToggleLightTheme: 'hsl(230, 22%, 74%)',

                // Neutral Colors

                // Dark Theme
                VeryDarkBlueBG: 'hsl(230, 17%, 14%)',
                VeryDarkBlueTopBGPattern: 'hsl(232, 19%, 15%)',
                DarkDesaturatedBlueCardBG: 'hsl(228, 28%, 20%)',
                DesaturatedBlueText: 'hsl(228, 34%, 66%)',
                WhiteText: 'hsl(0, 0%, 100%)',

                // Light Theme
                WhiteBG: 'hsl(0, 0%, 100%)',
                VeryPaleBlueTopBGPattern: 'hsl(225, 100%, 98%)',
                LightGrayishBlueCardBG: 'hsl(227, 47%, 96%)',
                DarkGrayishBlueText: 'hsl(228, 12%, 44%)',
                VeryDarkBlueText: 'hsl(230, 17%, 14%)',
            },
        },
        fontFamily: {
            Inter: ['Inter', 'sans-serif'], // 400, 700
        },
        backgroundImage: {
            Instagram: 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
            ToggleDarkTheme: 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
        },
    },
    plugins: [],
}