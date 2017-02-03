# Angular Decimal star rating

With this directive one can easily build ratings and also allows you to show ratings in fractional.

## Installation via bower
To install with bower write

```bash
  bower install angular-decimal-star-rating
```

## Injection
Inject it to your app

```javascript
    angular.module('app', ['angular-decimal-star-rating'])
```  

## Usage
Simple Usage

### Simple rating model

```html
	<star-rating ng-model="ratingHash"></star-rating>
```

```javascript
  $scope.ratingHash = {}
```
  
> RatingHash is hash variable. It contains rating as a key and one can print it as.

```javascript
  console.log($scope.ratingHash.rating)
```

### Rating Model with default rating

```html
	<star-rating ng-model="ratingHash"></star-rating>
```

In your controller write

```javascript
  $scope.ratingHash = {}
  $scope.ratingHash.rating = 4
```

##Dependencies
This directive uses [FontAwesome](http://fortawesome.github.io/Font-Awesome/) for stars.

## License

MIT License © Rafael Mello Campanari
