---
uid: Microsoft.Quantum.Random.DrawRandomSingleQubitClifford
title: DrawRandomSingleQubitClifford operation
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Random
qsharp.name: DrawRandomSingleQubitClifford
qsharp.summary: >-
  Returns a single-qubit Clifford operator chosen uniformly at random
  from the single-qubit Clifford group.
---

# DrawRandomSingleQubitClifford operation

Namespace: [Microsoft.Quantum.Random](xref:Microsoft.Quantum.Random)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns a single-qubit Clifford operator chosen uniformly at randomfrom the single-qubit Clifford group.

```qsharp
operation DrawRandomSingleQubitClifford () : Microsoft.Quantum.Synthesis.SingleQubitClifford
```


## Output : [SingleQubitClifford](xref:Microsoft.Quantum.Synthesis.SingleQubitClifford)

A single-qubit Clifford operator, drawn at random from the 192 elementsof the single-qubit Clifford group.