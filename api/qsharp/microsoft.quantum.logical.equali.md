---
uid: Microsoft.Quantum.Logical.EqualI
title: EqualI function
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Logical
qsharp.name: EqualI
qsharp.summary: Returns true if and only if two inputs are equal.
---

# EqualI function

Namespace: [Microsoft.Quantum.Logical](xref:Microsoft.Quantum.Logical)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns true if and only if two inputs are equal.

```qsharp
function EqualI (a : Int, b : Int) : Bool
```


## Input

### a : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The first value to be compared.


### b : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The second value to be compared.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` if and only if `a` is equal to `b`.

## Remarks

The following are equivalent:```qsharplet cond = a == b;let cond = EqualI(a, b);```