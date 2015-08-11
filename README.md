# Udacity Front-End Nanodegree Project 2 #

A resume for a video game character (Link, from [the Ocarina of time](https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Ocarina_of_Time)).

## Quick Guide to the Files

* **index.html**: main HTML document, but consists almost solely of main structural divs (everything else is added through resumeBuilder.js & helper.js)
* **js/helper.js**: contains formatting and map code
* **js/resumeBuilder.js**: entirely own code; contains bulk of information for the resume
* **js/jQuery.js**: the jQuery library
* **css/style.css**: all the CSS for styling the page
* **README.md**: this very file!
* **images/** \*: images


## Open

There are a few things I would have liked to add but cut my time too close. These are things I may play around with later. (perhaps during the resubmission weeks at the end of the course?) Namely:

* "Outfit switcher" in *Ocarina of Time*, Link wears 3 different tunics, color-coded for their magical abilities. Having a "Swap tunic" button that changes the CSS of the page to match the colors of that tunic could have been fun - and a good use of jQuery (toggling a class with the associated CSS)
* A "real" map. Some of the examples given (Joker, Dragonborn) had neat custom maps. I would like to learn more about the google map API, and that would be a great way to do so 
   *  obviously, as it is, the map's locations are inaccurate!
* Cleaner code - standardize "blank item" checking in `resumeBuilder.js`
* "Do you understand? -> yes  no" - having that follow the mouse or arrow keys would be a nice reference back to the quest-explaining *Ocarina of Time* dialogs
* COLORS ARE HARD! investing more time in the CSS styling would pay off


## Overall Question

This... seems like a very weird way to build a website. Javascript for interactivity makes some intuitive sense - from buttons to fully-fledged google maps - but doesn't using it to format and append the basic content of a website make the website more difficult for humans to read and for search engines to index? 
