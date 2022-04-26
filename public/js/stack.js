"use strict";
class Stack {
    constructor(in_items) {
        this.items = in_items || [];
    }
    length() {
        return this.items.length;
    }
    stack(el) {
        this.items.push(el);
    }
    unstack() {
        return this.length() > 0 ? this.items.pop() : undefined;
    }
    getElements() {
        return this.items;
    }
}
