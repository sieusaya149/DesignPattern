// Import necessary libraries
import { BasicCart, GiftWrap, ExpressDelivery } from '../../src/structure/Decorator/Decorator';
import { expect } from 'chai';
import 'mocha';

describe('Decorator', () => {
    it('should calculate cost correctly', () => {
        let cart = new BasicCart();
        cart = new GiftWrap(cart); // the car was wrapped by GiftWrap
        cart = new ExpressDelivery(cart); // the car was delivered by ExpressDelivery
        const cost = cart.getCost();

        expect(cost).to.equal(15); // 0 (basic cart) + 5 (gift wrap) + 10 (express delivery)
    });

    it('should generate description correctly', () => {
        let cart = new BasicCart();
        cart = new GiftWrap(cart);
        cart = new ExpressDelivery(cart);

        const description = cart.getDescription();

        expect(description).to.equal('Shopping Cart, Gift Wrap, Express Delivery');
    });
});