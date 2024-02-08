---
uid: Microsoft.Quantum.Math.MaxL
title: MaxL function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: MaxL
qsharp.summary: Returns the larger of two specified numbers.
---

# MaxL function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns the larger of two specified numbers.

```qsharp
function MaxL (a : BigInt, b : BigInt) : BigInt
```


## Input

### a : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The first number to be compared.


### b : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The second number to be compared.



## Output : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The larger of `a` and `b`.

## Example

```qsharplet max = MaxL(314L, 271L);  // 314L```

## See Also

- [Microsoft.Quantum.MaxD](xref:Microsoft.Quantum.MaxD)
- [Microsoft.Quantum.MaxI](xref:Microsoft.Quantum.MaxI)