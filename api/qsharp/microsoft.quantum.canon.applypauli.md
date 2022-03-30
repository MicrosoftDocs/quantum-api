---
uid: Microsoft.Quantum.Canon.ApplyPauli
title: ApplyPauli operation
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyPauli
qsharp.summary: >-
  Given a multi-qubit Pauli operator, applies the corresponding operation to
  a register.
---

# ApplyPauli operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Given a multi-qubit Pauli operator, applies the corresponding operation toa register.

```qsharp
operation ApplyPauli (pauli : Pauli[], target : Qubit[]) : Unit is Adj + Ctl
```


## Input

### pauli : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)[]

A multi-qubit Pauli operator represented as an array of single-qubit Pauli operators.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Register to apply the given Pauli operation on.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Example

The following are equivalent:```qsharpApplyPauli([PauliY, PauliZ, PauliX], target);```and```qsharpY(target[0]);Z(target[1]);X(target[2]);```