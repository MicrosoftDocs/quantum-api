---
uid: Microsoft.Quantum.Convert.ResultArrayAsInt
title: ResultArrayAsInt function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Convert
qsharp.name: ResultArrayAsInt
qsharp.summary: Produces a non-negative integer from a string of Results in little endian format.
---

# ResultArrayAsInt function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Convert](xref:Microsoft.Quantum.Convert)

Package: [Microsoft.Quantum.Type2.Core](https://nuget.org/packages/Microsoft.Quantum.Type2.Core)


Produces a non-negative integer from a string of Results in little endian format.

```qsharp
function ResultArrayAsInt (results : Result[]) : Int
```


## Input

### results : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)[]

Results in binary representation of number.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

