---
uid: Microsoft.Quantum.Random.DrawRandomPauli
title: DrawRandomPauli operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Random
qsharp.name: DrawRandomPauli
qsharp.summary: Draws a random Pauli value.
---

# DrawRandomPauli operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Random](xref:Microsoft.Quantum.Random)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Draws a random Pauli value.

```qsharp
operation DrawRandomPauli () : Pauli
```


## Output : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)

Either `PauliI`, `PauliX`, `PauliY`, or `PauliZ` with equalprobability.