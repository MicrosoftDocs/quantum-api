---
uid: Qdk.Std.Diagnostics.DumpMachine
title: DumpMachine function
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: DumpMachine
qsharp.summary: "Dumps the current target machine's status."
---

# DumpMachine function

Fully qualified name: Std.Diagnostics.DumpMachine

```qsharp
function DumpMachine() : Unit
```

## Summary
Dumps the current target machine's status.

## Description
This method allows you to dump information about the current quantum state.
The actual information generated and the semantics are specific to each target machine.

For the local sparse-state simulator distributed as part of the
Quantum Development Kit, this method will write the wave function as a
one-dimensional array of pairs of state indices and complex numbers, in which each element represents
the amplitudes of the probability of measuring the corresponding state.

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
    DumpMachine();
}
```
