---
uid: Microsoft.Quantum.Runtime.Decompositions.IonQ.Intrinsic.M
title: M operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.IonQ.Intrinsic
qsharp.name: M
qsharp.summary: >-
  All qubits are measured in the end of running IonQ program.
  This is equivalent to not beeing able to use a qubit after it was measured.
  For IonQ qubits is marked as measured and not used anymore after M was called.
---

# M operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.IonQ.Intrinsic](xref:Microsoft.Quantum.Runtime.Decompositions.IonQ.Intrinsic)

Package: [Microsoft.Quantum.Decompositions.IonQ](https://nuget.org/packages/Microsoft.Quantum.Decompositions.IonQ)


All qubits are measured in the end of running IonQ program.This is equivalent to not beeing able to use a qubit after it was measured.For IonQ qubits is marked as measured and not used anymore after M was called.

```qsharp
operation M (qubit : Qubit) : Result
```


## Input

### qubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : __invalid<Result>__

