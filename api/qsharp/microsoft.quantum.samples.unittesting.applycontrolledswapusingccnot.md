---
uid: Microsoft.Quantum.Samples.UnitTesting.ApplyControlledSWAPUsingCCNOT
title: ApplyControlledSWAPUsingCCNOT operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.UnitTesting
qsharp.name: ApplyControlledSWAPUsingCCNOT
qsharp.summary: >-
  Applies the Controlled SWAP operation (aka Fredkin), using a given
  CCNOT implementation.
---

# ApplyControlledSWAPUsingCCNOT operation

Namespace: [Microsoft.Quantum.Samples.UnitTesting](xref:Microsoft.Quantum.Samples.UnitTesting)

Package: [UnitTesting](https://nuget.org/packages/UnitTesting)


Applies the Controlled SWAP operation (aka Fredkin), using a givenCCNOT implementation.

```qsharp
operation ApplyControlledSWAPUsingCCNOT (ccnotOp : ((Qubit, Qubit, Qubit) => Unit is Adj + Ctl), control : Qubit, target1 : Qubit, target2 : Qubit) : Unit is Adj + Ctl
```


## Input

### ccnotOp : ([Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl

An implementation of a doubly-controlled NOT operation (aka Toffoli).


### control : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

The qubit on which the SWAP operation should be controlled.


### target1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

The first of two targets to be swapped, conditioned on `control`.


### target2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

The second of two targets to be swapped, conditioned on `control`.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Number of gates used for this implementation is 2 CNOTs + number of gates used for theimplementation of CCNOTOp