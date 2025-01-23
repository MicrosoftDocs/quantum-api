---
uid: Qdk.Std.Canon.ApplyPauliFromInt
title: ApplyPauliFromInt operation
description: "Q# ApplyPauliFromInt operation: Applies a Pauli operator on each qubit in an array if the corresponding bit of a Little-endian integer matches a given input."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyPauliFromInt
qsharp.summary: "Applies a Pauli operator on each qubit in an array if the corresponding bit of a Little-endian integer matches a given input."
---

# ApplyPauliFromInt operation

Fully qualified name: Std.Canon.ApplyPauliFromInt

```qsharp
operation ApplyPauliFromInt(pauli : Pauli, bitApply : Bool, numberState : Int, qubits : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Applies a Pauli operator on each qubit in an array if the corresponding
bit of a Little-endian integer matches a given input.

## Input
### pauli
Pauli operator to apply to `qubits[idx]` when bit of numberState
in idx position is the same as bitApply.
### bitApply
apply Pauli if bit is this value
### numberState
Little-endian integer specifying which corresponding qubit in `qubits` should be operated on
### qubits
Quantum register on which to selectively apply the specified Pauli operator

## Example
The following applies an X operation on qubits 0 and 2, and a Z operation on qubits 1 and 3.
```qsharp
use qubits = Qubit[4];
let n = 5;
// Apply when index in `bits` is `true`.
ApplyPauliFromBitString(PauliX, true, n, qubits);
// Apply when index in `bits` is `false`.
ApplyPauliFromBitString(PauliZ, false, n, qubits);
```
