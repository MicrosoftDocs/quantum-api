---
uid: Microsoft.Quantum.Canon.ApplyIfA
title: ApplyIfA operation
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: ApplyIfA
qsharp.summary: Applies a adjointable operation conditioned on a classical bit.
---

# ApplyIfA operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies a adjointable operation conditioned on a classical bit.

```qsharp
operation ApplyIfA<'T> (bit : Bool, op : ('T => Unit is Adj), target : 'T) : Unit is Adj
```


## Description

Given a bit value `bit` and an operation `op`, applies `op` to the `target`if `bit` is `true`. If `false`, nothing happens to the `target`.The suffix `A` indicates that the operation to be applied is adjointable.

## Input

### bit : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

a boolean that controls whether op is applied or not.


### op : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj

An operation to be conditionally applied.


### target : 'T

The input to which the operation is applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T

The input type of the operation to be conditionally applied.

## Example

The following prepares a register of qubits into a computational basisstate represented by a classical bit string given as an array of `Bool`values:```qsharplet bitstring = [true, false, true];using (register = Qubit(3)) {    ApplyToEach(ApplyIf(_, X, _), Zipped(bitstring, register));    // register should now be in the state |101⟩.    ...}```

## See Also

- [Microsoft.Quantum.Canon.ApplyIfC](xref:Microsoft.Quantum.Canon.ApplyIfC)
- [Microsoft.Quantum.Canon.ApplyIfA](xref:Microsoft.Quantum.Canon.ApplyIfA)
- [Microsoft.Quantum.Canon.ApplyIfCA](xref:Microsoft.Quantum.Canon.ApplyIfCA)