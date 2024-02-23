---
uid: Qdk.Microsoft.Quantum.ResourceEstimation.RepeatEstimates
title: RepeatEstimates operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.ResourceEstimation
qsharp.name: RepeatEstimates
qsharp.summary: Instructs the resource estimator to assume that the resources from the call of this operation until a call to `Adjoint RepeatEstimates` are accounted for `count` times, without the need to execute the code that many times.
---

# RepeatEstimates operation

Namespace: Microsoft.Quantum.ResourceEstimation

```qsharp
operation RepeatEstimates(count : Int) : Unit is Adj
```

## Summary

Instructs the resource estimator to assume that the resources from the
call of this operation until a call to `Adjoint RepeatEstimates` are
accounted for `count` times, without the need to execute the code that many
times.

## Input
### count
Assumed number of repetitions, factor to multiply the cost with
