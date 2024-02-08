---
uid: Microsoft.Quantum.Diagnostics.Contradiction
title: Contradiction function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: Contradiction
qsharp.summary: Checks whether a classical condition is false, and throws an exception if it is not.
---

# Contradiction function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Checks whether a classical condition is false, and throws an exception if it is not.

```qsharp
function Contradiction (actual : Bool, message : String) : Unit
```


## Input

### actual : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

The condition to be checked.


### message : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

Failure message string to be used as an error message if the classicalcondition is true.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Example

The following Q# code will print "Hello, world":```qsharpContradiction(2 == 3, "2 is not equal to 3.");Message("Hello, world.");```

## See Also

- [Microsoft.Quantum.Diagnostics.Fact](xref:Microsoft.Quantum.Diagnostics.Fact)