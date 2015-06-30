/**
 * Created by xlin on 30/06/15.
 */
'use strict';

angular.module('core').service('Files', [

    function() {
        this.getSlides = function() {
            var slides = [
                '/modules/core/img/slider/slider1.jpg',
                '/modules/core/img/slider/slider2.jpg',
                '/modules/core/img/slider/slider3.jpg',
                '/modules/core/img/slider/slider4.jpg'
            ];

            return slides;
        };
    }
]);