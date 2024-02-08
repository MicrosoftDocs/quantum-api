---
uid: Microsoft.Quantum.Chemistry.IsNotZero
title: IsNotZero function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Chemistry
qsharp.name: IsNotZero
qsharp.summary: Checks whether a `Double` number is not approximately zero.
---

# IsNotZero function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Chemistry](xref:Microsoft.Quantum.Chemistry)

Package: [Microsoft.Quantum.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Chemistry)


Checks whether a `Double` number is not approximately zero.

```qsharp
function IsNotZero (number : Double) : Bool
```


## Input

### number : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Number to be checked



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

Returns true if `number` has an absolute value greater than `1e-15`.