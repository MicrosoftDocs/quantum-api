---
uid: Microsoft.Quantum.Logical.EqualR
title: EqualR function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Logical
qsharp.name: EqualR
qsharp.summary: Returns true if and only if two inputs are equal.
---

# EqualR function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Logical](xref:Microsoft.Quantum.Logical)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns true if and only if two inputs are equal.

```qsharp
function EqualR (a : Result, b : Result) : Bool
```


## Input

### a : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

The first value to be compared.


### b : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

The second value to be compared.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` if and only if `a` is equal to `b`.

## Remarks

The following are equivalent:```qsharplet cond = a == b;let cond = EqualR(a, b);```