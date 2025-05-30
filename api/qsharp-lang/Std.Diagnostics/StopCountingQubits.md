---
uid: Qdk.Std.Diagnostics.StopCountingQubits
title: StopCountingQubits operation
description: "Q# StopCountingQubits operation: Stops counting the number of qubits allocated and returns the count. Fails if the qubits were not being counted."
ms.date: 05/29/2025
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
