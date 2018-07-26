/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

           it('url is defined', function(){
             allFeeds.forEach(function(feed){ //https://github.com/aayusharora/Feed-Reader-Testing/blob/master/jasmine/spec/feedreader.js
               feedLink = feed.url;
                 expect(feedLink).toBeDefined();
                   expect(feedLink.length).not.toBe(0);

             });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name is defined', function(){
          allFeeds.forEach(function(feed){
            feedName = feed.name;
          expect(feedName).toBeDefined();
          expect(feedName.length).not.toBe(0);
        });
      });
    });

    /* TODO: Write a new test suite named "The menu" */
      describe('The Menu', function(){
});

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it("is hidden by default", function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it("visibility changes when the menu item is clicked", function() {
                   var menuIcon = $('.menu-icon-link');
                   menuIcon.trigger('click');
                   expect($('body').hasClass('menu-hidden')).toBe(false);

                   menuIcon.trigger('click');
                   expect($('body').hasClass('menu-hidden')).toBe(true);
                 });

    /* TODO: Write a new test suite named "Initial Entries" */
        describe('Initial Entries', function(){
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
                    loadFeed(0, done);
        });
                it("has at least one entry", function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

             /* TODO: Write a new test suite named "New Feed Selection" */

                 /* TODO: Write a new test suite named "New Feed Selection" */
                 describe('New Feed Selection', function(){
                     let entries0;
                     let entries1;
                     //the use of Jasmine's beforeEach and asynchronous done() function.
                     //ensures when a new feed is loaded by the loadFeed
                     beforeEach(function(done){
                         loadFeed(0, function(){
                             //nodlist
                             entries0 = document.querySelectorAll('.feed a'); //https://github.com/bobbidigi/frontend-nanodegree-feedreader
                             //first el in nodelist get href
                             entries0 = entries0[0].getAttribute('href'); //https://github.com/bobbidigi/frontend-nanodegree-feedreader
                             console.log(entries0); //https://github.com/bobbidigi/frontend-nanodegree-feedreader

                             loadFeed(1, function () {
                                 //nodelist
                                 entries1 = document.querySelectorAll('.feed a');
                                 //first el in nodelist get href
                                 entries1 = entries1[0].getAttribute('href');
                                 console.log(entries1);
                                 done();
                             });

                         });

                     });

                     // the content actually changes
                     it('is new', function(){
                         expect(entries0).not.toBe(entries1);
                     });

                 });
             }());
