---
uid: Qdk.Std.ResourceEstimation.BeginRepeatEstimates
title: BeginRepeatEstimates operation
description: "Q# BeginRepeatEstimates operation: Instructs the resource estimator to assume that the resources from the call of this operation until a call to `EndRepeatEstimates` are accounted for `count` times, without the need to execute the code that many times. Calls to `BeginRepeatEstimates` and `EndRepeatEstimates` can be nested. A helper operation `RepeatEstimates` allows to call the two functions in a `within` block."
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.ResourceEstimation
qsharp.name: BeginRepeatEstimates
qsharp.summary: "Instructs the resource estimator to assume that the resources from the call of this operation until a call to `EndRepeatEstimates` are accounted for `count` times, without the need to execute the code that many times. Calls to `BeginRepeatEstimates` and `EndRepeatEstimates` can be nested. A helper operation `RepeatEstimates` allows to call the two functions in a `within` block."
---

# BeginRepeatEstimates operation

Fully qualified name: Std.ResourceEstimation.BeginRepeatEstimates

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
