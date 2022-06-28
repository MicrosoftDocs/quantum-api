---
uid: Microsoft.Quantum.Logical.NotEqualI
title: NotEqualI function
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Logical
qsharp.name: NotEqualI
qsharp.summary: Returns true if and only if two inputs are not equal.
---

# NotEqualI function

Namespace: [Microsoft.Quantum.Logical](xref:Microsoft.Quantum.Logical)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns true if and only if two inputs are not equal.

```qsharp
function NotEqualI (a : Int, b : Int) : Bool
```


## Input

### a : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The first value to be compared.


### b : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The second value to be compared.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` if and only if `a` is not equal to `b`.

## Remarks

The following are equivalent:```qsharplet cond = a != b;let cond = NotEqualI(a, b);```