---
uid: Microsoft.Quantum.Arrays.IsEmpty
title: IsEmpty function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: IsEmpty
qsharp.summary: Returns true if and only if an array is empty.
---

# IsEmpty function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Arrays](xref:Microsoft.Quantum.Arrays)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns true if and only if an array is empty.

```qsharp
function IsEmpty<'T> (array : 'T[]) : Bool
```


## Input

### array : 'T[]

The array to be checked.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` if and only if the array is empty (has length 0).

## Type Parameters

### 'T

