# TSlint example

## Add new rule to folder custom-rules

```
touch noBarmenRule.ts

```

## Add rule

```
import * as Lint from 'tslint';
import * as ts from 'typescript';

export class Rule extends Lint.Rules.AbstractRule {
    public static FAILURE_STRING = 'no barmen allowed';

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new NoBarmenWalker(sourceFile, this.getOptions()));
    }
}

// The walker takes care of all the work.
class NoBarmenWalker extends Lint.RuleWalker {
    public visitClassDeclaration(node: ts.ImportDeclaration) {
        // create a failure at the current position
        if (node.name.text === 'Barman') {
            this.addFailure(this.createFailure(node.name.getStart(), node.name.getWidth(), Rule.FAILURE_STRING));
        };

        // call the base version of this visitor to actually parse this node
        super.visitClassDeclaration(node);
    }
}


```

## Compile Rule

```
tsc ./custom-rules/noBarmenRule.ts
```

## Add rule folder and rule to rule object in tslint.json

```
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "no-barmen": [true]
    },
    "rulesDirectory": ["./custom-rules"]
}

```
### Run linter


```
npm run lint
```


MIT @DKunin