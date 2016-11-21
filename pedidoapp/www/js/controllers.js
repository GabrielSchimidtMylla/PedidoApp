angular.module('starter.controllers', [])
.controller("HomeController", homeController)
.controller("DetalheController", detalheController)
.controller("PedidoController", pedidoController);

homeController.$inject = ["ProdutoService"];
detalheController.$inject = ["ProdutoService", "$stateParams"];
pedidoController.$inject = ["ProdutoService", "$stateParams", "$http", "$ionicLoading", "$state", "$ionicPopup"];

function homeController(ProdutoService) {
    var vm = this;

    ProdutoService.lista().then(function (retorno) {
        vm.bolos = retorno.data;
    })
}

function detalheController(ProdutoService, $stateParams) {
    var vm = this;

    ProdutoService.lista().then(function (retorno) {
        vm.bolo = retorno.data[$stateParams.boloId];
    })
}

function pedidoController(ProdutoService, $stateParams, $http, $ionicLoading, $state, $ionicPopup) {
    var vm = this;

    ProdutoService.lista().then(function (retorno) {
        vm.bolo = retorno.data[$stateParams.boloId];
    })

    vm.dados = {};

    vm.fecharPedido = function () {

        $ionicLoading.show();

        $http.get('http://cozinhapp.sergiolopes.org/novo-pedido', {
            params: {
                pedido: vm.bolo.nome,
                info: vm.dados.nome + ' (' + vm.dados.telefone + ') - ' + vm.dados.endereco
            }
        }).then(function () {

            $ionicPopup.alert({
                title: "Pedido Confirmado!",
                template: "Daqui a pouco chega! :)"
            }).then(function () {
                $state.go("home");
            });

        }).catch(function (error) {

            $ionicPopup.alert({
                title: "Error no pedido!",
                template: error.data + ". Ligue pra gente: 011-1406"
            });
        }).finally(function () {
            $ionicLoading.hide();
        });
    }
}