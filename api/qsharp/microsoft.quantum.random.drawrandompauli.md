---
uid: Microsoft.Quantum.Random.DrawRandomPauli
title: DrawRandomPauli operation
ms.date: 09/01/2023
ms.topic: managed-reference
ms.author: quantumdocwriters
description: Draws a random Pauli value.
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Random
qsharp.name: DrawRandomPauli
qsharp.summary: Draws a random Pauli value.
---

# DrawRandomPauli operation

Namespace: [Microsoft.Quantum.Random](xref:Microsoft.Quantum.Random)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Draws a random Pauli value.

```qsharp
operation DrawRandomPauli () : Pauli
```


## Output : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)

Either `PauliI`, `PauliX`, `PauliY`, or `PauliZ` with equalprobability.