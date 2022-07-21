---
uid: Microsoft.Quantum.Canon.HY
title: HY operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: HY
qsharp.summary: >-
  Applies the Y-basis analog to the Hadamard transformation
  that interchanges the Z and Y axes.
---

# HY operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies the Y-basis analog to the Hadamard transformationthat interchanges the Z and Y axes.

```qsharp
operation HY (target : Qubit) : Unit is Adj + Ctl
```


## Description

This operation can be simulated by the unitary matrix\begin{align}H_Y \mathrel{:=}S H =\frac{1}{\sqrt{2}}\begin{bmatrix}1 & 1 \\\\i & -i\end{bmatrix}.\end{align}

## Input

### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Qubit to which the gate should be applied.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## See Also

- [Microsoft.Quantum.Intrinsic.H](xref:Microsoft.Quantum.Intrinsic.H)