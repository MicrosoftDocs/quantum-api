---
uid: Qdk.Std.ResourceEstimation.RepeatEstimates
title: RepeatEstimates operation
description: "Q# RepeatEstimates operation: Instructs the resource estimator to assume that the resources from the call of this operation until a call to `Adjoint RepeatEstimates` are accounted for `count` times, without the need to execute the code that many times."
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.ResourceEstimation
qsharp.name: RepeatEstimates
qsharp.summary: "Instructs the resource estimator to assume that the resources from the call of this operation until a call to `Adjoint RepeatEstimates` are accounted for `count` times, without the need to execute the code that many times."
---

# RepeatEstimates operation

Fully qualified name: Std.ResourceEstimation.RepeatEstimates

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
