---
uid: Microsoft.Quantum.Diagnostics.EqualityFactI
title: EqualityFactI function
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: EqualityFactI
qsharp.summary: Asserts that a classical Int variable has the expected value.
---

# EqualityFactI function

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Asserts that a classical Int variable has the expected value.

```qsharp
function EqualityFactI (actual : Int, expected : Int, message : String) : Unit
```


## Input

### actual : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number to be checked.


### expected : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The expected value.


### message : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

Failure message string to be used when the assertion is triggered.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

