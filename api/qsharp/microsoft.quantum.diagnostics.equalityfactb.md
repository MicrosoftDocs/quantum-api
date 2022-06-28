---
uid: Microsoft.Quantum.Diagnostics.EqualityFactB
title: EqualityFactB function
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: EqualityFactB
qsharp.summary: Asserts that a classical Bool variable has the expected value.
---

# EqualityFactB function

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Asserts that a classical Bool variable has the expected value.

```qsharp
function EqualityFactB (actual : Bool, expected : Bool, message : String) : Unit
```


## Input

### actual : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

The variable to be checked.


### expected : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

The expected value.


### message : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

Failure message string to be used when the assertion is triggered.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

