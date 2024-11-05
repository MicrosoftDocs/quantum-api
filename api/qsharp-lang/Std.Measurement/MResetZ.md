---
uid: Qdk.Std.Measurement.MResetZ
title: MResetZ operation
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Measurement
qsharp.name: MResetZ
qsharp.summary: "Measures a single qubit in the Z basis, and resets it to a fixed initial state following the measurement."
---

# MResetZ operation

Fully qualified name: Std.Measurement.MResetZ

```qsharp
operation MResetZ(target : Qubit) : Result
```

## Summary
Measures a single qubit in the Z basis,
and resets it to a fixed initial state
following the measurement.

## Description
Performs a single-qubit measurement in the Z-basis,
and ensures that the qubit is returned to |0⟩
following the measurement.

## Input
### target
A single qubit to be measured.

## Output
The result of measuring `target` in the Pauli Z basis.
