---
uid: Qdk.Std.Random.DrawRandomBool
title: DrawRandomBool operation
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Random
qsharp.name: DrawRandomBool
qsharp.summary: "Given a success probability, returns a single Bernoulli trial that is true with the given probability."
---

# DrawRandomBool operation

Fully qualified name: Std.Random.DrawRandomBool

```qsharp
operation DrawRandomBool(successProbability : Double) : Bool
```

## Summary
Given a success probability, returns a single Bernoulli trial
that is true with the given probability.

## Input
### successProbability
The probability with which true should be returned.

## Output
`true` with probability `successProbability`
and `false` with probability `1.0 - successProbability`.

## Example
The following Q# snippet samples flips from a biased coin:
```qsharp
let flips = DrawMany(DrawRandomBool, 10, 0.6);
```
