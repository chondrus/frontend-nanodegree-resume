/*
 * Name: resumeBuild.js
 * Description: Bulk of information for the page contained here
 * 
 * Credit: structure comes from lessons in Udacity's 'JavaScript Basics' course
 *
 * Forked from: 
 *    https://github.com/udacity/frontend-nanodegree-resume
 *    1a6a2696af0107d07afd3c54951f5076329cb0bd
 */

/*
 * Setup of objects
 */

/* object for general/hedaer information */
var bio = {
    "name" : "Link Hylian",
    "role"  : "Adventurer",
    "contacts" : {
        "mobile"   : "none",
        "email"    : "none",
        "fairy"    : "Navi",
        "location" : "Hyrule"
    },
    "welcomeMessage" : "lorem ipsum dolor sit amet etc. etc. etc.",
    "skills" : [
        "awesomeness", "adventuring", "ocarina playing"
    ],
    "bioPic" : "images/fry.jpg"
};

/* object for work information */
var work = {
    "jobs" : [
        {
            "employer"    : "7 Sages",
            "position"    : "Adventurer",
            "dates"       : "???-present",
            "location"    : "Temple of Time (primarily remote)",
            "description" : "words words words words"
        },
        {
            "employer"    : "7 Sages",
            "position"    : "Stasis",
            "dates"       : "???-??? (7 years total)",
            "location"    : "???",
            "description" : "..."
        },
        {
            "employer"    : "Princess Zelda",
            "position"    : "Adventurer",
            "dates"       : "???",
            "location"    : "Hyrule Castle (primarily remote)",
            "description" : "loreim ipsum..."
        },
        {
            "employer"    : "Great Deku Tree",
            "position"    : "Kid without a Fairy",
            "dates"       : "???",
            "location"    : "Kokiri Forest",
            "description" : "Despite lacking a guardian fairy, I..."
        }
    ]
};
function displayWork () {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployeer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(
            formattedEmployeer +
            formattedTitle +
            formattedDates +
            formattedLocation +
            formattedDescription
        );
    }
}

/* object for project/quest information */
var project = {
    "projects" : [
        {
            "name"   : "jump from block to block by the waterfall",
            "status" : "completed",
            "reward" : "rupees",
            "image"  : "images/197x148.gif"
        },
        {
            "name"  : "lon lon ranch box moving",
            "status" : "competed",
            "reward" : "heart container piece"
        }
    ]
    // ],
    // "mainQuestline" : [
    //     {
    //         "name"  : "Great Deku Tree",
    //         "status" : "cleared"
    //     },
    //     {
    //         "name"  : "Fire Mountain",
    //         "status" : "ongoing"
    //     }
    // ],
};
project.display = function () {

    for (var i in project.projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedName = HTMLprojectTitle.replace("%data%", project.projects[i].name);
        var formattedDates = HTMLprojectDates.replace("%data%", project.projects[i].status);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[i].reward);

        // todo: if images...
        var formattedImage = HTMLprojectImage.replace("%data%", project.projects[i].image);

        $(".project-entry:last").append(
            formattedName +
            formattedDates +
            formattedDescription +
            formattedImage
        );
    }
};

/* object for education */
var education = {
    "schools" : [
        {
            "name"  : "It's Dangerous to Go Alone Adventuring University",
            "city"  : "Unnamed Cave",
            "major" : ["Wooden Sword"],
            "year"  : "1986"
        },
        {
            "name"  : "LonLon Ranch School of Horseback",
            "city"  : "Hyrule Field",
            "major" : ["Epona"],
            "year" : "1998"
        }
    ]
};


/*
 * Use of objects - display everthing on the page
 */

/* header */
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (var skill in bio.skills) {
        var formatedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header").append(formatedSkill);
    }
}

displayWork();
project.display();

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});












