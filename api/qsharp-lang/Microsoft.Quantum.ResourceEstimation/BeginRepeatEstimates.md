---
uid: Qdk.Microsoft.Quantum.ResourceEstimation.BeginRepeatEstimates
title: BeginRepeatEstimates operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.ResourceEstimation
qsharp.name: BeginRepeatEstimates
qsharp.summary: Instructs the resource estimator to assume that the resources from the call of this operation until a call to `EndRepeatEstimates` are accounted for `count` times, without the need to execute the code that many times. Calls to `BeginRepeatEstimates` and `EndRepeatEstimates` can be nested. A helper operation `RepeatEstimates` allows to call the two functions in a `within` block.
---

# BeginRepeatEstimates operation

Namespace: Microsoft.Quantum.ResourceEstimation

```qsharp
operation BeginRepeatEstimates(count : Int) : Unit is Adj
```

## Summary

Instructs the resource estimator to assume that the resources from the
call of this operation until a call to `EndRepeatEstimates` are
accounted for `count` times, without the need to execute the code that many
times. Calls to `BeginRepeatEstimates` and `EndRepeatEstimates` can be nested.
A helper operation `RepeatEstimates` allows to call the two functions in a
`within` block.

## Input
### count
Assumed number of repetitions, factor to multiply the cost with
