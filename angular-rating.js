(function() {
  'use strict';

  angular.module('angular-decimal-star-rating', [])

  var StarRating;
  StarRating = function() {
    return {
      restrict: 'EA',
      template: '<span><ul class=\'rating\' ng-class=\'{readonly: readonly}\'>' + '  <li ng-repeat=\'star in stars\' ng-class=\'star\' class=\'{{ratingStarClass}}\'  ng-click=\'toggle($index)\'>' + '    <i class=\'fa fa-star\'></i>' + '  </li>' + '</ul></span><span class=\'rating-status\'> {{ratingStatus}} </span>',
      scope: {
        ratingValue: '=ngModel',
        max: '=?',
        readonly: '=?',
        ratingStarClass: '@'
      },
      link: function(scope, elem, attrs) {
        var ratingStatuses, updateStars, updateStatus;
        scope.ratingStatus = void 0;
        ratingStatuses = ['very bad', 'bad', 'average', 'good', 'excellent'];
        updateStars = function() {
          var i;
          scope.stars = [];
          i = 0;
          while (i < scope.max) {
            scope.stars.push({
              filled: i < scope.ratingValue.rating
            });
            i++;
          }
        };
        updateStatus = function() {
          if (scope.readonly === void 0 || scope.readonly === false) {
            return scope.ratingStatus = ratingStatuses[scope.ratingValue.rating - 1];
          }
        };
        if (scope.max === void 0) {
          scope.max = 5;
        }
        scope.toggle = function(index) {
          if (scope.readonly === void 0 || scope.readonly === false) {
            scope.ratingValue.rating = index + 1;
          }
        };
        scope.$watch('ratingValue.rating', function(oldVal, newVal) {
          updateStars();
          updateStatus();
        });
      }
    };
  };
  angular.module("angular-decimal-star-rating").directive("starRating", StarRating);
})();

(function() {
  'use strict';
  var AverageStarRating;
  AverageStarRating = function() {
    return {
      restrict: 'EA',
      template: '<span class="pull-left"><div class=\'average-rating-container\'>' + '  <ul class=\'rating background\' class=\'readonly\' ng-click=\'clickFunction()\'>' + '    <li ng-repeat=\'star in stars\' class=\'star\' ng-click=\'clickFunction()\' >' + '      <i class=\'fa fa-star\'></i>' + '    </li>' + '  </ul>' + '  <ul class=\'rating foreground\' class=\'readonly\' style=\'width:{{filledInStarsContainerWidth}}%\'>' + '    <li ng-repeat=\'star in stars\' class=\'star filled\'>' + '<i class=\'fa fa-star\'></i>' + '    </li>' + '  </ul>' + ' </div> ' + '</span>' + '<span ng-show=\'totalReviews\' class=\'pull-left total-reviews total-reviews-click\' ng-click=\'clickFunction()\'  >' + '{{totalReviews}} Reviews' + '</span>  ',
      scope: {
        averageRatingValue: '=ngModel',
        max: '=?',
        totalReviews: '=?',
        clickFunction: '&'
      },
      link: function(scope, elem, attrs) {
        var updateStars;
        updateStars = function() {
          var i, starContainerMaxWidth;
          scope.stars = [];
          i = 0;
          while (i < scope.max) {
            scope.stars.push({});
            i++;
          }
          starContainerMaxWidth = 85;
          scope.filledInStarsContainerWidth = scope.averageRatingValue / scope.max * starContainerMaxWidth;
        };
        if (scope.max === void 0) {
          scope.max = 5;
        }
        return scope.$watch('averageRatingValue', function(oldVal, newVal) {
          updateStars();
        });
      }
    };
  };
  angular.module("angular-decimal-star-rating").directive("averageStarRating", AverageStarRating);
})();
