/*
    Online Shopping Cart System
    /*
        You are developing an online shopping cart system for an e-commerce website.
        The basic functionality of the cart is to add products and calculate the total cost.
        However, the company wants to offer additional features to enhance the shopping experience:

        Gift Wrapping: Customers can choose to have their items gift-wrapped for an additional fee.
        The fee depends on the type of wrapping paper chosen.

        Express Delivery: Customers can opt for express delivery, which will deliver their items faster for an additional charge.

        Purchase Insurance: Customers can choose to add insurance to their purchase for a small fee.
        The insurance will cover any damage during delivery.

        Discount Coupons: Customers can apply discount coupons to their cart, which will reduce the total cost.
    */
// The Component interface defines operations that can be altered by decorators.
interface Cart {
    getCost(): number;
    getDescription(): string;
}

// Concrete Component provides default implementations of the operations.
export class BasicCart implements Cart {
    getCost(): number {
        return 0; // Basic cart has no cost
    }

    getDescription(): string {
        return 'Shopping Cart';
    }
}

// The Decorator base class follows the same interface as the other components.
abstract class CartDecorator implements Cart {
    protected cart: Cart;

    constructor(cart: Cart) {
        this.cart = cart;
    }

    abstract getCost(): number;
    abstract getDescription(): string;
}

// Concrete Decorators call the wrapped object and alter its result in some way.
export class GiftWrap extends CartDecorator {
    getCost(): number {
        return this.cart.getCost() + 5; // Adding cost of gift wrap
    }

    getDescription(): string {
        return this.cart.getDescription() + ', Gift Wrap';
    }
}

export class ExpressDelivery extends CartDecorator {
    getCost(): number {
        return this.cart.getCost() + 10; // Adding cost of express delivery
    }

    getDescription(): string {
        return this.cart.getDescription() + ', Express Delivery';
    }
}

