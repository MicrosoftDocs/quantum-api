---
uid: Microsoft.Quantum.Characterization.MeasureIdentity
title: MeasureIdentity operation
ms.date: 9/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Characterization
qsharp.name: MeasureIdentity
qsharp.summary: >-
  Measures the identity operator on a register
  of qubits.
---

# MeasureIdentity operation

Namespace: [Microsoft.Quantum.Characterization](xref:Microsoft.Quantum.Characterization)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Measures the identity operator on a registerof qubits.

```qsharp
operation MeasureIdentity (register : Qubit[]) : Result
```


## Input

### register : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

The register to be measured.



## Output : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

The result value `Zero`.

## Remarks

Since $\boldone$ has only the eigenvalue $1$, and does nothave a negative eigenvalue, this operation always returns`Zero`, corresponding to the eigenvalue $+1 = (-1)^0$,and does not cause a collapse of the state of `register`.On its own, this operation is not useful, but is helpfulin the context of process tomography, as it providesinformation about the trace preservation of a quantum process.In particular, a target machine with lossy measurement shouldreplace this operation by an actual measurement of $\boldone$.