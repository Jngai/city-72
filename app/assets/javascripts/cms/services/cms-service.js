backofficeApp.factory('cmsService', ['$resource', function ($resource) {

  var City = $resource('/cms/city', null, {
    'update': {method: 'PUT'},
  });

  var Connection = $resource('/cms/city_connections', null, {
    'update': {method: 'PUT'},
  });

  return {
    updateCity: function (city) {
      city.affiliates_attributes = city.affiliates ? city.affiliates : [];
      return City.update(city).$promise;
    },

    updateConnection: function (connection) {
      connection.twitter_accounts_attributes = connection.twitter_accounts ? connection.twitter_accounts : [];
      connection.city_networks_attributes = connection.city_networks ? connection.city_networks : [];
      return Connection.update(connection).$promise;
    }
  }

}]);