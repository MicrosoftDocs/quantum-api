---
uid: Microsoft.Quantum.Measurement.MeasureAllZ
title: MeasureAllZ operation
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Measurement
qsharp.name: MeasureAllZ
qsharp.summary: Jointly measures a register of qubits in the Pauli Z basis.
---

# MeasureAllZ operation

Namespace: [Microsoft.Quantum.Measurement](xref:Microsoft.Quantum.Measurement)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Jointly measures a register of qubits in the Pauli Z basis.

```qsharp
operation MeasureAllZ (register : Qubit[]) : Result
```


## Description

Measures a register of qubits in the $Z \otimes Z \otimes \cdots \otimes Z$basis, representing the parity of the entire register.

## Input

### register : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

The register to be measured.



## Output : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

The result of measuring $Z \otimes Z \otimes \cdots \otimes Z$.

## Remarks

This operation does not reset the measured qubits to the |0⟩ state,leaving them in the state that corresponds to the measurement result.