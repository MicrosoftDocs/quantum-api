---
uid: Qdk.Std.Diagnostics.DumpRegister
title: DumpRegister function
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: DumpRegister
qsharp.summary: "Dumps the current target machine's status associated with the given qubits."
---

# DumpRegister function

Fully qualified name: Std.Diagnostics.DumpRegister

```qsharp
function DumpRegister(register : Qubit[]) : Unit
```

## Summary
Dumps the current target machine's status associated with the given qubits.

## Input
### qubits
The list of qubits to report.

## Remarks
This method allows you to dump the information associated with the state of the
given qubits.

For the local sparse-state simulator distributed as part of the
Quantum Development Kit, this method will write the
state of the given qubits (i.e. the wave function of the corresponding subsystem) as a
one-dimensional array of pairs of state indices and complex numbers, in which each element represents
the amplitudes of the probability of measuring the corresponding state.
If the given qubits are entangled with some other qubit and their
state can't be separated, it fails with a runtime error indicating that the qubits are entangled.

## Example
When run on the sparse-state simulator, the following snippet dumps
the Bell state (|00⟩ + |11⟩ ) / √2 to the console:
```qsharp
use left = Qubit();
use right = Qubit();
within {
    H(left);
    CNOT(left, right);
} apply {
    DumpRegister([left, right]);
}
```
