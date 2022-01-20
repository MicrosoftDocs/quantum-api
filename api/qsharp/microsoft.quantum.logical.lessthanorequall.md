---
uid: Microsoft.Quantum.Logical.LessThanOrEqualL
title: LessThanOrEqualL function
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Logical
qsharp.name: LessThanOrEqualL
qsharp.summary: >-
  Returns true if and only if a number is less than or equal to another
  number.
---

# LessThanOrEqualL function

Namespace: [Microsoft.Quantum.Logical](xref:Microsoft.Quantum.Logical)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns true if and only if a number is less than or equal to anothernumber.

```qsharp
function LessThanOrEqualL (a : BigInt, b : BigInt) : Bool
```


## Input

### a : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The first value to be compared.


### b : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The second value to be compared.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` if and only if `a` is less than or equal to `b`.

## Remarks

The following are equivalent:```qsharplet cond = a <= b;let cond = LessThanOrEqualL(a, b);```