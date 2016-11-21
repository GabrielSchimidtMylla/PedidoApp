angular.module('starter.services', [])
       .service('ProdutoService', function ($http) {
           var url = "http://cozinhapp.sergiolopes.org/produtos";

           return {
               lista: function () {
                   return $http.get(url);
               }
           };
       });
