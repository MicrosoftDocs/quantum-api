---
uid: Qdk.Std.Random.DrawRandomInt
title: DrawRandomInt operation
description: "Q# DrawRandomInt operation: Draws a random integer from a uniform distribution in a given inclusive range. Fails if `max < min`."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Random
qsharp.name: DrawRandomInt
qsharp.summary: "Draws a random integer from a uniform distribution in a given inclusive range. Fails if `max < min`."
---

# DrawRandomInt operation

Fully qualified name: Std.Random.DrawRandomInt

```qsharp
operation DrawRandomInt(min : Int, max : Int) : Int
```

## Summary
Draws a random integer from a uniform distribution
in a given inclusive range. Fails if `max < min`.

## Input
### min
The smallest integer to be drawn.
### max
The largest integer to be drawn.

## Output
An integer in the inclusive range from `min` to `max` with uniform
probability.

## Example
The following Q# snippet randomly rolls a six-sided die:
```qsharp
let roll = DrawRandomInt(1, 6);
```
