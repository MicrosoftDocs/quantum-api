---
uid: Qdk.Std.Measurement.MeasureAllZ
title: MeasureAllZ operation
description: "Q# MeasureAllZ operation: Jointly measures a register of qubits in the Pauli Z basis."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Measurement
qsharp.name: MeasureAllZ
qsharp.summary: "Jointly measures a register of qubits in the Pauli Z basis."
---

# MeasureAllZ operation

Fully qualified name: Std.Measurement.MeasureAllZ

```qsharp
operation MeasureAllZ(register : Qubit[]) : Result
```

## Summary
Jointly measures a register of qubits in the Pauli Z basis.

## Description
Measures a register of qubits in the `Z ⊗ Z ⊗ ••• ⊗ Z`
basis, representing the parity of the entire register.
This operation does not reset the measured qubits to the |0⟩ state,
leaving them in the state that corresponds to the measurement result.

## Input
### register
The register to be jointly measured.

## Output
The result of measuring in the `Z ⊗ Z ⊗ ••• ⊗ Z` basis.

## See also
- [Std.Measurement.MeasureEachZ](xref:Qdk.Std.Measurement.MeasureEachZ)
