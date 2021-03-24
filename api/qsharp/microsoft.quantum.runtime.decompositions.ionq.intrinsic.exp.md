---
uid: Microsoft.Quantum.Runtime.Decompositions.IonQ.Intrinsic.Exp
title: Exp operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.IonQ.Intrinsic
qsharp.name: Exp
qsharp.summary: >-
  IonQ supports exp(i theta XX), exp(i theta YY), exp(i theta ZZ) with any number of controls out of the box.
  TODO: Make sure that angle and factor of two are consistent by using IonQ simulator.
---

# Exp operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.IonQ.Intrinsic](xref:Microsoft.Quantum.Runtime.Decompositions.IonQ.Intrinsic)

Package: [Microsoft.Quantum.Decompositions.IonQ](https://nuget.org/packages/Microsoft.Quantum.Decompositions.IonQ)


IonQ supports exp(i theta XX), exp(i theta YY), exp(i theta ZZ) with any number of controls out of the box.TODO: Make sure that angle and factor of two are consistent by using IonQ simulator.

```qsharp
operation Exp (paulis : Pauli[], theta : Double, qubits : Qubit[]) : Unit is Ctl
```


## Input

### paulis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)[]




### theta : [Double](xref:microsoft.quantum.lang-ref.double)




### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

