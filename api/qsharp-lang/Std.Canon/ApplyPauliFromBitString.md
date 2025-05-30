---
uid: Qdk.Std.Canon.ApplyPauliFromBitString
title: ApplyPauliFromBitString operation
description: "Q# ApplyPauliFromBitString operation: Applies a Pauli operator on each qubit in an array if the corresponding bit of a Boolean array matches a given input."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyPauliFromBitString
qsharp.summary: "Applies a Pauli operator on each qubit in an array if the corresponding bit of a Boolean array matches a given input."
---

# ApplyPauliFromBitString operation

Fully qualified name: Std.Canon.ApplyPauliFromBitString

```qsharp
operation ApplyPauliFromBitString(pauli : Pauli, bitApply : Bool, bits : Bool[], qubits : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Applies a Pauli operator on each qubit in an array if the corresponding
bit of a Boolean array matches a given input.

## Input
### pauli
Pauli operator to apply to `qubits[idx]` where `bitApply == bits[idx]`
### bitApply
apply Pauli if bit is this value
### bits
Boolean register specifying which corresponding qubit in `qubits` should be operated on
### qubits
Quantum register on which to selectively apply the specified Pauli operator

## Remarks
The Boolean array and the quantum register must be of equal length.

## Example
The following applies an X operation on qubits 0 and 2, and a Z operation on qubits 1 and 3.
```qsharp
use qubits = Qubit[4];
let bits = [true, false, true, false];
// Apply when index in `bits` is `true`.
ApplyPauliFromBitString(PauliX, true, bits, qubits);
// Apply when index in `bits` is `false`.
ApplyPauliFromBitString(PauliZ, false, bits, qubits);
```
