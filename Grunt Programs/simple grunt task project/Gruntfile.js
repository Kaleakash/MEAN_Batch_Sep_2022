// module.exports = function(grunt){

//     grunt.initConfig({
//         pkg:grunt.file.readJSON("package.json")
//     });
//     grunt.registerTask("first",()=> {
//         console.log("This is my first task");
//     });
//     grunt.registerTask("second",()=> {
//         console.log("This is my second task");
//     });
//     grunt.registerTask("third",()=> {
//         console.log("This is my third task");
//     });
//     // we will write more one or more task 
//     // grunt.registerTask("default",()=> {
//     //     console.log("This is default task")
//     // });

//     grunt.registerTask("default",["first","third"]);
// }


module.exports = function(grunt){

    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json")
    });
 

    grunt.registerTask("clean",()=> {

        grunt.config("clean",{
            contents:["dist/*"]
        })
        grunt.task.run("clean");
        grunt.loadNpmTasks("grunt-contrib-clean");
    });


    grunt.registerTask("copy",()=> {

        grunt.config("copy",{
            main:{
                expand: true,
                cwd:"src",
                src:"**",
                dest:"dist/"
            }
        })
        grunt.task.run("copy");
        grunt.loadNpmTasks("grunt-contrib-copy");
    });

    grunt.registerTask("cssmin",()=> {

        grunt.config("cssmin",{
           target:{
            files:{
                "dist/css/styles.min.css":["src/css/*.css"]
            }
           }
        })
        grunt.task.run("cssmin");
        grunt.loadNpmTasks("grunt-contrib-cssmin");
    });

    grunt.registerTask("uglify",()=> {
        grunt.config("uglify",{
                target:{
                    files:{
                        "dist/js/main.min.js":["src/js/*.js"]
                    }
            }
        })
        grunt.task.run("uglify");
        grunt.loadNpmTasks("grunt-contrib-uglify");
    });

    // grunt.registerTask("htmlmin",()=> {
    //     grunt.config("htmlmin",{
    //             target:{
    //                 files:{
    //                     "dist/html/index.html":["src/html/*.html"]
    //                 }
    //         }
    //     })
    //     grunt.task.run("htmlmin");
    //     grunt.loadNpmTasks("grunt-contrib-htmlmin");
    // });


    grunt.registerTask("htmlcompressor",()=> {
        grunt.config("htmlcompressor",{
                target:{
                    files:{
                        "dist/html/index.html":["src/html/*.html"]
                    }
            }
        })
        grunt.task.run("htmlcompressor");
        grunt.loadNpmTasks("grunt-htmlcompressor");
    });


    grunt.registerTask("default",["htmlcompressor","uglify","cssmin"]);
}






