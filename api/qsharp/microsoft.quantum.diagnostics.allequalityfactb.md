---
uid: Microsoft.Quantum.Diagnostics.AllEqualityFactB
title: AllEqualityFactB function
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: AllEqualityFactB
qsharp.summary: Asserts that two arrays of boolean values are equal.
---

# AllEqualityFactB function

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Asserts that two arrays of boolean values are equal.

```qsharp
function AllEqualityFactB (actual : Bool[], expected : Bool[], message : String) : Unit
```


## Input

### actual : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)[]

The array that is produced by a test case of interest.


### expected : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)[]

The array that is expected from a test case of interest.


### message : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

A message to be printed if the arrays are not equal.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

