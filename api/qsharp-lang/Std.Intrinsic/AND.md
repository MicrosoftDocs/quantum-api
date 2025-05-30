---
uid: Qdk.Std.Intrinsic.AND
title: AND operation
description: "Q# AND operation: Applies the AND gate that is more efficient for use with decomposition of multi-controlled operations. Note that target qubit must be in |0⟩ state."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: AND
qsharp.summary: "Applies the AND gate that is more efficient for use with decomposition of multi-controlled operations. Note that target qubit must be in |0⟩ state."
---

# AND operation

Fully qualified name: Std.Intrinsic.AND

```qsharp
operation AND(control1 : Qubit, control2 : Qubit, target : Qubit) : Unit is Adj
```

## Summary
Applies the AND gate that is more efficient for use with decomposition of multi-controlled operations.
Note that target qubit must be in |0⟩ state.

## Input
### control1
First control qubit for the AND gate.
### control2
Second control qubit for the AND gate.
### target
Target qubit for the AND gate.

## Remarks
Use the Adjoint only for uncomputation purposes.
