---
uid: Qdk.Std.Diagnostics.StartCountingQubits
title: StartCountingQubits operation
description: "Q# StartCountingQubits operation: Starts counting the number of qubits allocated. Fails if qubits are already being counted."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: StartCountingQubits
qsharp.summary: "Starts counting the number of qubits allocated. Fails if qubits are already being counted."
---

# StartCountingQubits operation

Fully qualified name: Std.Diagnostics.StartCountingQubits

```qsharp
operation StartCountingQubits() : Unit
```

## Summary
Starts counting the number of qubits allocated. Fails if qubits are already being counted.

## Description
This operation allows you to count the number of qubits allocated until `StopCountingQubits` is called.
The counter is incremented only when a new unique qubit is allocated, so reusing the same qubit multiple times
across separate allocations does not increment the counter.

## Remarks
This operation is useful for tracking the number of unique qubits allocated in a given scope. Along with
`StopCountingQubits`, it can be used to verify that a given operation does not allocate more qubits than
expected. For example,
```qsharp
StartCountingQubits();
testOperation();
let qubitsAllocated = StopCountingQubits();
Fact(qubitsAllocated <= 4, "Operation should not allocate more than 4 qubits.");
```
