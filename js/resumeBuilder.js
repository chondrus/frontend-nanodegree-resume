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

/* object for general/header information */
var bio = {
    "fname"    : "Link",
    "role"     : "Hero of Time",
    "contacts" : {
        "fairy"    : "Navi",
        "letter"   : "Postman",
        "owl"      : '<a class="twitter" href="https://twitter.com/zeldauniverse">@zeldauniverse</a>', // no affiliation
        "place"    : "Hyrule"
    },
    "welcomeMessage" : "Do you understand? &#8594; yes &nbsp;&nbsp;&nbsp; no",
    "skills"   : [
        "playing ocarina",
        "archery, on foot or on horseback",
        "wielding the Master Sword",
        "fighting evil"
    ],
    // image credit: http://www.zeldainformer.com/ocarina-of-time/walkthrough/chapter13
    "bioPic"   : "images/link.jpg"
};

bio.display = function () {
    
    // very top
    if (bio.role && bio.role.length > 0) {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    }
    if (bio.fname && bio.fname.length > 0) {
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.fname));
    }

    // contacts
    if (bio.contacts.fairy && bio.contacts.fairy.length > 0) {
        $("#topContacts").append(HTMLfairy.replace("%data%", bio.contacts.fairy));
    }
    if (bio.contacts.letter && bio.contacts.letter.length > 0) {
        $("#topContacts").append(HTMLletter.replace("%data%", bio.contacts.letter));
    }
    if (bio.contacts.owl && bio.contacts.owl.length > 0) {
        $("#topContacts").append(HTMLowl.replace("%data%", bio.contacts.owl));
    }
    if (bio.contacts.place && bio.contacts.place.length > 0) {
        $("#topContacts").append(HTMLplace.replace("%data%", bio.contacts.place));
    }

    // picture and welcome
    if (bio.bioPic && bio.bioPic.length > 0) {
        $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    }
    if (bio.welcomeMessage && bio.welcomeMessage.length > 0) {
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    }

    // skills
    if (bio.skills && bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var skill in bio.skills) {
            var formatedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#header").append(formatedSkill);
        }
    }
};


/* object for work information */
var work = {
    "jobs" : [
        {
            "employer"    : "7 Sages",
            "position"    : "Hero of Time",
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
            "position"    : "Adventurer/ Jr. Hero",
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


bio.display();
displayWork();
project.display();

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});












