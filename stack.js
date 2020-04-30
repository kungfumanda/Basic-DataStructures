export default class Stack {

    constructor(m) {
        this.elements = [];
        this.top = -1;
        this.maxsize = m;
    }
    push(num) { 
        //Inserts an element on top of the stack.
        if (this.top <= this.maxsize) {
            this.top += 1;
            this.elements[this.top] = num;
        } else {
            console.log("Stack Overflow.")
        }
    }
    pop() {
        //remove top's element if there is one.
        if (this.top > -1) {
            let num = this.elements[this.top];
            this.top -= 1;
            return num;
        }
        else {
            console.log("Stack underflow.")
        }
    }
    peek() {
        return this.elements[this.top];
    }
    isEmpty() {
        return (top == -1)
    }
}


