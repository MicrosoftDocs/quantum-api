---
uid: Qdk.Std.Diagnostics.StopCountingQubits
title: StopCountingQubits operation
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: StopCountingQubits
qsharp.summary: "Stops counting the number of qubits allocated and returns the count. Fails if the qubits were not being counted."
---

# StopCountingQubits operation

Fully qualified name: Std.Diagnostics.StopCountingQubits

```qsharp
operation StopCountingQubits() : Int
```

## Summary
Stops counting the number of qubits allocated and returns the count. Fails if the qubits were not being counted.

## Description
This operation allows you to stop counting the number of qubits allocated and returns the count since the
last call to `StartCountingQubits`. If the qubits were not being counted, it triggers a runtime failure.

## Output
The number of unique qubits allocated since the last call to `StartCountingQubits`.
