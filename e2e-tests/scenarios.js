'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('IACL', function () {


    var heroes = element.all(by.repeater('hero in main.heroes'));

    it('should see a list of 6 heroes when calling the startpage', function () {
        browser.get('index.html');
        expect(heroes.count()).toEqual(6);
    });


});
