---
uid: Microsoft.Quantum.Measurement.MeasureEachZ
title: MeasureEachZ operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Measurement
qsharp.name: MeasureEachZ
qsharp.summary: Measures each qubit in a given array in the standard basis.
---

# MeasureEachZ operation

Namespace: [Microsoft.Quantum.Measurement](xref:Microsoft.Quantum.Measurement)

Package: [Microsoft.Quantum.QSharp.Core](https://nuget.org/packages/Microsoft.Quantum.QSharp.Core)


Measures each qubit in a given array in the standard basis.

```qsharp
operation MeasureEachZ (targets : Qubit[]) : Result[]
```


## Input

### targets : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

An array of qubits to be measured.



## Output : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)[]

An array of measurement results.

## Remarks

This operation does not reset the measured qubits to the |0⟩ state,leaving them in the state that corresponds to the measurement results.