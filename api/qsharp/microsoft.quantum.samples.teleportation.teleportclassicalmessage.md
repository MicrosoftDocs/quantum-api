---
uid: Microsoft.Quantum.Samples.Teleportation.TeleportClassicalMessage
title: TeleportClassicalMessage operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.Teleportation
qsharp.name: TeleportClassicalMessage
qsharp.summary: >-
  Uses teleportation to send a classical message from one qubit
  to another.
---

# TeleportClassicalMessage operation

Namespace: [Microsoft.Quantum.Samples.Teleportation](xref:Microsoft.Quantum.Samples.Teleportation)

Package: [TeleportationSample](https://nuget.org/packages/TeleportationSample)


Uses teleportation to send a classical message from one qubitto another.

```qsharp
operation TeleportClassicalMessage (message : Bool) : Bool
```


## Input

### message : [Bool](xref:microsoft.quantum.lang-ref.bool)

If `true`, the source qubit (`here`) is prepared in the|1〉 state, otherwise the source qubit is prepared in |0〉.



## Output : [Bool](xref:microsoft.quantum.lang-ref.bool)

