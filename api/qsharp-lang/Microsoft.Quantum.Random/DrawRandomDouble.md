---
uid: Qdk.Microsoft.Quantum.Random.DrawRandomDouble
title: DrawRandomDouble operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Random
qsharp.name: DrawRandomDouble
qsharp.summary: Draws a random real number in a given inclusive interval.
---

# DrawRandomDouble operation

Namespace: Microsoft.Quantum.Random

```qsharp
operation DrawRandomDouble(min : Double, max : Double) : Double
```

## Summary
Draws a random real number in a given inclusive interval.

## Input
### min
The smallest real number to be drawn.
### max
The largest real number to be drawn.

## Output
A random real number in the inclusive interval from `min` to `max` with
uniform probability.

## Remarks
Fails if `max < min`.

## Example
The following Q# snippet randomly draws an angle between 0 and 2π:
```qsharp
let angle = DrawRandomDouble(0.0, 2.0 * PI());
```
