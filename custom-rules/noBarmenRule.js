"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Lint = require("tslint");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoBarmenWalker(sourceFile, this.getOptions()));
    };
    Rule.FAILURE_STRING = 'no barmen allowed';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
// The walker takes care of all the work.
var NoBarmenWalker = /** @class */ (function (_super) {
    __extends(NoBarmenWalker, _super);
    function NoBarmenWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoBarmenWalker.prototype.visitClassDeclaration = function (node) {
        // create a failure at the current position
        if (node.name.text === 'Barman') {
            this.addFailure(this.createFailure(node.name.getStart(), node.name.getWidth(), Rule.FAILURE_STRING));
        }
        ;
        // call the base version of this visitor to actually parse this node
        _super.prototype.visitClassDeclaration.call(this, node);
    };
    return NoBarmenWalker;
}(Lint.RuleWalker));
