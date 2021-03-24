---
uid: Microsoft.Quantum.Samples.PrepareAllOnes
title: PrepareAllOnes operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples
qsharp.name: PrepareAllOnes
qsharp.summary: >-
  Given a register in the all-zeros state, prepares an all-ones state
  by flipping every qubit.
---

# PrepareAllOnes operation

Namespace: [Microsoft.Quantum.Samples](xref:Microsoft.Quantum.Samples)

Package: [Grover](https://nuget.org/packages/Grover)


Given a register in the all-zeros state, prepares an all-ones stateby flipping every qubit.

```qsharp
operation PrepareAllOnes (inputQubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### inputQubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

The register to be prepared in the all-ones state.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

