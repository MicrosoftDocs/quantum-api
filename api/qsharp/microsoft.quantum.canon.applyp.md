---
uid: Microsoft.Quantum.Canon.ApplyP
title: ApplyP operation
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyP
qsharp.summary: >-
  Given a single-qubit Pauli operator, applies the corresponding operation
  to a single qubit.
---

# ApplyP operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given a single-qubit Pauli operator, applies the corresponding operationto a single qubit.

```qsharp
operation ApplyP (pauli : Pauli, target : Qubit) : Unit is Adj + Ctl
```


## Input

### pauli : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)

The Pauli operator to be applied.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

The qubit to which `pauli` is to be applied as an operation.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Example

The following are equivalent:```qsharpApplyP(PauliX, q);```and```qsharpX(q);```