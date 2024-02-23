---
uid: Qdk.Microsoft.Quantum.Measurement.MeasureEachZ
title: MeasureEachZ operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Measurement
qsharp.name: MeasureEachZ
qsharp.summary: Measures each qubit in a given array in the standard basis.
---

# MeasureEachZ operation

Namespace: Microsoft.Quantum.Measurement

```qsharp
operation MeasureEachZ(register : Qubit[]) : Result[]
```

## Summary
Measures each qubit in a given array in the standard basis.
## Input
### targets
An array of qubits to be measured.
## Output
An array of measurement results.

## Remarks
This operation does not reset the measured qubits to the |0⟩ state,
leaving them in the state that corresponds to the measurement results.
