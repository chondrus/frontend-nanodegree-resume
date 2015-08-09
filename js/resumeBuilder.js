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
            "dates"       : "17-present",
            "jobLocation" : "Temple of Time (primarily remote)",
            "description" : "Quests completed during employment: <br><ul class='work_quest'><li>rescued loyal horse Epona </ul>"
        },
        {
            // commented out to show below error checking
            "employer"    : "7 Sages",
            "position"    : "Stasis",
            "dates"       : "10-17",
            "jobLocation" : "???",
            "description" : "..."
        },
        {
            "employer"    : "Princess Zelda",
            "position"    : "Adventurer/ Jr. Hero",
            "dates"       : "9-10",
            "jobLocation" : "Hyrule Castle (primarily remote)",
            "description" : "Quests completed during employement: <br><ul class='work_quest'> <li>acquired Spiritual Stone of Fire <li>acquired Spiritual Stone of Water <li>acquired Master Sword </ul>"
        },
        {
            "employer"    : "Great Deku Tree",
            "position"    : "Kokiri Kid",
            "dates"       : "0-9",
            "jobLocation" : "Kokiri Forest",
            "description" : "Quests completed during employement: <br> <ul class='work_quest'><li>acquired sword<li>acquired shield<li>defeated Queen Gohma<li>acquired Spiritual Stone of the Forest</ul>"
        }
    ]
};
work.display = function () {

    if (work.jobs && work.jobs.length > 0) {

        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var jobText = "";

            var tempEmp = work.jobs[job].employer;
            if (tempEmp && tempEmp.length > 0) {
                jobText = jobText + HTMLworkEmployer.replace("%data%", tempEmp);
            }
            
            var tempTitle = work.jobs[job].position;
            if (tempTitle && tempTitle.length > 0) {
                jobText += HTMLworkTitle.replace("%data%", tempTitle);
            }

            var tempDates = work.jobs[job].dates;
            if (tempDates && tempDates.length > 0) {
                jobText += HTMLworkDates.replace("%data%", tempDates);
            }

            var tempLoc = work.jobs[job].jobLocation;
            if (tempLoc && tempLoc.length > 0) {
                jobText +=  HTMLworkLocation.replace("%data%", tempLoc);
            }

            var tempDesc = work.jobs[job].description;
            if (tempDesc && tempDesc.length > 0) {
                jobText += HTMLworkDescription.replace("%data%", tempDesc);
            }

            $(".work-entry:last").append(jobText);
        }
    }
};

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
work.display();
project.display();

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});












