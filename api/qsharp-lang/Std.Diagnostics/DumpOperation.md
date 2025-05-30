---
uid: Qdk.Std.Diagnostics.DumpOperation
title: DumpOperation operation
description: "Q# DumpOperation operation: Given an operation, dumps the matrix representation of the operation action on the given number of qubits."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: DumpOperation
qsharp.summary: "Given an operation, dumps the matrix representation of the operation action on the given number of qubits."
---

# DumpOperation operation

Fully qualified name: Std.Diagnostics.DumpOperation

```qsharp
operation DumpOperation(nQubits : Int, op : (Qubit[] => Unit)) : Unit
```

## Summary
Given an operation, dumps the matrix representation of the operation action on the given
number of qubits.

## Input
### nQubits
The number of qubits on which the given operation acts.
### op
The operation that is to be diagnosed.

## Remarks
When run on the sparse-state simulator, the following snippet
will output the matrix
$\left(\begin{matrix} 0.707 & 0.707 \\\\ 0.707 & -0.707\end{matrix}\right)$:

```qsharp
operation DumpH() : Unit {
    DumpOperation(1, qs => H(qs[0]));
}
```
Calling this operation has no observable effect from within Q#.
Note that if `DumpOperation` is called when there are other qubits allocated,
the matrix displayed may reflect any global phase that has accumulated from operations
on those other qubits.
