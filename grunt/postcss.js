

module.exports = {
    options: {
        map: false,
        processors: [
            require('pixrem')(),
            require('autoprefixer')({cascade: true})
/*
            require('autoprefixer')({
                //browsers: ['last 4 versions'],
                cascade: true,
                add: true
                //grid: "autoplace" // use false is preffered
            })
            */

        ]
    },
    demo: {
        src: ['temp/css/**/*.css', '!temp/css/vendor/**', '!temp/css/**/*.min.css']
    }
};


/*
    
  "browserslist": [
    "> 1%",
    "ie >= 8",
    "edge >= 15",
    "ie_mob >= 10",
    "ff >= 45",
    "chrome >= 45",
    "safari >= 7",
    "opera >= 23",
    "ios >= 7",
    "android >= 4",
    "bb >= 10"
  ],
    
*/
    