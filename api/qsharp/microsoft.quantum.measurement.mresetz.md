---
uid: Microsoft.Quantum.Measurement.MResetZ
title: MResetZ operation
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Measurement
qsharp.name: MResetZ
qsharp.summary: >-
  Measures a single qubit in the Z basis,
  and resets it to a fixed initial state
  following the measurement.
---

# MResetZ operation

Namespace: [Microsoft.Quantum.Measurement](xref:Microsoft.Quantum.Measurement)

Package: [Microsoft.Quantum.Type2.Core](https://nuget.org/packages/Microsoft.Quantum.Type2.Core)


Measures a single qubit in the Z basis,and resets it to a fixed initial statefollowing the measurement.

```qsharp
operation MResetZ (target : Qubit) : Result
```


## Description

Performs a single-qubit measurement in the $Z$-basis,and ensures that the qubit is returned to $\ket{0}$following the measurement.

## Input

### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

A single qubit to be measured.



## Output : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

The result of measuring `target` in the Pauli $Z$ basis.