---
uid: Microsoft.Quantum.Convert.BoolArrayAsResultArray
title: BoolArrayAsResultArray function
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Convert
qsharp.name: BoolArrayAsResultArray
qsharp.summary: >-
  Converts a `Bool[]` type to a `Result[]` type, where `true` is mapped to
  `One` and `false` is mapped to `Zero`.
---

# BoolArrayAsResultArray function

Namespace: [Microsoft.Quantum.Convert](xref:Microsoft.Quantum.Convert)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Converts a `Bool[]` type to a `Result[]` type, where `true` is mapped to`One` and `false` is mapped to `Zero`.

```qsharp
function BoolArrayAsResultArray (input : Bool[]) : Result[]
```


## Input

### input : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)[]

`Bool[]` to be converted.



## Output : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)[]

A `Result[]` representing the `input`.