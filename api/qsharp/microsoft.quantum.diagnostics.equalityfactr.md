---
uid: Microsoft.Quantum.Diagnostics.EqualityFactR
title: EqualityFactR function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: EqualityFactR
qsharp.summary: Asserts that a classical Result variable has the expected value.
---

# EqualityFactR function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Asserts that a classical Result variable has the expected value.

```qsharp
function EqualityFactR (actual : Result, expected : Result, message : String) : Unit
```


## Input

### actual : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

The variable to be checked.


### expected : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

The expected value.


### message : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

Failure message string to be used when the assertion is triggered.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

