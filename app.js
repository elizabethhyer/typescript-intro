// const anchor = document.querySelector("a");
// if (anchor) console.log(anchor.href);
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on mario website", 250);
var invTwo = new Invoice("luigi", "work on luigi website", 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// const form = document.querySelector("form");
var form = document.querySelector(".new-item-form");
//console.log(form.children);
var type = document.querySelector("#type");
var toFrom = document.querySelector("#toFrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
