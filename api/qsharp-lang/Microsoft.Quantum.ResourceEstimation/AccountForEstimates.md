---
uid: Qdk.Microsoft.Quantum.ResourceEstimation.AccountForEstimates
title: AccountForEstimates operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.ResourceEstimation
qsharp.name: AccountForEstimates
qsharp.summary: Account for the resource estimates of an unimplemented operation, which were obtained separately. This operation is only available when using resource estimator execution target.
---

# AccountForEstimates operation

Namespace: Microsoft.Quantum.ResourceEstimation

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
