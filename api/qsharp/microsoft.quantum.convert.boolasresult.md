---
uid: Microsoft.Quantum.Convert.BoolAsResult
title: BoolAsResult function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Convert
qsharp.name: BoolAsResult
qsharp.summary: >-
  Converts a `Bool` type to a `Result` type, where `true` is mapped to
  `One` and `false` is mapped to `Zero`.
---

# BoolAsResult function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Convert](xref:Microsoft.Quantum.Convert)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Converts a `Bool` type to a `Result` type, where `true` is mapped to`One` and `false` is mapped to `Zero`.

```qsharp
function BoolAsResult (input : Bool) : Result
```


## Input

### input : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`Bool` to be converted.



## Output : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

A `Result` representing the `input`.