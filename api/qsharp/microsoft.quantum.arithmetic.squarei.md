---
uid: Microsoft.Quantum.Arithmetic.SquareI
title: SquareI operation
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: SquareI
qsharp.summary: >-
  Computes the square of the integer `xs` into `result`,
  which must be zero initially.
---

# SquareI operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Computes the square of the integer `xs` into `result`,which must be zero initially.

```qsharp
operation SquareI (xs : Microsoft.Quantum.Arithmetic.LittleEndian, result : Microsoft.Quantum.Arithmetic.LittleEndian) : Unit is Adj + Ctl
```


## Input

### xs : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian)

𝑛-bit number to square


### result : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian)

2𝑛-bit result, must be in state |0⟩ initially.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Uses a standard shift-and-add approach to compute the square. Saves𝑛-1 qubits compared to the straight-forward solution which firstcopies out `xs` before applying a regular multiplier and then undoingthe copy operation.