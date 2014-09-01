/**
 * Created by piniu on 01.09.14.
 */
(function () {
    'use strict';

    function ShoppingCartCtrl() {

        this.cart = [];

        this.addProduct = function (product) {
            if (null == product.id) {
                if (0 == this.cart.length) {
                    product.id = 0;
                } else {
                    product.id = this.cart[this.cart.length - 1].id + 1;
                }
                this.cart.push(product);
            } else {
                for (var i in this.cart) {
                    if (this.cart[i].id == product.id) {
                        this.cart[i] = product;
                    }

                }

            }

        };

        this.deleteProduct = function (id) {
            for (var i = 0; this.cart.length > i; i++) {
                if (this.cart[i].id == id) {
                    this.cart.splice(i, 1);
                }

            }
        };

    }

    var module = angular.module('day8App', []);
    module.controller('ShoppingCartCtrl', [ShoppingCartCtrl]);
})();