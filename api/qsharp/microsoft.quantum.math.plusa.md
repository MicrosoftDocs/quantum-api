---
uid: Microsoft.Quantum.Math.PlusA
title: PlusA function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: PlusA
qsharp.summary: Returns the sum (concatenation) of two inputs.
---

# PlusA function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the sum (concatenation) of two inputs.

```qsharp
function PlusA<'Element> (a : 'Element[], b : 'Element[]) : 'Element[]
```


## Input

### a : 'Element[]

The first input $a$ to be summed.


### b : 'Element[]

The second input $b$ to be summed.



## Output : 'Element[]

The sum $a + b$.

## Type Parameters

### 'Element

The type of each element in each of the two input arrays.