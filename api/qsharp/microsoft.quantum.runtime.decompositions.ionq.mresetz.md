---
uid: Microsoft.Quantum.Runtime.Decompositions.IonQ.MResetZ
title: MResetZ operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.IonQ
qsharp.name: MResetZ
qsharp.summary: Measures a single qubit in the Z basis.
---

# MResetZ operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.IonQ](xref:Microsoft.Quantum.Runtime.Decompositions.IonQ)

Package: [Microsoft.Quantum.Decompositions.IonQ](https://nuget.org/packages/Microsoft.Quantum.Decompositions.IonQ)


Measures a single qubit in the Z basis.

```qsharp
operation MResetZ (target : Qubit) : Result
```


## Description

Performs a single-qubit measurement in the $Z$-basis.

## Input

### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

A single qubit to be measured.



## Output : __invalid<Result>__

The result of measuring `target` in the Pauli $Z$ basis.