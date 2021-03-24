---
uid: Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit.MapPauli
title: MapPauli operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit
qsharp.name: MapPauli
qsharp.summary: Applies unitary such that MapPauli(...); R(from,...) ; Adjoint MapPauli(...); is equivalent to R(to,...)
---

# MapPauli operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit](xref:Microsoft.Quantum.Runtime.Decompositions.Utilities.Circuit)

Package: [Microsoft.Quantum.Decompositions.IonQ](https://nuget.org/packages/Microsoft.Quantum.Decompositions.IonQ)


Applies unitary such that MapPauli(...); R(from,...) ; Adjoint MapPauli(...); is equivalent to R(to,...)

```qsharp
operation MapPauli (qubit : Qubit, from : Pauli, to : Pauli, H : (Qubit => Unit is Adj), S : (Qubit => Unit is Adj)) : Unit is Adj
```


## Input

### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### from : [Pauli](xref:microsoft.quantum.lang-ref.pauli)




### to : [Pauli](xref:microsoft.quantum.lang-ref.pauli)




### H : [Qubit](xref:microsoft.quantum.lang-ref.qubit) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj




### S : [Qubit](xref:microsoft.quantum.lang-ref.qubit) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

