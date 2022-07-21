---
uid: Microsoft.Quantum.Arithmetic.SubtractFxP
title: SubtractFxP operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: SubtractFxP
qsharp.summary: Computes `minuend - subtrahend` and stores the difference in `minuend`.
---

# SubtractFxP operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Computes `minuend - subtrahend` and stores the difference in `minuend`.

```qsharp
operation SubtractFxP (minuend : Microsoft.Quantum.Arithmetic.FixedPoint, subtrahend : Microsoft.Quantum.Arithmetic.FixedPoint) : Unit is Adj + Ctl
```


## Input

### minuend : [FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)

The minuend of the subtraction - the number from which the other is subtracted.


### subtrahend : [FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)

The subtrahend of the subtraction - the number to be subtracted.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Computes the difference by inverting `subtrahend` before and after addingit to `minuend`.  Notice that `minuend`, the first argument is updated.