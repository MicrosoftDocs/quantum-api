---
uid: Qdk.Std.Canon.Relabel
title: Relabel operation
description: "Q# Relabel operation: Relabels the qubits in the `current` array with the qubits in the `updated` array. The `updated` array must be a valid permutation of the `current` array."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: Relabel
qsharp.summary: "Relabels the qubits in the `current` array with the qubits in the `updated` array. The `updated` array must be a valid permutation of the `current` array."
---

# Relabel operation

Fully qualified name: Std.Canon.Relabel

```qsharp
operation Relabel(current : Qubit[], updated : Qubit[]) : Unit is Adj
```

## Summary
Relabels the qubits in the `current` array with the qubits in the `updated` array. The `updated` array
must be a valid permutation of the `current` array.

## Input
### current
Array of qubits to be relabeled.
### updated
Array of qubits with which to relabel the `current` array.

## Remarks
This operation is useful when you need to relabel qubits in a way that does not incur any quantum operations.
Note that when compiling for execution on hardware with limited qubit connectivity, this operation
may not result in any changes to qubit adjacency and one or more `SWAP` gates may still be required.

## Example
The following example demonstrates how to relabel qubits in a register:
```qsharp
use qubits = Qubit[3];
let newOrder = [qubits[2], qubits[0], qubits[1]];
Relabel(qubits, newOrder);
```
After this operation, any use of `qubits[0]` will refer to the qubit that was originally `qubits[2]`, and so on.
To exchange the labels on two qubits, the virtual equivalent of a `SWAP` gate, you can use the following code:
```qsharp
use (q0, q1) = (Qubit(), Qubit());
Relabel([q0, q1], [q1, q0]);
```
Note that the adjoint of this operation effectively changes the order of arguments, such that
`Adjoint Relabel(qubits, newOrder)` is equivalent to `Relabel(newOrder, qubits)`.
