---
uid: Microsoft.Quantum.Logical.GreaterThanD
title: GreaterThanD function
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Logical
qsharp.name: GreaterThanD
qsharp.summary: Returns true if and only if a number is greater than another number.
---

# GreaterThanD function

Namespace: [Microsoft.Quantum.Logical](xref:Microsoft.Quantum.Logical)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns true if and only if a number is greater than another number.

```qsharp
function GreaterThanD (a : Double, b : Double) : Bool
```


## Input

### a : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The first value to be compared.


### b : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The second value to be compared.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` if and only if `a` is strictly greater than `b`.

## Remarks

The following are equivalent:```qsharplet cond = a > b;let cond = GreaterThanD(a, b);```