---
uid: Microsoft.Quantum.Runtime.Decompositions.OpenQASM.MResetZ
title: MResetZ operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Runtime.Decompositions.OpenQASM
qsharp.name: MResetZ
qsharp.summary: >-
  Measures a single qubit in the Z basis,
  and resets it to a fixed initial state
  following the measurement.
---

# MResetZ operation

Namespace: [Microsoft.Quantum.Runtime.Decompositions.OpenQASM](xref:Microsoft.Quantum.Runtime.Decompositions.OpenQASM)

Package: [Microsoft.Quantum.Decompositions.OpenQASM](https://nuget.org/packages/Microsoft.Quantum.Decompositions.OpenQASM)


Measures a single qubit in the Z basis,and resets it to a fixed initial statefollowing the measurement.

```qsharp
operation MResetZ (target : Qubit) : Result
```


## Description

Performs a single-qubit measurement in the $Z$-basis,and ensures that the qubit is returned to $\ket{0}$following the measurement.

## Input

### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

A single qubit to be measured.



## Output : __invalid<Result>__

The result of measuring `target` in the Pauli $Z$ basis.