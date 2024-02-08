---
uid: Microsoft.Quantum.Logical.GreaterThanOrEqualD
title: GreaterThanOrEqualD function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Logical
qsharp.name: GreaterThanOrEqualD
qsharp.summary: >-
  Returns true if and only if a number is greater than or equal to another
  number.
---

# GreaterThanOrEqualD function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Logical](xref:Microsoft.Quantum.Logical)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns true if and only if a number is greater than or equal to anothernumber.

```qsharp
function GreaterThanOrEqualD (a : Double, b : Double) : Bool
```


## Input

### a : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The first value to be compared.


### b : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The second value to be compared.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` if and only if `a` is greater than or is equal to `b`.

## Remarks

The following are equivalent:```qsharplet cond = a >= b;let cond = GreaterThanOrEqualD(a, b);```