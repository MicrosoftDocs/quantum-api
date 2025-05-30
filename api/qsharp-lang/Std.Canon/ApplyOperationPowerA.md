---
uid: Qdk.Std.Canon.ApplyOperationPowerA
title: ApplyOperationPowerA operation
description: "Q# ApplyOperationPowerA operation: Applies operation `op` to the `target` `power` times. If `power` is negative, the adjoint of `op` is used. If `power` is 0, the operation `op` is not applied."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyOperationPowerA
qsharp.summary: "Applies operation `op` to the `target` `power` times. If `power` is negative, the adjoint of `op` is used. If `power` is 0, the operation `op` is not applied."
---

# ApplyOperationPowerA operation

Fully qualified name: Std.Canon.ApplyOperationPowerA

```qsharp
operation ApplyOperationPowerA<'T>(power : Int, op : ('T => Unit is Adj), target : 'T) : Unit is Adj
```

## Summary
Applies operation `op` to the `target` `power` times.
If `power` is negative, the adjoint of `op` is used.
If `power` is 0, the operation `op` is not applied.
