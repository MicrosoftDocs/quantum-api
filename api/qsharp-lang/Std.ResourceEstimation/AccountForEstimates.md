---
uid: Qdk.Std.ResourceEstimation.AccountForEstimates
title: AccountForEstimates operation
description: "Q# AccountForEstimates operation: Account for the resource estimates of an unimplemented operation, which were obtained separately. This operation is only available when using resource estimator execution target."
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.ResourceEstimation
qsharp.name: AccountForEstimates
qsharp.summary: "Account for the resource estimates of an unimplemented operation, which were obtained separately. This operation is only available when using resource estimator execution target."
---

# AccountForEstimates operation

Fully qualified name: Std.ResourceEstimation.AccountForEstimates

```qsharp
operation AccountForEstimates(estimates : (Int, Int)[], layout : Int, arguments : Qubit[]) : Unit is Adj
```

## Summary
Account for the resource estimates of an unimplemented operation,
which were obtained separately. This operation is only available
when using resource estimator execution target.
## Input
### cost
Array of tuples containing resource estimates of the operation. For example,
if the operation uses three T gates, pass the tuple returned by TCount(3)
as one of the array elements.
### layout
Provides the layout scheme that is used to convert logical resource estimates
to physical resource estimates. Only PSSPCLayout() is supported at this time.
### arguments
Operation takes these qubits as its arguments.
