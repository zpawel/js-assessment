/**
 * Created by piniu on 01.09.14.
 */
describe("ShoppingCartCtrl", function () {
    beforeEach(module('day8App'));
    var shoppingCart;

    beforeEach(inject(function ($controller) {
        shoppingCart = $controller('ShoppingCartCtrl', {});
    }));

    describe("addProduct", function () {

        it("should add new product to shopping cart list", function () {
            shoppingCart.addProduct({id: null, name: 'ham', price: 5.5});
            expect(shoppingCart.cart).toEqual([
                {id: 0, name: 'ham', price: 5.5}
            ]);
            shoppingCart.addProduct({id: null, name: 'beer', price: 2.45});
            expect(shoppingCart.cart).toEqual([
                {id: 0, name: 'ham', price: 5.5},
                {id: 1, name: 'beer', price: 2.45}
            ]);
        });
        it("should change product if id is on list", function () {
            shoppingCart.addProduct({id: null, name: 'Ham', price: 5.5});
            shoppingCart.addProduct({id: null, name: 'Beer', price: 2.45});
            shoppingCart.addProduct({id: 1, name: 'Butter', price: 2});
            expect(shoppingCart.cart).toEqual([
                {id: 0, name: 'Ham', price: 5.5},
                {id: 1, name: 'Butter', price: 2}
            ]);
            shoppingCart.addProduct({id: 0, name: 'Orange', price: 4.25});
            expect(shoppingCart.cart).toEqual([
                {id: 0, name: 'Orange', price: 4.25},
                {id: 1, name: 'Butter', price: 2}
            ]);
        });

    });
    describe("deleteProduct", function () {
        it("should delete product from list", function () {
            shoppingCart.addProduct({id: null, name: 'Ham', price: 5.5});
            shoppingCart.addProduct({id: null, name: 'Beer', price: 2.45});
            shoppingCart.addProduct({id: null, name: 'Milk', price: 1.2});
            shoppingCart.deleteProduct(1);
            expect(shoppingCart.cart).toEqual([
                {id: 0, name: "Ham", price: 5.5},
                {id: 2, name: 'Milk', price: 1.2}
            ]);
            shoppingCart.deleteProduct(0);
            expect(shoppingCart.cart).toEqual([
                {id: 2, name: 'Milk', price: 1.2}
            ]);
            shoppingCart.deleteProduct(2);
            expect(shoppingCart.cart).toEqual([]);
        });
    });
});