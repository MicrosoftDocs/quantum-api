---
uid: Qdk.Microsoft.Quantum.Measurement.MeasureAllZ
title: MeasureAllZ operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Measurement
qsharp.name: MeasureAllZ
qsharp.summary: Jointly measures a register of qubits in the Pauli Z basis.
---

# MeasureAllZ operation

Namespace: Microsoft.Quantum.Measurement

```qsharp
operation MeasureAllZ(register : Qubit[]) : Result
```

## Summary
Jointly measures a register of qubits in the Pauli Z basis.

## Description
Measures a register of qubits in the `Z ⊗ Z ⊗ ••• ⊗ Z`
basis, representing the parity of the entire register.

## Input
### register
The register to be measured.

## Output
The result of measuring `Z ⊗ Z ⊗ ••• ⊗ Z`.

## Remarks
This operation does not reset the measured qubits to the |0⟩ state,
leaving them in the state that corresponds to the measurement result.
