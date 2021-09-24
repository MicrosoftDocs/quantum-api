---
uid: Microsoft.Quantum.Measurement.MultiM
title: MultiM operation
ms.date: 9/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Measurement
qsharp.name: MultiM
qsharp.summary: Measures each qubit in a given array in the standard basis.
---

# MultiM operation

Namespace: [Microsoft.Quantum.Measurement](xref:Microsoft.Quantum.Measurement)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Measures each qubit in a given array in the standard basis.

```qsharp
operation MultiM (targets : Qubit[]) : Result[]
```


## Input

### targets : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

An array of qubits to be measured.



## Output : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)[]

An array of measurement results.

## Remarks

This operation does not reset the measured qubits to the |0⟩ state,leaving them in the state that corresponds to the measurement results.