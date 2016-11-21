"use strict";

angular.module("starter")
       .config(configuration);

configuration.$inject = ["$stateProvider", "$urlRouterProvider"];

function configuration($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider.state("home", {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
        controllerAs: "vm"
    }).state("detalhe", {
        url: '/bolo/:boloId',
        templateUrl: 'templates/detalhe.html',
        controller: 'DetalheController',
        controllerAs: "vm"
    }).state("pedido", {
        url: '/pedido/:boloId',
        templateUrl: 'templates/pedido.html',
        controller: 'PedidoController',
        controllerAs: "vm"
    });
}