angular.module('starter.controllers', [])
.controller("HomeController", homeController)
.controller("DetalheController", detalheController)
.controller("PedidoController", pedidoController);

homeController.$inject = ["ProdutoService"];
detalheController.$inject = ["ProdutoService", "$stateParams"];
pedidoController.$inject = ["ProdutoService", "$stateParams", "$http"];

function homeController(ProdutoService)
{
    var vm = this;

    ProdutoService.lista().then(function (retorno) {
        vm.bolos = retorno.data;
    })
}

function detalheController(ProdutoService, $stateParams)
{
    var vm = this;

    ProdutoService.lista().then(function (retorno) {
        vm.bolo = retorno.data[$stateParams.boloId];
    })
}

function pedidoController(ProdutoService, $stateParams, $http)
{
    var vm = this;

    ProdutoService.lista().then(function (retorno) {
        vm.bolo = retorno.data[$stateParams.boloId];
    })

    vm.dados = {};

    vm.fecharPedido = function () {
        $http.get('http://cozinhapp.sergiolopes.org/novo-pedido',
            {
                params: {
                    pedido: vm.bolo.nome,
                    info: vm.dados.nome + ' (' + vm.dados.telefone + ') - ' + vm.dados.endereco
                }
            });
    }
}