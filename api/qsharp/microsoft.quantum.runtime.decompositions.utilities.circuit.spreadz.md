---
uid: Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit.SpreadZ
title: SpreadZ operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit
qsharp.name: SpreadZ
qsharp.summary: >-
  Applies unitary such that
  `SpreadZ(...); Exp([PauliZ],theta,[from]) ; Adjoint SpreadZ(...);` is equivalent to `Exp([PauliZ,..,PauliZ],theta,[from] + to)`
---

# SpreadZ operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit](xref:Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit)

Package: [Microsoft.Quantum.Decompositions.IonQ](https://nuget.org/packages/Microsoft.Quantum.Decompositions.IonQ)


Applies unitary such that`SpreadZ(...); Exp([PauliZ],theta,[from]) ; Adjoint SpreadZ(...);` is equivalent to `Exp([PauliZ,..,PauliZ],theta,[from] + to)`

```qsharp
operation SpreadZ (from : Qubit, to : Qubit[], CNOT : ((Qubit, Qubit) => Unit is Adj)) : Unit is Adj
```


## Input

### from : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### to : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]




### CNOT : ([Qubit](xref:microsoft.quantum.lang-ref.qubit),[Qubit](xref:microsoft.quantum.lang-ref.qubit)) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

