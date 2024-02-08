---
uid: Microsoft.Quantum.Convert.ResultAsBool
title: ResultAsBool function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Convert
qsharp.name: ResultAsBool
qsharp.summary: >-
  Converts a `Result` type to a `Bool` type, where `One` is mapped to
  `true` and `Zero` is mapped to `false`.
---

# ResultAsBool function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Convert](xref:Microsoft.Quantum.Convert)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Converts a `Result` type to a `Bool` type, where `One` is mapped to`true` and `Zero` is mapped to `false`.

```qsharp
function ResultAsBool (input : Result) : Bool
```


## Input

### input : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

`Result` to be converted.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

A `Bool` representing the `input`.