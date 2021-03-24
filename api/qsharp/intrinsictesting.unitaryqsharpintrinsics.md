---
uid: IntrinsicTesting.UnitaryQSharpIntrinsics
title: UnitaryQSharpIntrinsics user defined type
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: IntrinsicTesting
qsharp.name: UnitaryQSharpIntrinsics
qsharp.summary: ''
---

# UnitaryQSharpIntrinsics user defined type

Namespace: [IntrinsicTesting](xref:IntrinsicTesting)

Package: [QCIDecompositionsTests](https://nuget.org/packages/QCIDecompositionsTests)




```qsharp

newtype UnitaryQSharpIntrinsics = (X : (Qubit => Unit is Adj + Ctl), Y : (Qubit => Unit is Adj + Ctl), Z : (Qubit => Unit is Adj + Ctl), H : (Qubit => Unit is Adj + Ctl), S : (Qubit => Unit is Adj + Ctl), T : (Qubit => Unit is Adj + Ctl), CNOT : ((Qubit, Qubit) => Unit is Adj + Ctl), CCNOT : ((Qubit, Qubit, Qubit) => Unit is Adj + Ctl), SWAP : ((Qubit, Qubit) => Unit is Adj + Ctl), R : ((Pauli, Double, Qubit) => Unit is Adj + Ctl), RFrac : ((Pauli, Int, Int, Qubit) => Unit is Adj + Ctl), Rx : ((Double, Qubit) => Unit is Adj + Ctl), Ry : ((Double, Qubit) => Unit is Adj + Ctl), Rz : ((Double, Qubit) => Unit is Adj + Ctl), R1 : ((Double, Qubit) => Unit is Adj + Ctl), R1Frac : ((Int, Int, Qubit) => Unit is Adj + Ctl), Exp : ((Pauli[], Double, Qubit[]) => Unit is Adj + Ctl), ExpFrac : ((Pauli[], Int, Int, Qubit[]) => Unit is Adj + Ctl));
```



## Named Items

### X : [Qubit](xref:microsoft.quantum.lang-ref.qubit) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### Y : [Qubit](xref:microsoft.quantum.lang-ref.qubit) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### Z : [Qubit](xref:microsoft.quantum.lang-ref.qubit) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### H : [Qubit](xref:microsoft.quantum.lang-ref.qubit) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### S : [Qubit](xref:microsoft.quantum.lang-ref.qubit) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### T : [Qubit](xref:microsoft.quantum.lang-ref.qubit) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### CNOT : ([Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### CCNOT : ([Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### SWAP : ([Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### R : ([Pauli](xref:microsoft.quantum.lang-ref.pauli),[Double](xref:microsoft.quantum.lang-ref.double),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### RFrac : ([Pauli](xref:microsoft.quantum.lang-ref.pauli),[Int](xref:microsoft.quantum.lang-ref.int),[Int](xref:microsoft.quantum.lang-ref.int),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### Rx : ([Double](xref:microsoft.quantum.lang-ref.double),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### Ry : ([Double](xref:microsoft.quantum.lang-ref.double),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### Rz : ([Double](xref:microsoft.quantum.lang-ref.double),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### R1 : ([Double](xref:microsoft.quantum.lang-ref.double),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### R1Frac : ([Int](xref:microsoft.quantum.lang-ref.int),[Int](xref:microsoft.quantum.lang-ref.int),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### Exp : ([Pauli](xref:microsoft.quantum.lang-ref.pauli)[],[Double](xref:microsoft.quantum.lang-ref.double),[Qubit](xref:microsoft.quantum.lang-ref.qubit)[]) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl


### ExpFrac : ([Pauli](xref:microsoft.quantum.lang-ref.pauli)[],[Int](xref:microsoft.quantum.lang-ref.int),[Int](xref:microsoft.quantum.lang-ref.int),[Qubit](xref:microsoft.quantum.lang-ref.qubit)[]) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl

