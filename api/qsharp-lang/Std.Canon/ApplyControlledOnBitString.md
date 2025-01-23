---
uid: Qdk.Std.Canon.ApplyControlledOnBitString
title: ApplyControlledOnBitString operation
description: "Q# ApplyControlledOnBitString operation: Applies `oracle` on `target` when `controlRegister` is in the state specified by `bits`."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyControlledOnBitString
qsharp.summary: "Applies `oracle` on `target` when `controlRegister` is in the state specified by `bits`."
---

# ApplyControlledOnBitString operation

Fully qualified name: Std.Canon.ApplyControlledOnBitString

```qsharp
operation ApplyControlledOnBitString<'T>(bits : Bool[], oracle : ('T => Unit is Adj + Ctl), controlRegister : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Applies `oracle` on `target` when `controlRegister`
is in the state specified by `bits`.

## Description
Applies a unitary operation `oracle` on the `target`, controlled
on a state specified by a given bit mask `bits`.
The bit at `bits[i]` corresponds to qubit at `controlRegister[i]`.
The pattern given by `bits` may be shorter than `controlRegister`,
in which case additional control qubits are ignored (that is, neither
controlled on |0⟩ nor |1⟩).
If `bits` is longer than `controlRegister`, an error is raised.

## Input
### bits
The bit string to control the given unitary operation on.
### oracle
The unitary operation to be applied on the target.
### target
The target to be passed to `oracle` as an input.
### controlRegister
A quantum register that controls application of `oracle`.

## Example
```qsharp
// When bits = [1,0,0] oracle is applied if and only if controlRegister
// is in the state |100⟩.
use t = Qubit();
use c = Qubit[3];
X(c[0]);
ApplyControlledOnBitString([true, false, false], X, c, t);
Message($"{M(t)}"); // Prints `One` since oracle `X` was applied.
```
