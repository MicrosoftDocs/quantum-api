---
uid: Qdk.Std.Measurement.MeasureEachZ
title: MeasureEachZ operation
description: "Q# MeasureEachZ operation: Measures each qubit in a given array in the Pauli Z basis."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Measurement
qsharp.name: MeasureEachZ
qsharp.summary: "Measures each qubit in a given array in the Pauli Z basis."
---

# MeasureEachZ operation

Fully qualified name: Std.Measurement.MeasureEachZ

```qsharp
operation MeasureEachZ(register : Qubit[]) : Result[]
```

## Summary
Measures each qubit in a given array in the Pauli Z basis.

## Description
Measures each qubit in a register in the `Z` basis
and returns the result of each measurement.
This operation does not reset the measured qubits to the |0⟩ state,
leaving them in the state that corresponds to the measurement results.

## Input
### targets
An array of qubits to be measured.
## Output
An array of measurement results.

## Remarks
Please note the following differences:
- Operation `MeasureEachZ` performs one measurement for each qubit and returns
  an array of results. The operation does not reset the qubits.
- Operation `MResetEachZ` performs one measurement for each qubit and returns
  an array of results. The operation resets all qubits to |0⟩ state.
- Operation `MeasureAllZ` performs a joint measurement on all qubits
  and returns one result. The operation does not reset the qubits.

## See also
- [Std.Measurement.MeasureAllZ](xref:Qdk.Std.Measurement.MeasureAllZ)
- [Std.Measurement.MResetEachZ](xref:Qdk.Std.Measurement.MResetEachZ)
