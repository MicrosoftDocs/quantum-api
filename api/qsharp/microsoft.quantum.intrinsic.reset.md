---
uid: Microsoft.Quantum.Intrinsic.Reset
title: Reset operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: Reset
qsharp.summary: >-
  Given a single qubit, measures it and ensures it is in the |0⟩ state
  such that it can be safely released.
---

# Reset operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type2.Core](https://nuget.org/packages/Microsoft.Quantum.Type2.Core)


Given a single qubit, measures it and ensures it is in the |0⟩ statesuch that it can be safely released.

```qsharp
operation Reset (qubit : Qubit) : Unit
```


## Input

### qubit : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

The qubit whose state is to be reset to $\ket{0}$.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

