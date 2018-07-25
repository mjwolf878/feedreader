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
      it('menu-hidden', function(){
        expect ('.menu-hidden'.is(':visible')).toBe(true);
      });

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it ('menu should be hidden by default', function(){
          const body = document.querySelector('body'); //https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/
            expect(body.classList.contains('menu-hidden').toBe (true); // we want it hidden by default to be true //https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/
          });
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu toggles on and off', function(){
            const body = document.querySelector('body';
            const menu = document.querySelector('menu-icon-link'); //want menu to toggle between on and off //https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/
              menu.click() // need a method to click on // https:matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/
                expect(body.classList.contains('menu-hidden'.toBe(false){ //want it on not hidden

            });
            it('menu toggles on and off', function(){
              const body = document.querySelector('body';
              const menu = document.querySelector('menu-icon-link'); // menu will go back to being hidden
                menu.click() // need a method to click off // https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/
                  expect(body.classList.contains('menu-hidden'.toBe(true){

              });

    /* TODO: Write a new test suite named "Initial Entries" */
      describe('Initial Entries', function(){ //https://github.com/aayusharora/Feed-Reader-Testing/blob/master/jasmine/spec/feedreader.js
        beforeEach(function(done){
            loadFeed(0, done);
        });
        it('initial element present', function(){
          expect(feedEntry.length).toBeGreaterThan(0);
        });
      });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         describe('New Feed', function(){ //https://github.com/aayusharora/Feed-Reader-Testing/blob/master/jasmine/spec/feedreader.js
           const testfeed;
           beforeEach(function(done){
               loadFeed(0, function); //https://github.com/aayusharora/Feed-Reader-Testing/blob/master/jasmine/spec/feedreader.js
                testfeed = $('.feed').html();
                loadFeed(1, done);
           });
         });
//check news feed
           it('has loaded', function(){ //https://github.com/aayusharora/Feed-Reader-Testing/blob/master/jasmine/spec/feedreader.js
             expect($('.feed').html()).not.toEqual(testfeed);
           });
         });
});

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
