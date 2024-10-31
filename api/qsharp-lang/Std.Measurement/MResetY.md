---
uid: Qdk.Std.Measurement.MResetY
title: MResetY operation
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Measurement
qsharp.name: MResetY
qsharp.summary: "Measures a single qubit in the Y basis, and resets it to a fixed initial state following the measurement."
---

# MResetY operation

Fully qualified name: Std.Measurement.MResetY

```qsharp
operation MResetY(target : Qubit) : Result
```

## Summary
Measures a single qubit in the Y basis,
and resets it to a fixed initial state
following the measurement.

## Description
Performs a single-qubit measurement in the Y-basis,
and ensures that the qubit is returned to |0⟩
following the measurement.

## Input
### target
A single qubit to be measured.

## Output
The result of measuring `target` in the Pauli Y basis.
