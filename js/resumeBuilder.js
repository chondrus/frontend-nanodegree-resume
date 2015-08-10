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

/* object for heart container pieces information */
/* images from (and text based off of):
 * http://strategywiki.org/wiki/The_Legend_of_Zelda:_Ocarina_of_Time/Heart_Containers
 */
var heart = {
    "hearts" : [
        {
            "piece" : "#1. skull kid - friendship through saria's song",
            "age"   : "child",
            "about" : "Enter the Kokiri Forest and go through the left tree trunk. Hop onto the small tree trunk, and play Saria's song on your ocarina. The lonely skill kid gives a piece of heart in return for this symbol of friendship.",
            "image" : ["images/heart1.jpg"]
        },
        {
            "piece" : "#6. lost puppy",
            "age"   : "child",
            "about" : "At night, in the Hyrule Town Market, head to the back alley.  Find the lady who has lost her white dog (she is inside). Then, go find her white dog at the other end of the Town Market. It will follow you back, and she will be so happy she will give you a piece of heart.",
            "image" : ["images/heart6_1.jpg", "images/heart6_2.jpg"]
        }
    ]
};
heart.display = function () {

    if (heart.hearts && heart.hearts.length > 0) {
        $("#hearts").append(HTMLheartStart);

        for (var i in heart.hearts) {
            var iheart = heart.hearts[i];

            // display the project if it has enough information to display
            if (iheart.piece && iheart.piece.length > 0 &&
                iheart.age   && iheart.age.length > 0 &&
                iheart.about && iheart.about.length > 0) {

                var formattedName = HTMLheartTitle.replace("%data%", iheart.piece);
                var formattedDates = HTMLheartDates.replace("%data%", iheart.age);
                var formattedDescription = HTMLheartDescription.replace("%data%", iheart.about);
                var heartSection = formattedName + formattedDates + formattedDescription;

                // also diplay image(s) if they exist
                if (iheart.image && iheart.image.length > 0) {
                    for (var j in iheart.image) {
                        var formattedImage = HTMLheartImage.replace("%data%", iheart.image[j]);
                        heartSection += formattedImage;
                    }
                }

                $(".heart-entry:last").append(heartSection);
            }
        }
    }
};


/* object for education */
var education = {
    "schools" : [
        {
            "school" : "LonLon Ranch School of Horseback Riding",
            "degree" : "Horseback Racing",
            "dates"  : "17",
            "place"  : "LonLon Ranch",
            "major"  : "Epona"
        },
        {
            "school" : "It's Dangerous to Go Alone Adventuring University",
            "degree" : "Hyrule Dangers",
            "dates"  : "8-9",
            "place"  : "Unnamed Cave",
            "major"  : "Wooden Sword"
        }
    ]
};
education.display = function () {
    if (education.schools && education.schools.length > 0) {

        $("#education").append(HTMLschoolStart);

        for (var i in education.schools) {
            var school = education.schools[i];
            // only append a school if it has all the data
            if (school.school && school.school.length > 0 &&
                school.degree && school.degree.length > 0 &&
                school.dates  && school.dates.length  > 0 &&
                school.place   && school.place.length   > 0 &&
                school.major  && school.major.length  > 0    ) {

                $(".education-entry:last").append(
                    HTMLschoolName.replace("%data%", school.school) +
                    HTMLschoolDegree.replace("%data%", school.degree) +
                    HTMLschoolDates.replace("%data%", school.dates) +
                    HTMLschoolLocation.replace("%data%", school.place) +
                    HTMLschoolMajor.replace("%data%", school.major)
                );
            }
        }
    }
};

/*
 * Use of objects - display everthing on the page
 */
bio.display();
work.display();
heart.display();
education.display();
$("#mapDiv").append(googleMap);











