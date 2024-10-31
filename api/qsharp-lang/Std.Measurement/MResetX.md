---
uid: Qdk.Std.Measurement.MResetX
title: MResetX operation
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Measurement
qsharp.name: MResetX
qsharp.summary: "Measures a single qubit in the X basis, and resets it to a fixed initial state following the measurement."
---

# MResetX operation

Fully qualified name: Std.Measurement.MResetX

```qsharp
operation MResetX(target : Qubit) : Result
```

## Summary
Measures a single qubit in the X basis,
and resets it to a fixed initial state
following the measurement.

## Description
Performs a single-qubit measurement in the X-basis,
and ensures that the qubit is returned to |0⟩
following the measurement.

## Input
### target
A single qubit to be measured.

## Output
The result of measuring `target` in the Pauli X basis.
