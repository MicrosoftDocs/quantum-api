---
uid: Microsoft.Quantum.Tests.AssertAllInversesAreCorrect
title: AssertAllInversesAreCorrect operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Tests
qsharp.name: AssertAllInversesAreCorrect
qsharp.summary: >-
  Tests that applying a single qubit Clifford and then applying its inverse
  correctly results in no evolution of the target qubit.
---

# AssertAllInversesAreCorrect operation

Namespace: [Microsoft.Quantum.Tests](xref:Microsoft.Quantum.Tests)

Package: [Microsoft.Quantum.Standard.Tests](https://nuget.org/packages/Microsoft.Quantum.Standard.Tests)


Tests that applying a single qubit Clifford and then applying its inversecorrectly results in no evolution of the target qubit.

```qsharp
operation AssertAllInversesAreCorrect () : Unit
```


## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

This does not test that the group product on the single-qubit Cliffordgroup is correct.