---
uid: Microsoft.Quantum.Samples.Teleportation.Teleport
title: Teleport operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.Teleportation
qsharp.name: Teleport
qsharp.summary: >-
  Sends the state of one qubit to a target qubit by using
  teleportation.

  Notice that after calling Teleport, the state of `msg` is
  collapsed.
---

# Teleport operation

Namespace: [Microsoft.Quantum.Samples.Teleportation](xref:Microsoft.Quantum.Samples.Teleportation)

Package: [TeleportationSample](https://nuget.org/packages/TeleportationSample)


Sends the state of one qubit to a target qubit by usingteleportation.Notice that after calling Teleport, the state of `msg` iscollapsed.

```qsharp
operation Teleport (msg : Qubit, target : Qubit) : Unit
```


## Input

### msg : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

A qubit whose state we wish to send.


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

A qubit initially in the |0〉 state that we want to sendthe state of msg to.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

