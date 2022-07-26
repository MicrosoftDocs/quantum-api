---
uid: Microsoft.Quantum.Logical.NotEqualR
title: NotEqualR function
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Logical
qsharp.name: NotEqualR
qsharp.summary: Returns true if and only if two inputs are not equal.
---

# NotEqualR function

Namespace: [Microsoft.Quantum.Logical](xref:Microsoft.Quantum.Logical)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns true if and only if two inputs are not equal.

```qsharp
function NotEqualR (a : Result, b : Result) : Bool
```


## Input

### a : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

The first value to be compared.


### b : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

The second value to be compared.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` if and only if `a` is not equal to `b`.

## Remarks

The following are equivalent:```qsharplet cond = a != b;let cond = NotEqualR(a, b);```