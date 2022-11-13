import Notiflix from 'notiflix';

class Counter {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.decrementRef = this.container.querySelector('[data-action="decrement"]');
        this.incrementRef = this.container.querySelector('[data-action="increment"]');
        this.counterValueRef = this.container.querySelector('#value');
        this.counterValue = 0;
        this.onIncrement = this._onIncrement.bind(this);
        this.onDecrement = this._onDecrement.bind(this);
        this.addListeners();
    }
    addListeners() {
        this.decrementRef.addEventListener('click', this.onDecrement);
        this.incrementRef.addEventListener('click', this.onIncrement);
    }
    _onIncrement() {
        this.counterValue += 1;
        this.counterValueRef.textContent = this.counterValue;
    }
    _onDecrement() {
        this.counterValue -= 1;
        this.counterValueRef.textContent = this.counterValue;
    }
}
new Counter('#counter');
// new Counter('#counter1')
// new Counter('#counter2')