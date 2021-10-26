---
uid: Microsoft.Quantum.Logical.GreaterThanOrEqualI
title: GreaterThanOrEqualI function
ms.date: 10/22/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Logical
qsharp.name: GreaterThanOrEqualI
qsharp.summary: >-
  Returns true if and only if a number is greater than or equal to another
  number.
---

# GreaterThanOrEqualI function

Namespace: [Microsoft.Quantum.Logical](xref:Microsoft.Quantum.Logical)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns true if and only if a number is greater than or equal to anothernumber.

```qsharp
function GreaterThanOrEqualI (a : Int, b : Int) : Bool
```


## Input

### a : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The first value to be compared.


### b : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The second value to be compared.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` if and only if `a` is greater than or is equal to `b`.

## Remarks

The following are equivalent:```qsharplet cond = a >= b;let cond = GreaterThanOrEqualI(a, b);```