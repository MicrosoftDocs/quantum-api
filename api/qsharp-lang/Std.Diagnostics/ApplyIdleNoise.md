---
uid: Qdk.Std.Diagnostics.ApplyIdleNoise
title: ApplyIdleNoise operation
description: "Q# ApplyIdleNoise operation: Applies configured noise to a qubit."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: ApplyIdleNoise
qsharp.summary: "Applies configured noise to a qubit."
---

# ApplyIdleNoise operation

Fully qualified name: Std.Diagnostics.ApplyIdleNoise

```qsharp
operation ApplyIdleNoise(qubit : Qubit) : Unit
```

## Summary
Applies configured noise to a qubit.

## Description
This operation applies configured noise to a qubit during simulation. For example,
if configured noise is a bit-flip noise with 5% probability, the X gate will be applied
with 5% probability. If no noise is configured, no noise is applied.
This is useful to simulate noise during idle periods. It could also be used to
apply noise immediately after qubit allocation.

## Input
### qubit
The qubit to which noise is applied.
