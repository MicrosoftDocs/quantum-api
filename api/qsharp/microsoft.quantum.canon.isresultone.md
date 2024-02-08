---
uid: Microsoft.Quantum.Canon.IsResultOne
title: IsResultOne function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: IsResultOne
qsharp.summary: Tests if a given Result value is equal to `One`.
---

# IsResultOne function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Tests if a given Result value is equal to `One`.

```qsharp
function IsResultOne (input : Result) : Bool
```


## Input

### input : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

`Result` value to be tested.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

Returns `true` if `input` is equal to `One`.